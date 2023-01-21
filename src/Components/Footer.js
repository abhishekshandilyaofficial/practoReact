import React from 'react'

function Footer() {
  let footer = {
    "Practo":["About", "Blog", "Careers", "Peers", "Contact Us"],
    "patientServices":["Search for doctors", "Search for clinics","Search for Hospitals", "Book Diagnostic Tests","Book full Body Checkups","Practo Plus","Covid Hospital Listing","Practo Care Clinics","Read Health articles","Read about medicines","Practo drive","Health app","Practo Plus Infinity"],
    "forDoctors":["Practo Profile", "Rav by Practo", "Practo Reach","Ray Tab","Practo pro"],
    "forHospital":["Insta by Practo", "Qikwell by Practo", "Practo Profile","Practo Reach","Practo Drive"],
    "More":["Help","Developers","Privacy Policy", "Term & Condition", "PCS T&C","Healthcare Directory","Practo Health Wiki"],
    "Social":["Facebook","Twitter","LinkedIn","Youtube","Github"]};
  return (
    <div className='footer-main'>
      <div className='footer-top'>
          <div className='footer-inner'>
            <div className='foot-header'>
              <span>Practo</span>
            </div>
            {
              footer.Practo.map(function(v, i, arr){
                return <div className='f-content'>
                <a href="http://localhost:3000/">{v}</a>
                </div>
              })
            }
          </div>
          <div className='footer-inner'>
            <div className='foot-header'>
              <span>Patient Services</span>
            </div>
            {
              footer.patientServices.map(function(v, i, arr){
                return <div className='f-content'>
                <a href="http://localhost:3000/">{v}</a>
                </div>
              })
            }
          </div>
          <div className='footer-inner'>
            <div className='foot-header'>
              <span>For Doctors</span>
            </div>
            {
              footer.forDoctors.map(function(v, i, arr){
                return <div className='f-content'>
                <a href="http://localhost:3000/">{v}</a>
                </div>
              })
            }
          </div>
          <div className='footer-inner'>
            <div className='foot-header'>
              <span>For Hospital</span>
            </div>
            {
              footer.forHospital.map(function(v, i, arr){
                return <div className='f-content'>
                <a href="http://localhost:3000/">{v}</a>
                </div>
              })
            }
          </div>
          <div className='footer-inner'>
            <div className='foot-header'>
              <span>More</span>
            </div>
            {
              footer.More.map(function(v, i, arr){
                return <div className='f-content'>
                <a href="http://localhost:3000/">{v}</a>
                </div>
              })
            }
          </div>
          <div className='footer-inner'>
            <div className='foot-header'>
              <span>Social</span>
            </div>
            {
              footer.Social.map(function(v, i, arr){
                return <div className='f-content'>
                <a href="http://localhost:3000/">{v}</a>
                </div>
              })
            }
          </div>
      </div>
      <div className='footer-bottom'>
        <div className='practo-footer'>
          <img src="./Images/practo-footer.jpg" />
        </div>
        <div className="copy-right">Copyright © 2017, Practo. All rights reserved.</div>
      </div>
      <div className='practo-fix'>
              <img className='practo-fix-img' src = './Images/practo-fix.jpg'/>
        </div>
    </div>
  )
}

export default Footer