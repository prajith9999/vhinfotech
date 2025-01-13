<template>
  <div>
    <Navbar />
    <Features />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Features from './components/Features.vue';
import Footer from './components/Footer.vue';
</script>

<style>

/* Ensure white background for the whole app */
.app-container {
  background-color: white;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  background-color: white;
  color: #504c4c;
  margin: 0;
  font-family: Arial, sans-serif;
}
/* Add global styles here if needed */
</style>
