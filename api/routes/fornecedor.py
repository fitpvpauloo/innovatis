from api import app, api
from flask import jsonify, url_for, redirect
from ..resources.fornecedor import Fornecedores, Fornecedor, NovoFornecedor
from ..models.fornecedor import FornecedorModel
from flask_restful import Resource, reqparse


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

