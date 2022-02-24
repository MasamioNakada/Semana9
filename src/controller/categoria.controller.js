import { CategoriaService } from "../services/categoria.service.js";
import { categoriaDto } from "../dto/categoria.dto.js";

export async function crearCategoria(req, res) {
    //crear el dto
    // TODO (tarea)
    try {
        const data = categoriaDto(req.body);
        const nuevaCategoria = await CategoriaService.crear(data)

        return res.status(201).json(nuevaCategoria)
    } catch (error) {
        return res.status(201).json({
            message: "Error al crear la categoria",
            content: error,
        })
    }
    //metodo simple
    /*     if (resultado.message){
            return res.status(400).json(resultado)
        }else{
            return res.status(201).json(resultado)
        } */
    /* return res.status(resultado.message ? 400 : 201).json(resultado) */
}
