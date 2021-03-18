from flask_restful import Resource, reqparse
from ..models.categoria import CategoriaModel


class Categorias():
    def get():
        return {'categorias': [categoria.json() for categoria in CategoriaModel.query.all()]}

class NovaCategoria():
    def post():
        dados = Categoria.atributos.parse_args()

        if CategoriaModel.find_nome_categoria(dados.nome_categoria):
            return {"message": "Categoria : '{}' já cadastrada.".format(dados.nome_categoria)},400

        categoria = CategoriaModel(None, dados.nome_categoria)

        try:
            categoria.save_categoria()
        except:
            return {"message": "Ocorreu um erro ao tentar salvar categoria."}, 500
        return categoria.json()

class Categoria():
    atributos = reqparse.RequestParser()
    atributos.add_argument('nome_categoria')

    def get(id):
        categoria = CategoriaModel.find_categoria(id)
        if categoria:
            return categoria.json()
        return {'message': 'categoria não encontrada'}, 404

    def put(id):
        dados = Categoria.atributos.parse_args()

        categoriaEncontrada = CategoriaModel.find_categoria(id)
        if categoriaEncontrada:
            print('Categoria encontrada')
            categoriaEncontrada.update_categoria(**dados)
            categoriaEncontrada.save_categoria()
            return categoriaEncontrada.json(), 200
        categoria = CategoriaModel(id, **dados)
        try:
            categoria.save_categoria()
        except:
            return {"message": "Ocorreu um erro ao tentar salvar categoria."}, 500
        return categoria.json(), 201

    def delete(id):
        categoria = CategoriaModel.find_categoria(id)
        if categoria:
            try:
                categoria.delete_categoria()
            except:
                return {"message": "Ocorreu um erro ao tentar excluir categoria."}, 500
            return {"message": "categoria removido"}
        return {"message": "categoria não encontrado"},404
