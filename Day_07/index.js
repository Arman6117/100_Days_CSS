document.querySelectorAll('.search-icon').forEach(function(element) {
    element.addEventListener('click', function() {
      document.querySelector('.search-input').classList.toggle('active');
    });
  });
  
  document.querySelectorAll('.menu-icon').forEach(function(element) {
    element.addEventListener('click', function() {
      document.querySelector('.panel').classList.toggle('show-menu');
      document.querySelector('.menu').classList.toggle('active');
    });
  });
  