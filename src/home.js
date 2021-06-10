const welcomeIndex = () => (`
<section class="home-section" id="home">
<div class="home-bg" style=" background-image: url('./assets/images/bg3.webp');">
  <div class="container">
    <div class="row min-vh-100">
      <div class="home-text">
        <h1>Ade's Kitchen</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui, ab architecto quaerat assumenda in repellat facilis molestiae provident cupiditate consequatur cumque id. Voluptate repellat rerum excepturi, natus ipsam harum?</p>
        <a href="#our-menu" class="btn btn-default">our menu</a>
      </div>
    </div>
  </div>
  </div>
</section>
`);

const createHomePage = () => {
  const home = document.createElement('div');
  home.classList.add('position-relative');
  home.insertAdjacentHTML('beforeend', welcomeIndex());
  return home;
};

export default createHomePage;