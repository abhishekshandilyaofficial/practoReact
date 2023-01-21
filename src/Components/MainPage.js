import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import SecondPage from './SecondPage';
function MainPage(props) {
  const [flag, setFlag] = useState(false);
  let history = useHistory();
 
  function nextPage(){
    setFlag(true);
    props.set(true);
    history.push('/secondPage');
  }
  let cards = [{
    "img":"./Images/1.jpg",
    "head":"Instant Video Consultation",
    "light":"Connect within 60 secs",
    "link":"http://localhost:3000/"
  },
  {
    "img":"./Images/2.jpg",
    "head":"Find Doctors Near You",
    "light":"Confirmed appointments",
    "link":"http://localhost:3000/"
  },
  {
    "img":"./Images/3.jpg",
    "head":"Medicines",
    "light":"Essentials at your doorstep",
    "link":"http://localhost:3000/"
  },
  {
    "img":"./Images/4.jpg",
    "head":"Lab Tests",
    "light":"Sample pickup at your home",
    "link":"http://localhost:3000/"
  },
  {
    "img":"./Images/5.jpg",
    "head":"Surgeries",
    "light":"Safe and trusted surgery centers",
    "link":"http://localhost:3000/"
  }
  ]
  let speciality = [{
    "class":"pdp",
    "img":"./Images/p1.jpg",
    "sp1":"Period doubts or Pregnancy",
    "sp2":"CONSULT NOW",
    "link":"http://localhost:3000/"
  },
  {
    "class":"acne",
    "img":"./Images/p2.jpg",
    "sp1":"Acne, pimple or skin issue",
    "sp2":"CONSULT NOW",
    "link":"http://localhost:3000/"
  },
  {
    "class":"pib",
    "img":"./Images/p3.jpg",
    "sp1":"Performance issue in bed",
    "sp2":"CONSULT NOW",
    "link":"http://localhost:3000/"
  },
  {
    "class":"ccf",
    "img":"./Images/p4.jpg",
    "sp1":"Cold, cough or fewer",
    "sp2":"CONSULT NOW",
    "link":"http://localhost:3000/"
  },
  {
    "class":"cnfw",
    "img":"./Images/p5.jpg",
    "sp1":"Child not feeling well",
    "sp2":"CONSULT NOW",
    "link":"http://localhost:3000/"
  },
  {
    "class":"da",
    "img":"./Images/p6.jpg",
    "sp1":"Depression or Anxiety",
    "sp2":"CONSULT NOW",
    "link":"http://localhost:3000/"
  }
  ]
  let bookAppointment = [
    {
      "img":"./Images/bookappointment_1.jpg",
      "title":"Dentist",
      "subtitle":"Teething troubles? Find dentist." 
    },
    {
      "img":"./Images/bookappointment_2.jpg",
      "title":"Gynecologist/Obstetrician",
      "subtitle":"Explore for women's health" 
    },
    {
      "img":"./Images/bookappointment_3.jpg",
      "title":"Diet Nutrition",
      "subtitle":"Get guidence on eating right" 
    },
    {
      "img":"./Images/bookappointment_4.jpg",
      "title":"Physiotherapist",
      "subtitle":"Pulled a muscle? Get it treated now"
    },
    {
      "img":"./Images/bookappointment_5.jpg",
      "title":"General surgeon",
      "subtitle":"Need operation? Find the right surgeon"
    },
    {
      "img":"./Images/bookappointment_6.jpg",
      "title":"General physician",
      "subtitle":"Find the right family doctor"
    },
    {
      "img":"./Images/bookappointment_7.jpg",
      "title":"Pediatritian",
      "subtitle":"Child specialist and doctors for infant"
    },
    {
      "img":"./Images/bookappointment_8.jpg",
      "title":"Gastroenterologist",
      "subtitle":"Explore for digestive system isues"
    }
   
  ];
  
  console.log("MainPage",flag)
  return (
    <div>
        <div>
        <div className='search-box-wrapper'>
          <div className='search-box'>
            <input placeholder="Search location" value="Bangalore" />
          </div>
          <div className='search-box'>
            <input  placeholder="Search doctors, clinics, hospitals, etc." value="" />
          </div>
          <div className="try-plus">
            <a href="http://localhost:3000/">
              <img src="./Images/try plus.jpg" alt="try-plus" />    
            </a>                    
          </div>
        </div>
        <div className='content-card'>
          <div className='banner'>
              <img   onClick={nextPage} src="./images/chronic_consumer_banner_dweb.png" alt="Add"/>
          </div> 
        </div>
        <div className='static'>
          {
            cards.map(function(obj, i, arr){
              return <div className='card-one'>
              <a href={obj.link}>
              <div className='card-image'>
                <img src={obj.img}/>
              </div>
              <div className='card-desc'>
                <div className='desc-head'>{obj.head}</div>
                <div className='desc-light'>{obj.light}</div>
              </div>
              </a>
          </div>
            })
          }
        </div>
        <div className='specialist'>
              <div className='spec-head'>
                  <div className='title'>
                    <div className='h2'>Consult top doctors online for any health concern</div>
                    <div className='h4'>Private online consultaions with verified doctors in all specialists</div>
                  </div>
                  <div className='div-button'>
                    <button type='button' className='button' >View All Specialities</button>
                  </div>
              </div>
        </div>
        <div className='spec-add'>
          {
            speciality.map(function(obj, i, arr){
              return <div className={obj.class}>
              <a href={obj.link} class="card-link">
                  <div className="card-img">
                    <a href={obj.link} class="card-link">
                      <span className="sp-span">
                        <img src={obj.img} alt={obj.sp1} class="card_img" />
                      </span>
                    </a>
                  </div>
                <div className="sp1">{obj.sp1} </div>
                <div class="sp2">{obj.sp2}</div>
                </a>
              </div>
            })
          }
        </div> 
        <div className='apppointment'>
          <div className='appointent-header'>
              <div className='appoint-head-title'>
              Book an appointment for an in-clinic consultaion
              </div>
              <div className='appoint-head-subtitle'>
              Find experienced doctors across all specialities
              </div>
          </div>
          
          <div id='scroll' className='appointment-scroll'>
            
              {
                bookAppointment.map(function(x){
                  return <div className='appointment-div'>
                    <a href="http://localhost:3000/">
                  <div className='appointment-img-div'>
                    <img src={x.img} className='appointment-img'/>
                  </div>
                  <div className='appointment-title'>
                    <div className='appointment-title-head'>{x.title}</div>
                    <div className='appointment-title-subhead'>{x.subtitle}</div>
                    </div>
                    </a>
                </div>
               
                })
              }
            </div>
        </div>
      </div> 
    </div>
  )
}

export default MainPage