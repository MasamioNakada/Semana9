import express, { json } from "express";
import mongoose from "mongoose";
import { categoriaRouter } from "./routes/categoria.routes.js";
import { productoRouter } from "./routes/producto.routes.js";
import { CategoriaProductoRouter } from "./routes/categoria_producto.routes.js";

import mercadopago from "mercadopago";

mercadopago.configure({
    access_token:process.env.ACCESS_TOKEN,
    integrator_id:process.env.INTEGRATOR_ID_MP
})


const app = express()
const PORT = process.env.PORT ?? 3000;

app.use(json())

//rutas
app.use(productoRouter);
app.use(categoriaRouter);
app.use(CategoriaProductoRouter);

app.listen(PORT, async () => {
    console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`)

    try {
        await mongoose.connect(process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : process.env.DATABASE_URL_DEV);
        console.log("Bd sincronizada exitosamente")
    } catch (error) {
        console.log("Error al conectar a la base de datos ❌📛📛❌")
    }
})