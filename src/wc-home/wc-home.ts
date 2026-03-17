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
            getSong: false,
            titulo: ''
        };
    },
    mounted() {
        this.gestor = new Gestor(this);
    },
    methods: {

        searchSong() {
            const titulo = this.titulo;
            const tituloSinEspacios = titulo.trim();
            this.gestor.searchSong(tituloSinEspacios);
        },

        translateSong(cancion) {
            const tituloCancion = cancion.name;
            const autorCancion = cancion.artists[0].name;
            this.acess = false;
            this.gestor.getSong(tituloCancion, autorCancion);
        }
    }
});
