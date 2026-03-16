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
            console.log(tituloSinEspacios, 'tiyulo');
            this.gestor.searchSong(tituloSinEspacios);
            // this.acess = false;
        },

        translateSong(cancion) {
            const tituloCancion = cancion.name;
            const autorCancion = cancion.artists[0].name;

            console.log(tituloCancion, 'cancion');
            console.log(autorCancion, 'autor');

            this.acess = false;
            // const delimiter = '-';
            // const valueInput = tituloAutor.split(delimiter);
            // const titulo = valueInput[0];
            // const autor = valueInput[1]

            this.gestor.getSong(tituloCancion, autorCancion);


        }
    }
});
