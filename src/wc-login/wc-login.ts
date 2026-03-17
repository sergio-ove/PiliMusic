import { defineComponent } from 'vue';

export default defineComponent({
    name: 'wc-rules',

    data() {
        return {
            letra: '' as string
        };
    },

    mounted() {
        // Tipamos correctamente el estado del navegador
        const state = history.state as { letras?: string };

        if (state?.letras) {
            this.letra = state.letras;
        } else {
            this.letra = 'No se recibió ninguna letra.';
        }
    },

    methods: {
        copiarLetra() {
            navigator.clipboard.writeText(this.letra);
        }
    }
});
