from transformers import pipeline
from transformers.pipelines.base import Pipeline


class Interpretador:

    def __init__(self, texto: str, pergunta: str) -> None:
        self._texto = texto
        self._pergunta = pergunta
        self._responder()


    @property
    def resposta(self) -> str:
        return self._resposta
    
    
    def _responder(self):
        resposta_pipeline = pipeline("question-answering")
        resposta_pipeline: Pipeline = resposta_pipeline(context = self._texto, question = self._pergunta)
        self._resposta = str(resposta_pipeline["answer"])