import express from "express";
import livroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", livroController.listarLivros)
    .get("/livros/:id", livroController.listarLivro)
    .post("/livros", livroController.cadastrarLivro)

export default router;