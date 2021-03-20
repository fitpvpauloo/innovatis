from .sql_alchemy import banco

class MovimentacaoModel(banco.Model):
    __tablename__ = 'MOVIMENTACAO'

    idmovimentacao = banco.Column(banco.Integer, primary_key=True)
    quantidade = banco.Column(banco.Integer)
    tipo_movimentacao = banco.Column(banco.String(20))
    data_hora = banco.Column(banco.DateTime)
    id_usuario = banco.Column(banco.Integer, banco.ForeignKey('USUARIO.idusuario'))
    id_produto = banco.Column(banco.Integer, banco.ForeignKey('PRODUTO.idproduto'))

    

    def __init__(self, idmovimentacao, quantidade, tipo_movimentacao, data_hora, id_usuario, id_produto):
        self.idmovimentacao = idmovimentacao
        self.quantidade = quantidade
        self.tipo_movimentacao = tipo_movimentacao
        self.data_hora = data_hora
        self.id_usuario = id_usuario
        self.id_produto = id_produto

    def json(self):
        return {
          'idmovimentacao': self.idmovimentacao,
          'quantidade': self.quantidade,
          'tipo_movimentacao': self.tipo_movimentacao,
          'data_hora': self.data_hora,
          'id_usuario': self.id_usuario,
          'id_produto': self.id_produto,
        }

    @classmethod
    def find_movimentacao(cls, idmovimentacao):
        movimentacao = cls.query.filter_by(idmovimentacao=idmovimentacao).first()
        if movimentacao:
            return movimentacao
        return None


    def save_movimentacao(self):
        banco.session.add(self)
        banco.session.commit()

    
    