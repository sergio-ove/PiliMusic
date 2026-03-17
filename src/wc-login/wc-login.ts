import { defineComponent } from 'vue';

export default defineComponent({
    name: 'wc-rules',

    data() {
        return {
            letra: history.letras
        };
    },


    mounted() {
        const state = history.state as { letras?: string };

        if (state && state.letras) {
            this.letra = state.letras;
        } else {
            this.letra = 'No se recibió ninguna letra.';
        }

    },
    methods: {
        copiarLetra() {
            navigator.clipboard.writeText(this.letra);
        },


    }
});