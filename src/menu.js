const ourMenu =
    `<section class= "menu-section p-3" id = "our-menu">
    <div class = "container">
    <div class="row">
    <div class = "section-title">
    <h2 data-title ="order now" class="text-center">our-menu</h2>
    </div>
    </div>
    <div class="row">
    <div class ="menu-tabs">
    <button type="button" class="menu-tab-item" data target="#lunch">lunch</button>
    <button type="button" class="menu-tab-item" data target="#dinner">dinner</button>
    <button type="button" class="menu-tab-item" data target="#drinks">drinks</button>
    <button type="button" class="menu-tab-item" data target="#desserts">desserts</button>
    </div>
    </div>
    <div class="row menu-tab-content active" id="lunch">
    <div class="menu-item">
    <div class="menu-item-title">
    <img src="https://allnigerianfoods.com/wp-content/uploads/indomie-noodles.jpg" alt="">
    <h3>lunch item</h3>
    </div>
    <div class="menu-item-price>
    #1500
    </div>
    </div>

    <div class="menu-item">
    <div class="menu-item-title">
    <img src="https://allnigerianfoods.com/wp-content/uploads/indomie-noodles.jpg" alt="">
    <h3>lunch item</h3>
    </div>
    <div class="menu-item-price>
    #1500
    </div>
    </div>

    <div class="menu-item">
    <div class="menu-item-title">
    <img src="https://allnigerianfoods.com/wp-content/uploads/indomie-noodles.jpg" alt="">
    <h3>lunch item</h3>
    </div>
    <div class="menu-item-price>
    #1500
    </div>
    </div>

    <div class="menu-item">
    <div class="menu-item-title">
    <img src="https://allnigerianfoods.com/wp-content/uploads/indomie-noodles.jpg" alt="">
    <h3>lunch item</h3>
    </div>
    <div class="menu-item-price>
    #1500
    </div>
    </div>

    <div class="menu-item">
    <div class="menu-item-title">
    <img src="https://allnigerianfoods.com/wp-content/uploads/indomie-noodles.jpg" alt="">
    <h3>lunch item</h3>
    </div>
    <div class="menu-item-price>
    #1500
    </div>
    </div>

    <div class="menu-item">
    <div class="menu-item-title">
    <img src="https://allnigerianfoods.com/wp-content/uploads/indomie-noodles.jpg" alt="">
    <h3>lunch item</h3>
    </div>
    <div class="menu-item-price>
    #1500
    </div>
    </div>

    <div class="menu-item">
    <div class="menu-item-title">
    <img src="https://allnigerianfoods.com/wp-content/uploads/indomie-noodles.jpg" alt="">
    <h3>lunch item</h3>
    </div>
    <div class="menu-item-price>
    #1500
    </div>
    </div>

    <div class="menu-item">
    <div class="menu-item-title">
    <img src="https://allnigerianfoods.com/wp-content/uploads/indomie-noodles.jpg" alt="">
    <h3>lunch item</h3>
    </div>
    <div class="menu-item-price>
    #1500
    </div>
    </div>

    <div class="menu-item">
    <div class="menu-item-title">
    <img src="https://allnigerianfoods.com/wp-content/uploads/indomie-noodles.jpg" alt="">
    <h3>lunch item</h3>
    </div>
    <div class="menu-item-price>
    #1500
    </div>
    </div>
    </div>
    </div>
    </section>`;

const renderMenu = () => {
    const container = document.createElement('div');
    container.insertAdjacentHTML('beforeend', ourMenu);
    return container;
  };

  export default renderMenu;