from api import app, api
from flask import jsonify, url_for, redirect
from ..resources.usuario import Usuarios, Usuario, NovoUsuario
from ..models.usuario import UsuarioModel
from flask_restful import Resource, reqparse


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