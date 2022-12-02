import logo from './logo.svg';
import './App.css';
import { Button, FormCheck } from "react-bootstrap"
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <Cart />
    </div>
  );
}
function Card() {
  return (
    <div className='card'>
      <span></span>
      <h5 className='free'>free</h5>
      <h6 className='h6'>$0<span className='span'>/month</span></h6>
      <hr></hr>
      <ul>
        <li>Single User</li>
        <li>5GB Storage</li>
        <li>Unlimited Public Projects</li>
        <li>Community Access</li>
        <li>Unlimited Private Projects</li>
        <li>Dedicated Phone Support</li>
        <li>Free Subdomain</li>
        <li>Monthly Status Reports</li>
      </ul>
      <button className='button'>Button</button>
    </div>
  );
}
function Cart() {
  return (
    <div>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                  <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                  <hr></hr>
                  <ul className="fa-ul">
                    <li><span className="fa-li"><FaCheck /></span>Single User</li>
                    <li><span className="fa-li"><FaCheck /></span>5GB Storage</li>
                    <li><span className="fa-li"><FaCheck /></span>Unlimited Public Projects</li>
                    <li><span className="fa-li"><FaCheck /></span>Community Access</li>
                    <li className="text-muted"><span className="fa-li"><FaTimes /></span>Unlimited
                      Private Projects</li>
                    <li className="text-muted"><span className="fa-li"><FaTimes /></span>Dedicated
                      Phone Support</li>
                    <li className="text-muted"><span className="fa-li"><FaTimes /></span>Free Subdomain
                    </li>
                    <li className="text-muted"><span className="fa-li"><FaTimes /></span>Monthly Status
                      Reports</li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                  <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                  <hr></hr>
                  <ul className="fa-ul">
                    <li><span className="fa-li"><FaCheck /></span><strong>5 Users</strong></li>
                    <li><span className="fa-li"><FaCheck /></span>50GB Storage</li>
                    <li><span className="fa-li"><FaCheck /></span>Unlimited Public Projects</li>
                    <li><span className="fa-li"><FaCheck /></span>Community Access</li>
                    <li><span className="fa-li"><FaCheck /></span>Unlimited Private Projects</li>
                    <li><span className="fa-li"><FaCheck /></span>Dedicated Phone Support</li>
                    <li><span className="fa-li"><FaCheck /></span>Free Subdomain</li>
                    <li className="text-muted"><span className="fa-li"><FaTimes /></span>Monthly Status
                      Reports</li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                  <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                  <hr></hr>
                  <ul className="fa-ul">
                    <li><span className="fa-li"><FaCheck /></span><strong>Unlimited Users</strong>
                    </li>
                    <li><span className="fa-li"><FaCheck /></span>150GB Storage</li>
                    <li><span className="fa-li"><FaCheck /></span>Unlimited Public Projects</li>
                    <li><span className="fa-li"><FaCheck /></span>Community Access</li>
                    <li><span className="fa-li"><FaCheck /></span>Unlimited Private Projects</li>
                    <li><span className="fa-li"><FaCheck /></span>Dedicated Phone Support</li>
                    <li><span className="fa-li"><FaCheck /></span><strong>Unlimited</strong> Free
                      Subdomains</li>
                    <li><span className="fa-li"><FaCheck /></span>Monthly Status Reports</li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default App;
