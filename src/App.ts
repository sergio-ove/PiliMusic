import { defineComponent } from 'vue';
import { Gestor } from './Gestor';

export default defineComponent({
    name: 'App',
    data() {
        return {
            message: 'Hello, World!'
        };
    },
    mounted() {
        this.gestor = new Gestor(this);
    },
    methods: {
        login() {
            this.gestor.loginUser()
        }
    }
});
