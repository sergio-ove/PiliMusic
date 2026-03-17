import { defineComponent } from 'vue';

export default defineComponent({
    name: 'wc-rules',

    data() {
        return {
            letra: history.letras
        };
    },


    mounted() {
        const { letras } = history.state;
        this.letra = letras;

    },
    methods: {
        copiarLetra() {
            navigator.clipboard.writeText(this.letra);
        },


    }
});