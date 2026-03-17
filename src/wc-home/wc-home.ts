import { defineComponent } from 'vue';
import { Gestor } from '../Gestor';




export default defineComponent({
    name: 'App',
    data() {
        return {
            acess: false,
            datesSong: [],
            getSong: false,
            titulo: '',
             gestor: null 
        };
    },
    mounted() {
        this.gestor = new Gestor(this);
    },
    methods: {

        searchSong(){
            if (!this.gestor) return;
            const titulo = this.titulo;
            const tituloSinEspacios = titulo.trim();
            this.gestor.searchSong(tituloSinEspacios);
        },

        translateSong(cancion) {
            if (!this.gestor) return;
            const tituloCancion = cancion.name;
            const autorCancion = cancion.artists[0].name;
            this.acess = false;
            this.gestor.getSong(tituloCancion, autorCancion);
        }
    }
});
