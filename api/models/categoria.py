from sql_alchemy import banco

class CategaoriaModal(banco.Model):
    __tablename__ = 'CATEGORIA'

    idcategoria = banco.Column(banco.Integer, primary_key=True)
    nome_categoria = banco.Column(banco.String(20))

    def __init__(self, idcategoria, nome_categoria):
        self.idcategoria = idcategoria
        self.nome_categoria = nome_categoria

    def json(self):
        return {
            'idcategoria': self.idcategoria,
            'nome_categoria': self.nome_categoria
        }

    @classmethod
    def find_categoria
