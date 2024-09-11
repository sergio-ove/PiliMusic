export class Gestor {

    private component: any;


    constructor(component: any) {
        this.component = component;

    }


    private loginUser() {
        console.log('entra');


    }


    private async accesoUsuario() {

        const clientId = 'YOUR_CLIENT_ID';  // Reemplaza con tu Client ID
        const clientSecret = 'YOUR_CLIENT_SECRET';

        try {

            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    grant_type: 'client_credentials',
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data.access_token;

        } catch (error) {
            console.log(error, 'credenciales no válidos');

        }






    };


    private async searchTracks(token, query) {
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(query)}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data,'la data de spoty');
        
        return data.tracks.items;
    };













}