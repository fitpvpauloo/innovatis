from flask import Flask, jsonify
from flask_restful import Api
from .env import DATABASE_URI, JWT_KEY, ACCESS_EXPIRES
from flask_script import Manager
from flask_jwt_extended import JWTManager
from .blacklist import BLACKLIST
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = JWT_KEY
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = ACCESS_EXPIRES
app.config['JWT_BLACKLIST_ENABLED'] = True

api = Api(app)
jwt = JWTManager(app)

@jwt.token_in_blocklist_loader
def verifica_blacklist(self, token):
    return token['jti'] in BLACKLIST

@jwt.revoked_token_loader
def token_invalidado(jwt_header, jwt_payload):
    return jsonify({"message": "Usuário deslogado!"}), 401

from .models.sql_alchemy import banco
banco.init_app(app)
# app.run(debug=True)

manager = Manager(app)
from .routes import fornecedor, usuario, produto, autenticacao, categoria, movimentacao
from .resources.fornecedor import Fornecedores, Fornecedor, NovoFornecedor
from .resources.usuario import Usuarios, Usuario, NovoUsuario
from .resources.produto import Produtos, Produto, NovoProduto
from .resources.autenticacao import Login, Logout
from .resources.categoria import Categorias, Categoria, NovaCategoria
from .resources.movimentacao import NovaMovimentacao, Movimentacoes
