import router from "./router";

export class Gestor {

    private component: any;

    constructor(component: any) {
        this.component = component;

    }


    private async searchSong(titulo) {
        console.log(titulo, 'titulo');
        this.accesoUsuario();
        const responseAcessUser = await this.accesoUsuario();

        if (responseAcessUser.response.ok) {
            const token = responseAcessUser?.data.access_token
            const respuestaSpoty = await this.searchTracks(token, titulo);
            this.component.acess = true;
            this.component.datesSong = respuestaSpoty;
        }

    }


    private async accesoUsuario() {

        const clientId = 'ff63a88229bf4867af4011c91670e1e7';
        const clientSecret = '5e25940d79624a75a17c60b6fd99db4d';

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
            const objectData = {
                data,
                response
            }

            return objectData;

        } catch (error) {
            console.log(error, 'credenciales no válidos');

        }

    };


    private async searchTracks(token: any, titulo: any) {
        console.log(token, titulo);

        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(titulo)}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.tracks.items, 'la data de spoty');
        const fiveSongs = data.tracks.items.slice(0, 4);
        return fiveSongs;
    };



    private async getSong(title, artist) {
        const encodedArtist = encodeURIComponent(artist);
        const encodedTitle = encodeURIComponent(title);

        try {
            const response = await fetch(`https://api.lyrics.ovh/v1/${encodedArtist}/${encodedTitle}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data.lyrics, 'las letras');
            const letras = data.lyrics
            this.component.getSong = true;
            router.push({
                name: 'Login',
                query: {
                    message1: artist,
                    message2: title,
                    message3: letras
                }
            });
        } catch (error) {
            console.error('Error fetching lyrics:', error);
        }

    }










}