const { log } = console;

const pickaxe = document.querySelector('.tool[PICKAXE]');

pickaxe.addEventListener('click', function () {
  alert(' PICKAXE tool clicked');
});
const shovel = document.querySelector('.tool[SHOVEL]');

shovel.addEventListener('click', function () {
  alert(' shovel tool clicked');
});
const axe = document.querySelector('.tool[AXE]');

axe.addEventListener('click', function () {
  alert(' AXE tool clicked');
});
