const createNavLink = (name) => {
    const navItem = document.createElement('li');
    navItem.classList.add('nav-item');
    const navLink = document.createElement('a');
    navLink.classList.add('nav-link');
    navLink.textContent = name;
    navItem.appendChild(navLink);
    return navItem;
  };

  const createNavLinks = () => {
    const navLinks = document.createElement('ul');
    navLinks.classList.add('nav', 'nav-items', 'nav-fill');
    navLinks.appendChild(createNavLink('Home'));
    navLinks.appendChild(createNavLink('Menu'));
    navLinks.appendChild(createNavLink('Team'));
    navLinks.appendChild(createNavLink('Contact'));
    return navLinks;
  };

  export default () => {
    const nav = document.createElement('nav');

    const navname = document.createElement('h1');
    navname.classList.add('nav-name');
    navname.innerText = "Ade's Restaurant";

    const navLinks = createNavLinks();
    nav.appendChild(navname);
    nav.appendChild(navLinks);

    return nav;
  };