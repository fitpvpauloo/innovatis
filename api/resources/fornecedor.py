from flask_restful import Resource, reqparse
from models.fornecedor import FornecedorModel

class Fornecedores(Resource):
    def get(self):
        return {'fornecedores': [fornecedor.json() for fornecedor in FornecedorModel.query.all()]}

class NovoFornecedor(Resource):
    def post(self):
        dados = Fornecedor.atributos.parse_args()

        if FornecedorModel.find_fornecedorCNPJ(dados.cnpj):
            return {"message": "Fornecedor com CNPJ: '{}' já cadastrado.".format(dados.cnpj)},400

        fornecedor = FornecedorModel(None, **dados)

        try:
            fornecedor.save_fornecedor()
        except:
            return {"message": "Ocorreu um erro ao salvar fornecedor"}, 500
        return fornecedor.json()

class Fornecedor(Resource):
    atributos = reqparse.RequestParser()
    atributos.add_argument('razao_social')
    atributos.add_argument('cnpj')

    def get(self, id):
        fornecedor = FornecedorModel.find_fornecedor(id)
        if fornecedor:
            return fornecedor.json()
        return {'message': 'Fornecedor não encontrado'}, 404

    def put(self, id):
        dados = Fornecedor.atributos.parse_args()

        fornecedorEncontrado = FornecedorModel.find_fornecedor(id)
        if fornecedorEncontrado:
            fornecedorEncontrado.update_fornecedor(**dados)
            fornecedorEncontrado.save_fornecedor()
            return fornecedorEncontrado.json(), 200
        fornecedor = FornecedorModel(None, **dados)
        try:
            fornecedor.save_fornecedor()
        except:
            return {"message": "Ocorreu um erro ao salvar fornecedor"}, 500
        return fornecedor.json(), 201

    def delete(self, id):
        fornecedor = FornecedorModel.find_fornecedor(id)
        if fornecedor:
            try:
                fornecedor.delete_fornecedor()
            except:
                return {"message": "Ocorreu um erro ao excluir fornecedor"}, 500
            return {"message": "Fornecedor removido"}
        return {"message": "Fornecedor não encontrado"},404
