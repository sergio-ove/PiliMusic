<template>
  <div class="flex flex-col min-h-screen">
    <!-- Sección cuando `acess` es true -->
    <div v-if="acess" class="flex flex-row min-h-screen p-5">
      <!-- Sección de búsqueda -->
      <div class="flex flex-col items-center justify-center bg-white shadow-sm border border-slate-200 rounded-lg max-w-[380px] h-[350px]">
        <div class="overflow-hidden rounded-md h-3/4 flex justify-center items-center">
          <img class="w-full h-full object-cover" src="/src/assets/musica-pilar.jfif" alt="home-picture" />
        </div>
        <div class="flex-grow p-6 text-center"></div>
        <div class="flex flex-col items-center justify-center p-6 pt-2 gap-7">
          <input type="text" id="searchQuery" placeholder="Escribe una cancion" />
          <button @click="searchSong" id="searchButton"
            class="min-w-32 rounded-md bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-500 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Acceder
          </button>
        </div>
      </div>

      <!-- Sección de información de `datesSong` -->
      <div class="flex flex-col flex-grow ml-5 bg-white shadow-sm border-slate-200 rounded-lg max-w-[650px] h-[340px]">
        <ul class="space-y-4 p-4">
          <li v-for="(song, index) in datesSong" :key="index"
            class="flex items-center p-4 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition-colors">
            <input @click="translateSong" type="text" :value="`${song.name} - ${song.artists[0].name}`"
              placeholder="traducir"
              class="ml-4 px-2 py-1 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 transition-colors w-[350px]"
              readonly />
          </li>
        </ul>
      </div>
    </div>

    <!-- Pantalla inicial cuando `acess` es falso -->
    <div v-else class="flex flex-col items-center justify-center flex-grow bg-gray-100">
      <div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg max-w-[300px] h-[320px]">
        <div class="overflow-hidden rounded-md h-3/4 flex justify-center items-center">
          <img class="w-full h-full object-cover" src="/src/assets/musica-pilar.jfif" alt="home-picture" />
        </div>
        <div class="flex-grow p-6 text-center"></div>
        <div class="flex flex-col items-center justify-center p-6 pt-2 gap-7">
          <input type="text" id="searchQuery" placeholder="Escribe una cancion" />
          <button @click="searchSong" id="searchButton"
            class="min-w-32 rounded-md bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-500 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Acceder
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script src="./wc-home"></script>
<style scoped>
input {
  text-align: center;
}

li {
  list-style-type: none
}
</style>