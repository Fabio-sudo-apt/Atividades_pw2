casas = document.getElementsByClassName('casa');
let item = true;
const posicao = [[101, 102, 103], [201, 202, 203], [301, 302, 303], [101, 201, 301], [102, 202, 302], [103, 203, 303], [101, 202, 303], [103, 202, 301]];
let gamers = { x: 0, o: 0 };

btnNew = document.getElementById('new_game');
btnNew.addEventListener('click', () => {
  reset();
});

for (let item of casas) {
  item.addEventListener('click', () => {
    clicked = item.getAttribute('data-clicked');
    if (clicked == "true") { return; }

    item.setAttribute('data-clicked', true);
    setItem(item);
  });
}

function setItem(el) {
  i = getItem();
  el.classList.add(i);
  winner(el, i);
}

function getItem() {
  if (item) {
    item = false;
    return 'x';
  }

  item = true;
  return 'o';
}

function winner(el, item) {

  atieHourse = document.querySelectorAll('[data-clicked=true]');
  if (atieHourse.length == 9) {
    clear();
    alert('deu venha');
  }

  index = parseInt(el.id.substr(5));
  possibles = posicao.filter(h => {
    if (h.includes(index)) return h;
  });

  for (const possible of possibles) {
    if (!checkHouses(possible, item)) { continue; }
    alert(" jogador " + getNumberGame(item) + " ganhou");
    setPoint(item);
    clear();
    break;
  }
}

function checkHouses(houses, item) {
  i = [];
  for (const h of houses) {
    el = document.getElementById('casa_' + h);
    i.push(el.classList.contains(item));
  }

  const allEqual = arr => arr.every(val => val === true);
  return allEqual(i);
}

function clear() {
  for (const casa of casas) {
    casa.setAttribute('data-clicked', false);
    casa.classList.remove('x');
    casa.classList.remove('o');
  }
}

function setPoint(gamer) {
  gamers[gamer]++;
  id = "pontos_player_" + getNumberGame(gamer);
  const el = document.querySelector('#' + id + " span");
  el.innerHTML = gamers[gamer];
}

function getNumberGame(item) {
  return item == 'x' ? '1' : '2';
}

function reset() {
  clear();
  gamers.x = 0;
  gamers.o = 0;
  const elX = document.querySelector("#pontos_player_1 span");
  const elO = document.querySelector("#pontos_player_2 span");
  elX.innerHTML = 0;
  elO.innerHTML = 0;
}