<template>
  <header class="bg-white shadow-md fixed w-full z-50">
    <nav class="container mx-auto flex justify-between items-center p-4">
      <!-- Logo Section -->
      <div class="text-lg font-bold">Landwind</div>
      
      <!-- Hamburger Menu Button for Mobile -->
      <button @click="toggleMenu" class="md:hidden">
        <svg class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
        </svg>
      </button>

      <!-- Navigation Links -->
      <ul :class="menuOpen ? 'block' : 'hidden'" class="absolute md:flex bg-white md:bg-transparent right-4 top-12 md:static md:flex-row md:space-x-6">
        <li class="px-4 py-2"><a href="#features" class="text-gray-600 hover:text-blue-500">Features</a></li>
        <li class="px-4 py-2"><a href="#about" class="text-gray-600 hover:text-blue-500">About</a></li>
        <li class="px-4 py-2"><a href="#contact" class="text-gray-600 hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>


<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
