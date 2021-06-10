export interface movimentacao {
    id_produto?: number,
    id_usuario?: any,
    idmovimentacao?: number, //id
    data_hora: number,
    login_usuario: string,
    nome_produto: string
    quantidade: number,
    tipo_movimentacao: string //name
}

export interface movimentacaoUsuario {
    loginUsuario: number
}
