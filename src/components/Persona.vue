<template>
  <!-- From Uiverse.io by SouravBandyopadhyay -->
  <div class="flex min-h-screen items-center justify-center">
    <div
      class="w-64 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800"
    >
      <figure
        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          class="bi bi-person-fill text-white dark:text-indigo-300"
          viewBox="0 0 16 16"
        >
          <path
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          ></path>
        </svg>
        <figcaption class="sr-only">John Doe, Web Developer</figcaption>
      </figure>
      <h2 class="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">
        John Doe
      </h2>
      <p class="mb-4 text-gray-600 dark:text-gray-300">Web Developer</p>
      <div class="flex items-center justify-center">
        <a
          href="#"
          class="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
          >Contact</a
        >
        <a
          href="#"
          class="ml-4 rounded-full bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
          >Portfolio</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonaComponent",
};
</script>
