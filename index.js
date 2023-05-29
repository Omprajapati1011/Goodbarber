// // AOS.init();
// // Select elements to animate
// const elementsToAnimate = document.querySelectorAll('.trust1-class');

// // Function to check if an element is visible in the viewport
// function isElementVisible(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//   );
// }

// // Function to handle scroll event
// function handleScroll() {
//   elementsToAnimate.forEach((element) => {
//     if (isElementVisible(element)) {
//       element.classList.add('fade-in');
//       element.classList.remove('fade-out');
//     } else {
//       element.classList.add('fade-out');
//       element.classList.remove('fade-in');
//     }
//   });
// }

// // Listen for scroll event
// window.addEventListener('scroll', handleScroll);
