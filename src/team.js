const teamPage = () => (`
<section className="team-section sec-padding" id="team">
    <div className="container">
        <div className="row">
            <div className="section-title">
                <h2 data-title="team">Our Chefs</h2>
            </div>
        </div>

        <div className="row">
            <div className="team-item">
                <img src="http://i.huffpost.com/gen/1282658/images/o-FEMALE-CHEF-facebook.jpg" alt="" />
                <div className="team-item-info">
                    <h3>Maryann</h3>
                    <p>head chef</p>
                </div>
            </div>

            <div className="team-item">
                <img src="http://i.huffpost.com/gen/1282658/images/o-FEMALE-CHEF-facebook.jpg" alt="" />
                <div className="team-item-info">
                    <h3>Maryann</h3>
                    <p>head chef</p>
                </div>
            </div>

            <div className="team-item">
                <img src="http://i.huffpost.com/gen/1282658/images/o-FEMALE-CHEF-facebook.jpg" alt="" />
                <div className="team-item-info">
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
    team.insertAdjacentHTML('beforeend', (teamPage));
    return team;
  };

  export default ourTeam;