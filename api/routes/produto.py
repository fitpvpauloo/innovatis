from api import app, api
from ..resources.produto import Produtos, Produto, NovoProduto



@app.route('/produtos', methods=['GET'])
def get_produtos():
    return Produtos.get()


@app.route('/produtos/novo', methods=['POST'])
def post_produto():
    return NovoProduto.post()


@app.route('/produtos/<int:id>', methods=['GET'])
def get_produtoby_id(id):
    return Produto.get(id)


@app.route('/produtos/<int:id>', methods=['PUT'])
def put_produto(id):
    return Produto.put(id)

@app.route('/produtos/<int:id>', methods=['DELETE'])
def delete_produtos(id):
    return Produto.delete(id)

