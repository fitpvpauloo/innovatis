from flask import Flask
from flask_restful import Api
from .env import DATABASE_URI
from flask_script import Manager
import os


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api = Api(app)
from .models.sql_alchemy import banco
banco.init_app(app)
# app.run(debug=True)

manager = Manager(app)
from .routes import fornecedor, usuario
from .resources.fornecedor import Fornecedores, Fornecedor, NovoFornecedor
from .resources.usuario import Usuarios, Usuario, NovoUsuario
