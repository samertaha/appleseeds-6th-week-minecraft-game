const { log } = console;

let currentTool = 'PICKAXE';
toolMode = true;
let bankStack = [];

const pickaxe = document.querySelector('.tool[PICKAXE]');

pickaxe.addEventListener('click', function () {
  toolMode = true;
  currentTool = 'PICKAXE';
});
const shovel = document.querySelector('.tool[SHOVEL]');

shovel.addEventListener('click', function () {
  toolMode = true;
  currentTool = 'SHOVEL';
});
const axe = document.querySelector('.tool[AXE]');

axe.addEventListener('click', function () {
  toolMode = true;
  currentTool = 'AXE';
});

const bank = document.querySelector('.inventory[bank]');

bank.addEventListener('click', function () {
  toolMode = false;
  alert(' bank tool clicked');
});

const cells = document.querySelectorAll('.world .row div');

cells.forEach((cell) =>
  cell.addEventListener('click', function () {
    if (toolMode) {
      const itsLeaf = this.getAttribute('leafs') !== null;
      const itsTreetrunk = this.getAttribute('treetrunk') !== null;
      const itsStone = this.getAttribute('stone') !== null;
      const itsGrass = this.getAttribute('grass') !== null;
      const itsGround = this.getAttribute('ground') !== null;

      switch (currentTool) {
        case 'PICKAXE':
          if (itsStone) this.removeAttribute('stone');
          break;
        case 'SHOVEL':
          if (itsGrass) this.removeAttribute('grass');
          if (itsGround) this.removeAttribute('ground');
          break;
        case 'AXE':
          if (itsLeaf) this.removeAttribute('leafs');
          if (itsTreetrunk) this.removeAttribute('treetrunk');
          break;
        default:
          console.log('no such tool!');
      }
    } else {
      // bank mode
    }
  })
);
