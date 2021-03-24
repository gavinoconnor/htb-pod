import React from 'react';

import './SitWithUs.css';
import Sarah from '../../assets/sarah.jpg';
import Alysia from '../../assets/alysia.jpg';


class OurStory extends React.Component {
  render() {
    return (
      <div className='sitwithus'>

        {/* Alysia's Section */}
        <div className="alysia">
          <div className="alysia-image-and-social">
            <img src={Alysia} alt="alysia" style={{ borderRadius: '15%' }} />
            <div className="alysia-social">
              <ul className="social-links">
                <li>
                  <a href='httsections://www.instagram.com/hittingthebottle/' target='_blank' rel="noopener noreferrer"><i className='fab fa-instagram fa-3x fa-fw'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.facebook.com/hittingthebottlepod/' target='_blank' rel="noopener noreferrer"><i className='fab fa-facebook fa-3x fa-fw'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.tiktok.com/@hittingthebottlepod' target='_blank' rel="noopener noreferrer"><i className='fab fa-tiktok fa-3x fa-fw'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="alysia-name-and-bio">
            <h2 className="sit-name" style={{ fontSize: '3em' }}>Alysia</h2>
            <div className='alysia-bio'>
              <p>
                Originally hails from Los Angeles and has now resided in the Boston area for more than half a decade. Ask her four years ago if she pictured herself with a kid and she would’ve poured her shot of tequila on you. However, here she (happily!) is. She is a novice mom to 3-year-old River James, who is as sparkling, fierce, and untamed as her name might suggest.
              </p>
              <p>
                When not fighting the good fight we lovingly call parenting, Alysia spends her time dabbling in interior design, reading the stack of books she keeps bedside, and playing chef in the kitchen. Alongside Sarah, she’s ready to have inclusive conversations with parents about the good shit, the bad shit and the in-between.
              </p>
              <p>
                After spending many monotonous years pent up in the four walls of an office building, COVID changed everything - and it was time to break free and work from the four walls of home.
              </p>
              <p>However, this time she’s her own boss. Give her a spicy mezcal marg and ask her to get real.
              </p>
            </div>
          </div>
        </div>

        {/* Sarah's Section */}
        <div className="sarah">

          <div className="sarah-image-and-social">
            <img src={Sarah} alt="sarah" style={{ borderRadius: '15%' }} />
            <div className="sarah-social">
              <ul className="social-links">
                <li>
                  <a href='httsections://www.instagram.com/hittingthebottle/' target='_blank' rel="noopener noreferrer"><i className='fab fa-instagram fa-3x fa-fw'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.facebook.com/hittingthebottlepod/' target='_blank' rel="noopener noreferrer"><i className='fab fa-facebook fa-3x fa-fw'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.tiktok.com/@hittingthebottlepod' target='_blank' rel="noopener noreferrer"><i className='fab fa-tiktok fa-3x fa-fw'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sarah-name-and-bio">
            <h2 className="sit-name" style={{ fontSize: '3em' }}>Sarah</h2>
            <div className='sarah-bio'>
              <p>
                Is a self-proclaimed mom expert who truly has no idea what the f*ck she is doing. Fake it ‘til you make it, isn’t that what they say?  Coming from a diverse background including - but not limited to - corporate retail, design, and a quick-but-very-fun stint in bartending, motherhood was a far cry from her career path. Not one to back down, she accepted the role and is doing the best she can.
              </p>
              <p>
                She is a single mama to a sprightly three-year-old Owen Fox, who is an actual tornado of love and mischief. After quite the life-changing move from the east coast to the west to help a friend launch a new business...a global pandemic hit.
              </p>
              <p>
                So what does a single mother, unemployed, living across the country from her support system do? Her best to create a community of people who also have no fucking clue what they are doing, drink in hand. Sarah wants to create a safe space to talk about shit: the good, the bad, and the especially hideous.
              </p>
              <p>
                Time to slide down a bourbon on the rocks, sit crooked, and talk straight.
              </p>
            </div>
          </div> 
        </div>

      </div>
    )
  }
}

export default OurStory;
