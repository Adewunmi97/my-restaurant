const contactform = () => (
  `<section class="min-vh-100 menu-section">
    <div class="container contact-form p-3">

      <form method="post" class="mt-5 pt-5">
          <h3>Drop Us a Message</h3>
         <div class="row">
              <div class="col-md-6">
                  <div class="form-group">
                      <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                  </div>
                  <div class="form-group">
                      <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                  </div>
                  <div class="form-group">
                      <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                  </div>
                  <div class="form-group">
                      <input type="submit" name="btnSubmit" class="btnContact menu-section font-bold" value="Send Message" />
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <textarea name="txtMsg" class="form-control" placeholder="Your Message *"></textarea>
                  </div>
              </div>
          </div>
      </form>
    </div>
    </section>`);

const createContactPage = () => {
  const contactPage = document.createElement('div');
  contactPage.insertAdjacentHTML('beforeend', contactform());
  return contactPage;
};

export default createContactPage;