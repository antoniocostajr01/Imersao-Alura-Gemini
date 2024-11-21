import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res){
     // Chama a função para buscar os posts e envia a resposta como JSON
          const posts = await getTodosPosts();
          //Envia uma resposta  HTTP com status 200(OK) e o posts 
          res.status(200).json(posts);
     }