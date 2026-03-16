import { defineComponent } from 'vue';

export default defineComponent({
    name: 'wc-rules',

    data() {
        return {
            letra: history.letras
        };
    },


    mounted() {
        const { artist, title, letras } = history.state;
        this.letra = letras;

    },
    methods: {



    }
});