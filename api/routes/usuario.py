from api import app, api
from ..resources.usuario import Usuarios, Usuario, NovoUsuario


@app.route('/usuarios', methods=['GET'])
def get_usuarios():
    return Usuarios.get()


@app.route('/usuarios/novo', methods=['POST'])
def post_usuarios():
    return NovoUsuario.post()


@app.route('/usuarios/<int:id>', methods=['GET'])
def get_usuariosby_id(id):
    return Usuario.get(id)


@app.route('/usuarios/<int:id>', methods=['PUT'])
def put_usuarios(id):
    return Usuario.put(id)

@app.route('/usuarios/<int:id>', methods=['DELETE'])
def delete_usuarios(id):
    return Usuario.delete(id)