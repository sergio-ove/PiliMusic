<script setup lang="ts">

</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg max-w-[450px] h-[350px]">
      <div class="overflow-hidden rounded-md h-3/4 flex justify-center items-center">
        <img class="w-full h-full object-cover" src="/src/assets/imagenCabecera.png" alt="profile-picture" />
      </div>
      <div class="flex-grow p-6 text-center">
        <!-- Puedes agregar contenido aquí si es necesario -->
      </div>
      <div class="flex justify-center p-6 pt-2 gap-7">
        <button
          class="min-w-32 rounded-md bg-green-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-500 focus:shadow-none active:bg-gren-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          Acceder
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
