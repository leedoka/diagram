let itemGreen = document.querySelectorAll('.item-green');
let unitGreen = document.querySelectorAll('.green');
let itemYellow = document.querySelectorAll('.item-yellow');
let unitYellow = document.querySelectorAll('.yellow');

itemGreen.forEach(function (item, index) {
   item.addEventListener('mouseover', function () {
      unitGreen[index].classList.add('hovered');
   });
     
   item.addEventListener('mouseout', function () {
      unitGreen[index].classList.remove('hovered');
   });
});

itemYellow.forEach(function (item, index) {
   item.addEventListener('mouseover', function () {
      unitYellow[index].classList.add('hovered');
   });
     
   item.addEventListener('mouseout', function () {
      unitYellow[index].classList.remove('hovered');
   });
});