import 'bootstrap';
import './app.scss';
import renderNav from './nav';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';

const main = document.querySelector('#content');
const pageContainer = document.createElement('div');

let currentNode;
const loadPage = () => {
  currentNode = renderHome();
  main.appendChild(renderNav());
  pageContainer.appendChild(currentNode);
  main.appendChild(pageContainer);
};

const changePage = (newChild) => {
  if (newChild !== currentNode) {
    pageContainer.replaceChild(newChild, currentNode);
    currentNode = newChild;
  }
};

const switchPage = () => {
  const links = document.querySelectorAll('.nav-item');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const { target } = e;
      links.forEach((item) => item.classList.remove('active'));
      target.classList.add('active');
      switch (target.textContent) {
        case 'Home':
          changePage(renderHome());
          break;
        case 'Menu':
          changePage(renderMenu());
          break;
        default:
          changePage(renderContact());
      }
    });
  });
};

loadPage();
switchPage();