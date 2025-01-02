<template>
  <header class="bg-white shadow-md fixed w-full z-50">
    <nav class="container mx-auto flex justify-between items-center p-4">
      <div class="text-lg font-bold">Landwind</div>
      <button @click="toggleMenu" class="md:hidden">
        <svg class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
        </svg>
      </button>
      <ul :class="menuOpen ? 'block' : 'hidden'" class="absolute md:flex bg-white md:bg-transparent right-4 top-12 md:static">
        <li class="px-4 py-2"><a href="#features">Features</a></li>
        <li class="px-4 py-2"><a href="#about">About</a></li>
        <li class="px-4 py-2"><a href="#contact">Contact</a></li>
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
