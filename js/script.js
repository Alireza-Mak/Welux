/** @format */

// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Initial Spyscroll
$('body').scrollspy({ target: '#main-nav' });

// Smooth Scrolling
$('#main-nav a').on('click', function (e) {
  // Check for a hash value
  if (this.hash !== '') {
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    const hash = this.hash;

    // Animate smooth scroll
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      900,
      function () {
        // Add hash to URL after scroll
        window.location.hash = hash;
      }
    );
  }
});
