import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'wc-rules',

    data() {
        return {
            letra: ""
        };
    },


    mounted() {
        // Accede a los parámetros de la ruta
        const route = useRoute();
        this.letra = JSON.stringify(route.query.message3);

    },
    methods: {



    }
});