import { defineComponent } from 'vue';
import { Gestor } from '../Gestor';
import router from '../router';
// Importando una exportación nombrada



export default defineComponent({
    name: 'App',
    data() {
        return {
            acess: false,
            datesSong: [],
            getSong:false
        };
    },
    mounted() {
        this.gestor = new Gestor(this);
    },
    methods: {

        searchSong() {
            this.acess = false;
            const titulo = document.getElementById('searchQuery').value;
            const tituloSinEspacios = titulo.trim();

            this.gestor.searchSong(tituloSinEspacios);
        },

        translateSong(valor) {
            const tituloAutor = valor.target.value
            this.acess = false;
            const delimiter = '-';
            const valueInput = tituloAutor.split(delimiter);
            const titulo = valueInput[0];
            const autor = valueInput[1]
   
            this.gestor.getSong(titulo, autor);

    
        }
    }
});
