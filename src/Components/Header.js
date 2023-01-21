import React from 'react'
function Header(props) {
  let {flag} = props;
  console.log(props);
  let products = [{
    "title":"Find Doctors",
    "subtitle":"Book an appointment"
  },
  {
    "title":"Video Consult",
    "subtitle":"Consult top doctors"
  },
  {
    "title":"Medicine",
    "subtitle":"practo pharmacy"
  },
  {
    "title":"Lab Tests",
    "subtitle":"Book tests & checkup"
  },
  {
    "title":"Surgeries",
    "subtitle":"Expert surgical care"
  }
  ];
  console.log("from header", flag);
  return (
    <div>
      <div className="header">
            <div className='nav-left'>
              <span className='practo-logo'>
              <a className="nav-interact"  href="http://localhost:3000/">
                <img src="./Images/practo.jpg" alt="practo-logo"/>
              </a>
              </span>
            </div>
            <div className='nav-mid'>
              {
                products.map(function(x){
                  return <div className='product-tab'>
                  <a className="product-tab-anchor" href="http://localhost:3000/" title="book">
                    <div className="product-tab__title">{x.title}</div>
                    <div className="product-tab__subtitle">{flag == true?x.subtitle:""}</div>
                  </a>
                </div>
                })
              }
            </div>
            
            <div className='nav-right'>
              <div className='drop-down'>
                <a className="nav-interact"  href="http://localhost:3000/">
                <span className='new'>NEW</span>
                </a>
                <select>
                  <option value="0">For Corporates</option>
                  <option value="1">Health & Wellness Plans</option>
                  <option value="2">Group Insurance</option>
                </select>
              </div>
              <div className='drop-down'>
                <select>
                  <option value="0">For Providers</option>
                  <option value="1">Practo Prime</option>
                  <option value="2">Software for Provider</option>
                  <option value="3">List your practice for free</option>
                </select>
              </div>
              <div className='drop-down'>
                <select>
                  <option value="0">Security & Help</option>
                  <option value="1">Data Security</option>
                  <option value="2">Help</option>
                </select>
              </div><div className='nav-buttons'>
                <a className="button"  href="http://localhost:3000/">Login/Signup</a>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Header