<template>
    <div class="bg-gray-100 min-h-screen flex items-center justify-center p-5">
        <!-- Contenedor principal -->
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <!-- Título de la canción -->
            <h1 class="text-2xl font-bold mb-4 text-center text-gray-800">Letra de la Canción</h1>

            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 overflow-auto">
                <p class="text-gray-700 leading-relaxed whitespace-pre-line">
                    {{ letra }}
                </p>
            </div>

            <div class="flex gap-4 mb-4 m-4">

                <button @click="copiarLetra">
                    
                    <a href="https://translate.google.es/?sl=auto&tl=es&op=translate" target="_blank"
                        class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow">
                        Traducir en Google Translate
                    </a>
                </button>

            </div>
        </div>

    </div>
</template>


<style scoped>
/* Estilos adicionales si es necesario */
</style>

<script lang="ts" src="./wc-login.ts"></script>
<style></style>