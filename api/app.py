from flask import Flask
from flask_restful import Api
from resources.fornecedor import Fornecedores, Fornecedor, NovoFornecedor
from env import DATABASE_URI

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api = Api(app)

api.add_resource(Fornecedores, '/fornecedores')
api.add_resource(Fornecedor, '/fornecedores/<int:id>')
api.add_resource(NovoFornecedor, '/fornecedores/novo')

if __name__ == '__main__':
    from sql_alchemy import banco
    banco.init_app(app)
    app.run(debug=True)
