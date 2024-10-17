import {Outlet} from "react-router-dom"

const Footer = () => {
    return (
        <>
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            {/* About ShopSphere */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="text-uppercase">About ShopSphere</h5>
              <p>
                ShopSphere is your one-stop online destination for the latest fashion trends, and more. Shop with confidence and enjoy exclusive deals every day.
              </p>
            </div>
  
            {/* Customer Service */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="text-uppercase">Customer Service</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light">Help Center</a></li>
                <li><a href="#" className="text-light">Returns</a></li>
                <li><a href="#" className="text-light">Shipping Info</a></li>
                <li><a href="#" className="text-light">Track Order</a></li>
              </ul>
            </div>
  
            {/* Social Media and Contact */}
            <div className="col-lg-4 col-md-12 mb-4">
              <h5 className="text-uppercase">Connect with Us</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light"><i className="bi bi-facebook"></i> Facebook</a></li>
                <li><a href="#" className="text-light"><i className="bi bi-twitter"></i> Twitter</a></li>
                <li><a href="#" className="text-light"><i className="bi bi-instagram"></i> Instagram</a></li>
                <li><a href="#" className="text-light"><i className="bi bi-linkedin"></i> LinkedIn</a></li>
              </ul>
              <p className="mt-3">Email: support@shopsphere.com</p>
              <p>Phone: +123-456-7890</p>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="text-center pt-3 border-top border-secondary">
            <p className="mb-0">&copy; {new Date().getFullYear()} ShopSphere. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
      <Outlet/>
      </>
    );
  };
  
  export default Footer;