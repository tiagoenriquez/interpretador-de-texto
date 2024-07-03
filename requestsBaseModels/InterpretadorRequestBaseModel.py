from pydantic import BaseModel


class InterpretadorRequestBaseModel(BaseModel):
    texto: str
    pergunta: str