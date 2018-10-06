(function() {
  var Drtk = {
    init: function() {
      // Global interactions
      this.no_links();
      this.navbar();

      this.tag_search_selectors();
    },

    no_links: function () {
      $('[href="#"]').on('click', function (e) {
        e.preventDefault();
      });
    },

    navbar: function () {
      $('.navbar-toggler').on('click', function () {
        $(this).find('i').toggleClass('close-icon');
        $(this).parent().find('nav').toggleClass('show-menu');
      });
    },

    tag_search_selectors: function() {
      if ($('#projects .projects').length > 0) {
        $('#projects .tagsearch').on('click', function() {
          var tagSelected = $(this).data('search');

          $('.card').show();
          if (tagSelected !== "all") {
            $('.card').not('.' + tagSelected).toggle();
          }
        });
      }
    }
  }

  $(document).ready(Drtk.init());
})();