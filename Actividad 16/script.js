const app = Vue.createApp({
    data() {
        return {
            materia: "Paradigmas de programación",
            semestre: "Sexto",
            carrera: "Sistemas",
            productos: [
                {nombre: "cerveza", cantidad: 100},
                {nombre: "agua", cantidad: 50},
                {nombre: "vino", cantidad: 10}
            ],
            producto: ""
        }
    },

    methods: {
        agregarProducto() {
            this.productos.push(
                {nombre: this.producto, cantidad: 0}
            )
            this.producto= "";
        }
    },

    computed: {
        voltearTexto() {
            return this.productos.split("").reverse().join("");
        },

        total(){
            return this.productos.reduce((contador, product) => contador + product.cantidad, 0)
        }
    }
})

const vm = app.mount('#app')