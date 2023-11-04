const nav = document.querySelector('.nav');
const list = document.querySelector('.list');
const breakpoint = 500;

document.addEventListener('DOMContentLoaded', function () {
  const windowWidth = window.innerWidth;

  if (windowWidth < breakpoint) {
    hideList();
  }
});

window.addEventListener('resize', function () {
  const windowWidth = window.innerWidth;

  if (windowWidth < breakpoint) {
    hideList();
    nav.addEventListener('click', toggleList);
  } else {
    showList();

    nav.removeEventListener('click', toggleList);
  }
});

nav.addEventListener('click', toggleList);

function hideList() {
  list.hidden = true;
}

function showList() {
  list.hidden = false;
}

function toggleList() {
  if (list.hidden === true) {
    showList();
  } else if (list.hidden === false) {
    hideList();
  }
}
