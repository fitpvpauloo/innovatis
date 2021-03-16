from flask_restful import Resource, reqparse
from ..models.produto import ProdutoModel
from ..models.categoria import CategoriaModel

class Produtos():
    def get():
        return {'produtos': [produto.json() for produto in ProdutoModel.query.all()]}

class NovoProduto():
    def post():
        dados = Produto.atributos.parse_args()
        if ProdutoModel.find_nome_produto(dados.nome_produto):
            return {"message": "Produto com nome: '{}' already exists.".format(dados.nome_produto)},400

        produto = ProdutoModel(None, **dados)
        try:
            produto.save_produto()
        except:
            return {"message": "An error ocurred trying to save produto"}, 500
        return produto.json()

class Produto():
    atributos = reqparse.RequestParser()
    atributos.add_argument('nome_produto')
    atributos.add_argument('status_produto')
    atributos.add_argument('quantidade')
    atributos.add_argument('id_fornecedor')
    atributos.add_argument('id_categoria')

    def get(id):
        produto = ProdutoModel.find_produto(id)
        if produto:
            return produto.json()
        return {"message": "Produto não encontrado."}, 404

    def put(id):
        dados = Produto.atributos.parse_args()
        produtoEncontrado = ProdutoModel.find_produto(id)
        if produtoEncontrado:
            print('Produto encontrado')            
            produtoEncontrado.update_produto(dados.nome_produto, dados.status_produto, dados.quantidade)
            produtoEncontrado.save_produto()
            return produtoEncontrado.json(), 200
        produto = ProdutoModel(id, **dados)
        try:
            produto.save_produto()
        except:
            return {"message": "An error ocurred trying to save produto"}, 500
        return produto.json(), 201


    def delete(id):
        produto = ProdutoModel.find_produto(id)
        if produto:
            try:
                produto.delete_produto()
            except:
                return {"message": "Ocorreu um erro ao excluir o produto"}, 500
            return {"message": "Produto removido"}
        return {"message": "Produto não encontrado"}, 404
