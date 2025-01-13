<template>
  <div class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
    <nav class="bg-white shadow-md">
      <div class="container mx-auto flex justify-between items-center px-6 py-4">
        <a href="#" class="flex items-center">
                    <img src="/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Landwind</span>
                </a>

        <!-- Navigation Links -->
        <ul class="hidden md:flex space-x-6">
          <li v-for="item in navItems" :key="item">
            <a href="" class="text-gray-600 hover:text-purple-600 font-medium">{{ item }}</a>
          </li>
        </ul>

        <!-- Mobile Menu Icon -->
        <button @click="toggleMenu" class="md:hidden text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        
        <!-- Download Button -->
        <button class="hidden md:block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Download
        </button>
      </div>

      <!-- Mobile Menu -->
      <ul v-if="isMenuOpen" class="md:hidden flex flex-col space-y-2 px-6 py-4 bg-white shadow space-between">
        <li v-for="item in navItems" :key="item">
          <a href="#" class="text-gray-600 hover:text-purple-600 font-medium">{{ item }}</a>
        </li>
        <button class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Download
        </button>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: ["Home", "Features", "Pricing", "About Us", "Contact"],
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>
