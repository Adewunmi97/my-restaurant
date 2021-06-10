const teamPage = () => (`
<section class="team-section" id="team">
    <div class="container">
        <div class="row">
            <div class="section-title data mt-5">
                <h3 data-title="team">Our Chefs</h3>
            </div>
        </div>

        <div class="row mt-4">
            <div class="team-item">
                <img src="./assets/images/chef1.jpg" alt="" />
                <div class="team-item-info">
                    <h3>Maryann</h3>
                    <p>head chef</p>
                </div>
            </div>

            <div class="team-item">
                <img src="./assets/images/chef1.jpg" alt="" />
                <div class="team-item-info">
                    <h3>Maryann</h3>
                    <p>head chef</p>
                </div>
            </div>

            <div class="team-item">
                <img src="./assets/images/chef1.jpg" alt="" />
                <div class="team-item-info">
                    <h3>Maryann</h3>
                    <p>head chef</p>
                </div>
            </div>
        </div>
    </div>
</section>
`);

const ourTeam = () => {
  const team = document.createElement('div');
  team.classList.add('position-relative');
  team.insertAdjacentHTML('beforeend', (teamPage()));
  return team;
};

export default ourTeam;