const welcomeIndex = () => (`
<section class="home-section" id="home">
<div class="home-bg">
  <div class="container">
    <div class="row min-vh-100">
      <div class="home-text">
        <h1>Ade's Restaurant</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui, ab architecto quaerat assumenda in repellat facilis molestiae provident cupiditate consequatur cumque id. Voluptate repellat rerum excepturi, natus ipsam harum?</p>
        <a href="#our-menu" class="btn btn-default">our menu</a>
      </div>
    </div>
  </div>
  </div>
</section>
`);










// const carouselCaption = () => (
//     `<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
//     <ol class="carousel-indicators">
//       <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
//       <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
//       <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
//     </ol>
//     <div class="carousel-inner">
//       <div class="carousel-item active">
//         <img src="https://ocdn.eu/pulscms-transforms/1/aygktkpTURBXy8wYWYxMDQxZDg2M2JlZmExOTdjYTJmYjFmNzU5MmMwNS5wbmeSlQMAGs0F3M0DS5MFzQSwzQJ2" class="d-block w-100" alt="...">
//         <div class="carousel-caption d-none d-md-block">
//           <h5>BREAKFAST</h5>
//           <p>A sample of a simple breakfast we offer</p>
//         </div>
//       </div>
//       <div class="carousel-item">
//         <img src="https://one_org_international.s3.amazonaws.com/africa/wp-content/uploads/2014/11/Screen-Shot-2014-11-25-at-15.05.41.png" class="d-block w-100" alt="...">
//         <div class="carousel-caption d-none d-md-block">
//           <h5>LUNCH</h5>
//           <p>A sample of a simple lunch we offer</p>
//         </div>
//       </div>
//       <div class="carousel-item">
//         <img src="http://2.bp.blogspot.com/-GP05m0YB7DI/URJurMVXTQI/AAAAAAAAABc/FXUwXxmi1AI/s1600/PoundedYamF.jpg" class="d-block w-100" alt="...">
//         <div class="carousel-caption d-none d-md-block">
//           <h5>Dinner</h5>
//           <p>A sample of a simple dinner we offer</p>
//         </div>
//       </div>
//     </div>
//     <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="sr-only">Previous</span>
//     </a>
//     <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="sr-only">Next</span>
//     </a>
//   </div>`

// );

const createHomePage = () => {
    const home = document.createElement('div');
    home.classList.add('position-relative');
    home.insertAdjacentHTML('beforeend', welcomeIndex());
    return home;
  };

  export default createHomePage;