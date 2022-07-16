import React from 'react';

function Footer() {

  return (
    <footer class="footer py-4" style={{marginTop: '2rem'}}>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 text-lg-start">Copyright &copy; My Name Inês 2022</div>
                {/* <div class="col-lg-4 my-3 my-lg-0 text-center">
                    <a class="btn btn-dark btn-social mx-2" href="http://www.github.com/FlipGoncalves"><i class="fa fa-github"></i></a>
                </div> */}
                <div class="col-lg-6 text-lg-end">Contact us: sandra.15leonor@gmail.pt</div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
