<template>
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <h2 class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h2>
        <div class="max-w-screen-md mx-auto">
          <div id="accordion-flush" data-accordion="collapse" 
               data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" 
               data-inactive-classes="text-gray-500 dark:text-gray-400">
  
            <!-- Accordion Item 1 -->
            <div v-for="(item, index) in accordionItems" :key="index">
              <h3 :id="'accordion-flush-heading-' + index">
                <button 
                  type="button" 
                  class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white" 
                  :aria-expanded="item.isOpen.toString()" 
                  @click="toggleAccordion(index)"
                  :aria-controls="'accordion-flush-body-' + index">
                  <span>{{ item.question }}</span>
                  <svg class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path v-if="item.isOpen" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    <path v-else fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </h3>
              <div :id="'accordion-flush-body-' + index" v-show="item.isOpen" :aria-labelledby="'accordion-flush-heading-' + index">
                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">{{ item.answer }}</p>
                  <p v-if="item.link" class="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn more: <a :href="item.link" class="text-purple-600 dark:text-purple-500 hover:underline">get started</a>
                  </p>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Accordion data structure
        accordionItems: [
          {
            question: 'Can I use Landwind in open-source projects?',
            answer: 'Landwind is an open-source library of interactive components built on top of Tailwind CSS, including buttons, dropdowns, modals, navbars, and more.',
            isOpen: false,
          },
          {
            question: 'Is there a Figma file available?',
            answer: 'Landwind is first conceptualized and designed using Figma, and everything you see in the library has a design equivalent in our Figma file.',
            link: '#', // Optional link for "get started"
            isOpen: false,
          },
          {
            question: 'What are the differences between Landwind and Tailwind UI?',
            answer: 'The core difference is that Landwind components are open-source under the MIT license, whereas Tailwind UI is a paid product.',
            isOpen: false,
          },
          {
            question: 'What about browser support?',
            answer: 'The components from Landwind are open-source under the MIT license, whereas Tailwind UI is a paid product. Landwind uses smaller components, while Tailwind UI provides sections of pages.',
            isOpen: false,
          },
        ],
      };
    },
    methods: {
      toggleAccordion(index) {
        // Toggle the isOpen state for the clicked accordion item
        this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Add custom styles here */
  </style>
  