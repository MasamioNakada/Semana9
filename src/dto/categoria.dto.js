import validator from "validator"

export function categoriaDto({ nombre, color, categoriaProducto }) {
    if (validator.isEmpty(nombre)) {
        throw new Error("El nombre no puede estar vacio");
    }

    if (validator.isHexColor(color) && validator.isRgbColor(color)) {
        throw new Error("El nombre del color debe estar codificado en Hexadecimal o RGB")
    }

    if (validator.isNumeric(categoriaProducto.toString())) {
        throw Error("categoriaProducto debe ser un numero")
    }

    return { nombre, color, categoriaProducto }
}