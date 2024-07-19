document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
      anchors: ['home', 'resume', 'projects', 'blog'],
      autoScrolling: true,
      navigation: false,
      navigationPosition: 'right',
      scrollingSpeed: 700,
      controlArrows: true,
      fitToSection: true,
      slidesNavigation: true,
      afterLoad: function(origin, destination, direction) {
          var activeAnchor = destination.anchor;
          updateNav(activeAnchor);
      },
      onSlideLeave: function(section, origin, destination, direction) {
          var activeAnchor = destination.anchor;
          updateNav(activeAnchor);
      }
  });

  function updateNav(activeAnchor) {
      var navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${activeAnchor}`) {
              link.classList.add('active');
          }
      });
  }
});


document.addEventListener('DOMContentLoaded', (event) => {
  console.log("JavaScript loaded and running!");

  var typed1 = new Typed('.typing-effect1', {
    strings: ["Hello! My name is..."],
    typeSpeed: 50,
    backSpeed: 25,
    loop: false,
    onComplete: function() {
      console.log("First typing effect completed");
      var logo = document.querySelector('.logo');
      if (logo) {
        console.log("Logo element found");
        logo.style.visibility = 'visible';
        logo.classList.add('animate__animated', 'animate__fadeInLeft');
      } else {
        console.log("Logo element not found");
      }
      setTimeout(() => {
        var typed2 = new Typed('.typing-effect2', {
          strings: ["I am a Programmer. Passionate about:"],
          typeSpeed: 50,
          backSpeed: 25,
          loop: false,
          onComplete: function() {
            console.log("Second typing effect completed");
            var typed3 = new Typed('.typing-effect3', {
              strings: ["Web Development", "Software Engineering", "Cloud", "DevOps"],
              typeSpeed: 50,
              backSpeed: 25,
              loop: true
            });
          }
        });
      }, 1000); // Delay before starting the second typing effect
    }
  });
});



  