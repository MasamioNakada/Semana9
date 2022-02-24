import { Router } from "express";
import { crearCategoria } from "../controller/categoria.controller.js";

export const categoriaRouter = Router();

categoriaRouter
    .route("/categoria")
    .post(crearCategoria)
    //hacer el get de todas las categorias ordenadas alfabéticamnte port el nombre de manera ascendente
    //NO USAR MAP O FILTER , usar los ordenamientos de mongoose
    .get()
    //hacer el put para actualizar la categoria
    .put()


categoriaRouter
    .route("/categoria/:id")
    .get() // traer la categoria con todos sus productos

//   {
//     nombre:'cat1',
//     image:'#000000',
//     productos:[
//         {
//             id: '123',
//             nombre:'prod1',
//             precio:10.5
//         },{},{},{}
//     ]
//   }

// PLAZO DE ENTREGA MIERCOLES 23 a las 23:59