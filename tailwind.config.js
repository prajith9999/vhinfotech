// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      container: {
        center: true,  // Centers the container
        padding: '1rem',  // Adds padding inside the container
      },
    },
  },
  variants: {},
  plugins: [],
}


<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Get all accordion buttons
    const accordionButtons = document.querySelectorAll('[data-accordion-target]');

    accordionButtons.forEach(button => {
      // Set up a click event listener for each accordion button
      button.addEventListener('click', function () {
        // Get the target body of the accordion
        const target = document.querySelector(button.getAttribute('data-accordion-target'));

        // Toggle the visibility of the accordion body
        if (target.classList.contains('hidden')) {
          target.classList.remove('hidden');
          button.setAttribute('aria-expanded', 'true');
        } else {
          target.classList.add('hidden');
          button.setAttribute('aria-expanded', 'false');
        }

        // Optionally close other accordion items
        document.querySelectorAll('.accordion-body').forEach((body) => {
          if (body !== target) {
            body.classList.add('hidden');
            // Set aria-expanded to false for the other items
            const otherButton = body.previousElementSibling.querySelector('button');
            otherButton.setAttribute('aria-expanded', 'false');
          }
        });
      });
    });
  });
</script>
