from fastapi import FastAPI
from fastapi.requests import Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from models.Interpretador import Interpretador
from requestsBaseModels.InterpretadorRequestBaseModel import InterpretadorRequestBaseModel
from responsesBaseModels.InterpretadorResponseBaseModel import InterpretadorResponseBaseModel


app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get('/', response_class=HTMLResponse)
async def main(request: Request):
    context = {"request": request}
    response = templates.TemplateResponse("index.html", context)
    return response


@app.post('/', response_model=InterpretadorResponseBaseModel)
async def responder(request: InterpretadorRequestBaseModel):
    texto = request.texto
    pergunta = request.pergunta
    interpretador = Interpretador(texto, pergunta)
    resposta = interpretador.resposta
    response = InterpretadorResponseBaseModel(resposta=resposta)    
    return response


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=7860)