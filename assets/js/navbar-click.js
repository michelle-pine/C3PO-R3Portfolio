$(document).ready(function() {
  $('.navbar-nav .nav-item:not(.dropdown) .nav-link, .navbar-nav .dropdown-item').on('click', function(){
    if (window.innerWidth < 768) {
      $('.navbar-toggler').click();
    }

  });
  
})

