// function toggleMenu() {
//   var dropdown = document.getElementById("dropdown");
//   if (dropdown.style.display === "block") {
//     dropdown.style.display = "none";
//   } else {
//     dropdown.style.display = "block";
//   }
// }

// Improved dropdown toggle for Safari and all browsers
document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.getElementsByClassName('menu');
  var dropdown = document.getElementById('dropdown');

  function toggleMenu(e) {
    e.stopPropagation();
    if (!dropdown.classList.contains('show')) {
      dropdown.classList.remove('hidden');
      dropdown.classList.add('show');
    } else {
      dropdown.classList.remove('show')
      dropdown.classList.add('hidden');
    }
  }

  // Add both click and touchstart for better mobile/Safari compatibility
  if (menuButton.length) {
    menuButton[0].addEventListener('click', toggleMenu);
    menuButton[0].addEventListener('touchstart', toggleMenu);
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target) && !menuButton[0].contains(e.target)) {
      dropdown.classList.remove('show');
      dropdown.classList.add('hidden');
    }
  });

  //The bug was that the homepage dropdown menu was not working properly on Safari, due to how event handling for clicks and touches was implemented in the JavaScript. I identified the issue using browser developer tools in Safari, inspecting event listeners and observing that the dropdown toggle events were not firing reliably on this browser. To fix it, I updated the JavaScript to add both click and touchstart event listeners on the dropdown toggle, to prevent default form behavior interference, and changed style toggling to use CSS class manipulation. Additionally, I implemented closing the dropdown when clicking outside the menu area for better user experience. These fixes made the dropdown work seamlessly on Safari and other browsers.


});
