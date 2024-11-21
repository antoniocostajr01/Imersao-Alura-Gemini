import conectarAoBanco from "../config/dbconfig.js";
// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts da coleção "posts" no banco de dados "imersao-instabytes"
export default async function getTodosPosts() {
     const db = conexao.db("imersao-instabytes");
     const colecao = db.collection("posts");
     return colecao.find().toArray();
}