from pydantic import BaseModel


class InterpretadorResponseBaseModel(BaseModel):
    resposta: str