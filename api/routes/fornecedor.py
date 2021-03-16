from api import app, api
from ..resources.fornecedor import Fornecedores, Fornecedor, NovoFornecedor



@app.route('/fornecedores', methods=['GET'])
def get_fornecedores():
    return Fornecedores.get()


@app.route('/fornecedores/novo', methods=['POST'])
def post_fornecedor():
    return NovoFornecedor.post()


@app.route('/fornecedores/<int:id>', methods=['GET'])
def get_fornecedorby_id(id):
    return Fornecedor.get(id)


@app.route('/fornecedores/<int:id>', methods=['PUT'])
def put_fornecedor(id):
    return Fornecedor.put(id)

@app.route('/fornecedores/<int:id>', methods=['DELETE'])
def delete_fornecedor(id):
    return Fornecedor.delete(id)

