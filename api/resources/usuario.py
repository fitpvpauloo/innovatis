from flask_restful import Resource, reqparse
from ..models.usuario import UsuarioModel
import bcrypt

atributos = reqparse.RequestParser()
atributos.add_argument('nome')
atributos.add_argument('login')
atributos.add_argument('senha')

class Usuarios():
    def get():
        return {'usuarios': [usuario.json() for usuario in UsuarioModel.query.all()]}

class NovoUsuario():
    def post():
        dados = atributos.parse_args()

        if UsuarioModel.find_loginUsuario(dados.login):
            return {"message": "Usuário com login: '{}' já cadastrado!".format(dados.login)}, 400

        usuario = UsuarioModel(None, dados.nome, dados.login, bcrypt.hashpw(dados.senha.encode('utf8'), bcrypt.gensalt()))

        try:
            usuario.save_usuario()
        except:
            return {"message": "Ocorreu um erro ao salvar o usuário!"}, 500
        return usuario.json()

class Usuario():

    def get(id):
        usuario = UsuarioModel.find_usuario(id)
        if usuario:
            return usuario.json()
        return {"message": "Usuário não encontrado."}, 404

    def put(id):
        dados = atributos.parse_args()

        usuarioLogin = UsuarioModel.find_loginUsuario(dados.login)
        if usuarioLogin:
            if usuarioLogin.idusuario != id:
                return {"message": "Login: '{}' já usado para outro usuário".format(dados.login)}, 400

        usuarioEncontrado = UsuarioModel.find_usuario(id)
        if usuarioEncontrado:
            usuarioEncontrado.update_usuario(dados.nome, dados.login, bcrypt.hashpw(dados.senha.encode('utf8'), bcrypt.gensalt()))
            usuarioEncontrado.save_usuario()
            return usuarioEncontrado.json(), 200
        usuario = UsuarioModel(None, dados.nome, dados.login, bcrypt.hashpw(dados.senha.encode('utf8'), bcrypt.gensalt()))
        try:
            usuario.save_usuario()
        except:
            return {"message": "Ocorreu um erro ao gravar o usuário"}, 500
        return usuario.json(), 201

    def delete(id):
        usuario = UsuarioModel.find_usuario(id)
        if usuario:
            try:
                usuario.delete_usuario()
            except:
                return {"message": "Ocorreu um erro ao excluir o usuário"}, 500
            return {"message": "Usuário removido"}
        return {"message": "Usuário não encontrado"}, 404
