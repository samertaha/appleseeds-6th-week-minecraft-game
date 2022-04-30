const { log } = console;

let currentTool = 'PICKAXE';
toolMode = true;
let bankStack = [];
const pickaxe = document.querySelector('.tool[PICKAXE]');
const shovel = document.querySelector('.tool[SHOVEL]');
const axe = document.querySelector('.tool[AXE]');
const bank = document.querySelector('.inventory[bank]');
pickaxe.classList.add('active');

// const matrix = Array.from(document.querySelectorAll('.row'));
// console.log(matrix);

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

function canRemove(cell) {
  if (cell?.nextElementSibling?.attributes.length === 0) return true;
  if (cell?.previousElementSibling?.attributes.length === 0) return true;
  const index = [...cell.parentNode.children].indexOf(cell);
  const above = cell?.parentNode?.previousElementSibling?.querySelector(
    `:nth-child(${index + 1})`
  );
  if (above.attributes.length === 0) return true;

  const beneath = cell?.parentNode?.nextElementSibling?.querySelector(
    `:nth-child(${index + 1})`
  );
  if (beneath.attributes.length === 0) return true;

  return false;
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
          if (canRemove(this) && itsStone) {
            this.removeAttribute('stone');
            bankStack.push('stone');
            bank.style.background =
              "url('./images/stone.jpg') no-repeat center center/cover";
          }
          break;
        case 'SHOVEL':
          if (canRemove(this)) {
            if (itsGrass) {
              this.removeAttribute('grass');
              bankStack.push('grass');
              bank.style.background =
                "url('./images/grass.jpg') no-repeat center center/cover";
            }
            if (itsGround) {
              this.removeAttribute('ground');
              bankStack.push('ground');
              bank.style.background =
                "url('./images/ground.jpg') no-repeat center center/cover";
            }
          }
          break;
        case 'AXE':
          if (canRemove(this)) {
            if (itsLeaf) {
              this.removeAttribute('leafs');
              bankStack.push('leafs');
              bank.style.background =
                "url('./images/leafs.jpg') no-repeat center center/cover";
            }
            if (itsTreetrunk) {
              this.removeAttribute('treetrunk');
              bankStack.push('treetrunk');
              bank.style.background =
                "url('./images/treetrunk.png') no-repeat center center/cover";
            }
          }
          break;
        default:
          console.log('no such tool!');
      }
    } else {
      // bank mode
    }
  })
);
