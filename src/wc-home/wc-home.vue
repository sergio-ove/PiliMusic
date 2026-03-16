<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">

    <div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">

      <!-- Panel izquierdo -->
      <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">

        <!-- Imagen más pequeña y moderna -->
        <div class="w-40 h-40 rounded-xl overflow-hidden shadow-md mb-6">
          <img src="/src/assets/logo-spotyPili.png" class="w-full h-full object-cover" />
        </div>

        <!-- Input + botón -->
        <div class="w-full flex flex-col gap-4">
          <input v-model="titulo" type="text" placeholder="Escribe una canción"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-center text-lg" />

          <button @click="searchSong"
            class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold shadow-md transition">
            Buscar
          </button>
        </div>

      </div>

      <!-- Panel derecho: resultados -->
      <div v-if="datesSong.length" class="bg-white rounded-2xl shadow-lg p-6">

        <h2 class="text-2xl font-bold mb-4 text-gray-800">Resultados</h2>

        <ul class="space-y-4">
          <li v-for="(song, index) in datesSong" :key="index" @click="translateSong(song)"
            class="p-4 bg-gray-50 rounded-xl shadow hover:bg-gray-100 transition cursor-pointer">

            <div class="text-lg font-semibold text-gray-800">
              {{ song.name }}
            </div>

            <div class="text-gray-600">
              {{ song.artists[0].name }}
            </div>

          </li>
        </ul>

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