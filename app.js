const { log } = console;

let currentTool = 'PICKAXE';
toolMode = true;
let bankStack = [];
const pickaxe = document.querySelector('.tool[PICKAXE]');
const shovel = document.querySelector('.tool[SHOVEL]');
const axe = document.querySelector('.tool[AXE]');
const bank = document.querySelector('.inventory[bank]');
pickaxe.classList.add('active');

function removeActive() {
  switch (currentTool) {
    case 'PICKAXE':
      pickaxe.classList.remove('active');
      break;
    case 'SHOVEL':
      shovel.classList.remove('active');
      break;
    case 'AXE':
      axe.classList.remove('active');
      break;
    case 'BANK':
      bank.classList.remove('active');
      break;
    default:
      break;
  }
}

pickaxe.addEventListener('click', function () {
  toolMode = true;
  removeActive();
  currentTool = 'PICKAXE';
  this.classList.add('active');
});

shovel.addEventListener('click', function () {
  toolMode = true;
  removeActive();
  currentTool = 'SHOVEL';
  this.classList.add('active');
});

axe.addEventListener('click', function () {
  toolMode = true;
  removeActive();
  currentTool = 'AXE';
  this.classList.add('active');
});

bank.addEventListener('click', function () {
  toolMode = false;
  removeActive();
  currentTool = 'BANK';
  this.classList.add('active');
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
