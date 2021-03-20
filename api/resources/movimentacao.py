from flask_restful import Resource, reqparse
from ..models.movimentacao import MovimentacaoModel
from ..models.produto import ProdutoModel
from ..models.usuario import UsuarioModel

atributos = reqparse.RequestParser()
atributos.add_argument('quantidade')
atributos.add_argument('tipo_movimentacao')
atributos.add_argument('id_usuario')
atributos.add_argument('id_produto')

def validaQuantidade(quantidade):
    try:
        if int(quantidade) < 0:
            return "Quantidade inválida! Informe uma quantidade maior ou igual à zero."
    except:
        return "Quantidade inválida! Informe uma quantidade maior ou igual à zero."
    return ""

def validaProduto(idproduto, tipo_movimentacao, quantidade):
    if tipo_movimentacao != 'SAIDA' and tipo_movimentacao != 'ENTRADA':
        return "Tipo de movimentação inválida! Informe uma movimentação de SAIDA ou ENTRADA"

    try:
        if int(idproduto) <= 0:
            return "Produto inválido! Informe um id produto maior ou igual à zero."

        produto = ProdutoModel.find_produto(produto)
        if not produto:
            return "Produto não encontrado."

        if tipo_movimentacao == 'SAIDA' and int(quantidade) > produto.quantidade:
            return "Quantidade maior que a disponível. Quantidade disponível: '{}'".format(produto.quantidade)
    except:
        return "Produto inválido!"
    return ""

def validaUsuario(idusuario):
    try:
        if int(idusuario) <= 0:
            return "Usuário inválido! Informe um id de usuário maior ou igual à zero."

        usuario = UsuarioModel.find_usuario(idusuario)
        if not fornecedor:
            return "Usuário não encontrado"
    except:
        return "Usuário inválido!"
    return ""


class Movimentacoes():
    def get():
        return {'movimentacoes': [movimentacao.json() for movimentacao in MovimentacaoModel.query.all()]}


class NovaMovimentacao():
    def post():
        dados = atributos.parse_args()

        errorMessage = validaProduto(dados.quantidade)
        if errorMessage != "":
            return {"message": errorMessage}, 400
        
        errorMessage = validaCategoria(dados.id_produto, dados.tipo_movimentacao, dados.quantidade)
        if errorMessage != "":
            return {"message": errorMessage}, 400

        errorMessage = validaFornecedor(dados.id_usuario)
        if errorMessage != "":
            return {"message": errorMessage}, 400

        movimentacao = MovimentacaoModel(None, **dados)
        produto = ProdutoModel.find_produto(id_produto)

        if dados.tipo_movimentacao == 'SAIDA':
            produto.diminui_quantidade(dados.quantidade)
        else:
            produto.aumenta_quantidade(dados.quantidade)

        try:
          produto.save_produto()
        except:
          return {"message": "Ocorreu um erro ao tentar atualizar o estoque do produto"}

        try:
          movimentacao.save_movimentacao()
        except:
          return {"message": "Ocorreu um erro ao tentar salvar a movimentação"}

        
