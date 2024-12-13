document.addEventListener("DOMContentLoaded", function() {
  console.log("jQuery version:", $.fn.jquery);

  // JavaScript-based tab functionality
  function showTab(selected, total) {
      for (let i = 1; i <= total; i += 1) {
          const tabPane = document.getElementById('tabs' + i);
          if (tabPane) {
              tabPane.style.display = 'none';
          }
      }

      const activeTabPane = document.getElementById('tabs' + selected);
      if (activeTabPane) {
          activeTabPane.style.display = 'block';
      } else {
          console.error(`Tab pane with ID 'tabs${selected}' not found.`);
      }
  }

  // Attach showTab to the global scope if needed
  window.showTab = showTab;
});

$(document).ready(function() {
  $(document).on('click', 'ul.tab-nav li .button', function() {
      var href = $(this).attr('data-ref');
      console.log("Button clicked. Target href:", href); // Debugging

      $('ul.tab-nav li .button.active').removeClass('active');
      $(this).addClass('active');

      $('.tab-pane.active').removeClass('active');
      $(href).addClass('active');

      return false;
  });
});
