Vue.component('alerta', {
    props:['tipo', 'posicion', 'frase', 'listado'],
    template:"#mensajeProductos",
    methods:{
        ocultarMensaje(){
            this.$emit('ocultar');
        }
    },
    data(){
        return{
            alerta: this.frase
        };
    }
});
Vue.prototype.$http = axios;
const app = new Vue({
    el: "#cont",
    mounted(){
        console.log('instancia Montada');
        this.cargarpersonasAxios();
    },
    data: {
        personasAxios:[],
        tipos:['CocaCola', 'Fanta', 'Sprite'],
        mostrarBoton1: false,
        mostrarBoton2: false,
        mostrarBoton3: false,
        mostrarBoton4: false,
    },
    methods:{
        //Traer los datos del enlace randomUser
        cargarpersonasAxios(){
            axios.get("https://randomuser.me/api/?results=50").then(respuesta =>{
                this.personasAxios = respuesta.data.results;
                console.log(respuesta);
            });
        }
    },
});