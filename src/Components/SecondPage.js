import React from 'react'

function SecondPage() {
  let products = ['Home', 'Healthy Hair', 'Healthy Eating', 'Healthy Skin', 'Weight loss'];
   
  return (
    <div>
        <div className='s-header'>
            <div className='sh-nav-left'>
                {
                    products.map(function(x){
                        return <div className='s-product-tab'>
                        <a className="s-product-tab-anchor" href="http://localhost:3000/" title="book">
                          <div className="s-product-tab__title">{x}</div>
                        </a>
                      </div>
                    })
                }
            </div>
            <div className='sh-nav-right'>
                <div className='explore'>Explore</div>
                <div className='s-searchbox'>
                    <input type='text' placeholder='search' />
                </div>
            </div>
        </div>
        <div className="image-bgpage2" title="12 Coronavirus Myths and Facts That You Should Be Aware Of" >
                <img src="https://www.practostatic.com/fit/510f25a73b354e487a0830b37ae42cea17f7b61d" />
        </div>
        <div className='column-container'>
          <div className='blogs'>
                <div className='writings'>
                <h1>12 Coronavirus Myths and Facts That You Should Be Aware Of</h1>
            <h3>Dr.Diana Borgio</h3>
            <h4>2 March, 2020</h4>
          </div>
          <div>
                <p>As of April 10, 2020, COVID-19 currently affects 210 countries and union territories across the globe and 7,600 confirmed cases in India. 
                While there are so much news and information all over the internet about the spread and prevention of the outbreak, without a doubt, a few myths and fictions are also floating around. Believing in any of these myths can be more dangerous than the disease itself.
                Here are some of the most common misbeliefs about Coronavirus along with the actual facts that you should be aware of:</p>
          </div>
          <div className='inner-image'>
            <img className="big-image" src="https://www.practostatic.com/fit/e3f03b05c79711abef5a8f6b6f2667b1f1b208f5" />
          </div>
          <div className='inner-image'>
            <img class="big-image" src="https://www.practostatic.com/fit/7bd23dcf77f5f481a08badf79570845fd4ad49cb"></img>
          </div>
          <div className='inner-image'>
          <img class="big-image" src="https://www.practostatic.com/fit/4abd7fc47ab2f2cfae7e3795723abda2ac646c1f"/>
          </div>
          <div className='inner-image'>
          <img class="big-image" src="https://www.practostatic.com/fit/df0c18a866e15dce488a37d784c38109a31ac513" />
          </div>
          <div >
            <p>This information is important and must be shared with all. It is recommended to stay hydrated, stay away from people who are sick or down with a cold/ cough/ fever and maintain hand & face hygiene at all times to avoid catching an infection. </p>
          </div>
          <div className="post-top-tags">
            <a className="interest-tag" href="/healthfeed/viruses/tag"><button>Viruses</button></a>
            <a className="interest-tag" href="/healthfeed/common-cold/tag"><button>Common cold</button></a>
            <a className="interest-tag" href="/healthfeed/coronavirus/tag"><button>Coronavirus</button></a>
            <a className="interest-tag" href="/healthfeed/covid-19/tag"><button>COVID-19</button></a>
            </div>
        </div>
      <div className='other-adds'>
          <div className="plus-card">
            <a href="/plus/plan-details/redirect/PCS9">
              <img src="https://www.practostatic.com/subscriptions/upsell/HF/166617776452.png" width="100%" alt="Get Unlimited Online Consultation" />
            </a>
          </div>
          <div>Popular Articles</div>
          <div>
          <img className = 'popular-article-image' src="https://www.practostatic.com/fit/32d106810e98b3199d1bd9becebb51e97c918f63"/>

          </div>
          </div>
      </div>
        

      </div>
  )
}

export default SecondPage