import validator from 'validator'

export function productoDto({ nombre, precio, tipo, estado }) {
    //nombre no puede estar vacio
    if (validator.isEmpty(nombre)) {
        throw Error('El nombre del producto no puede estar vacio')
    }
    //precio no puede ser negativo
    if (!validator.isDecimal(precio.toString()) && +precio < 0) {
        throw Error('El precio no puede ser negativo')
    }

    //tipo puede ser "ABARROTES","HIGENE PERSONAL", "OTROS"
    if (
        tipo !== "ABARROTES" &&
        tipo !== "HIGENE PERSONAL" &&
        tipo !== "OTROS"
    ) {
        throw Error(
            "El tipo sólo debe ser ABARROTES , HIGENE PERSONAL , OTROS  "
        );
    }
    // estado es opcional pero si  me lo pasa debe ser booleano
    if (estado && !validator.isBoolean(estado)) {
        throw Error("El estado tiene que true o false")
    }

    return { nombre, precio, tipo, estado }
}