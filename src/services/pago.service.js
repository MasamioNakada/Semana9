import { preferences } from "mercadopago"
export class PagoService {
    static async generarPreferenciaDePago() {
        try {
            await preferences.create({
                payer: {
                    name: 'Masami',
                    surname: 'Nakada',
                    address: {
                        zip_code: '15009',
                        street_name: 'Calle19',
                        street_number: '233'
                    },
                    email: 'nakada2130@gmail.com',
                    identification: {
                        type: 'DNI',
                        number: '76312139'
                    },
                },
                items: [
                    {
                        id: '1234',
                        title: 'zapatillas de running',
                        quantity: 1,
                        unit_price: 115.00,
                        currency_id: "PEN",
                    },
                ],
                auto_return: 'approved'
            })
        } catch (error) {
            console.log(error)
        }
    }

}