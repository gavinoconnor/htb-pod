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
          <img src={Alysia} alt="alysia" style={{ borderRadius: '15%' }} />

          <div className="sit-social-icons">
            <a href='httsections://www.instagram.com/hittingthebottle/' target='_blank' rel="noopener noreferrer"><i className='fab fa-instagram fa-lg fa-fw'></i>
            </a>
            <a href='https://www.facebook.com/hittingthebottlepod/' target='_blank' rel="noopener noreferrer"><i className='fab fa-facebook fa-lg fa-fw'></i>
            </a>
            <a href='https://www.tiktok.com/@hittingthebottlepod' target='_blank' rel="noopener noreferrer"><i className='fab fa-tiktok fa-lg fa-fw'></i>
            </a>
          </div>

          <div className='sit-bio'>
            <h3 className="sit-name">Alysia</h3>
            <div className='sit-about-alysia'>
              <p>
                Originally hails from Los Angeles, has now resided in the Boston area for more than half a decade. Ask her four years ago if she pictured herself with a kid and she would’ve poured her shot of tequila on you. However, here she (happily!) is. She is a novice mom to 3-year-old River James, who is as sparkling, fierce, and untamed as her name might suggest.
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
          <img src={Sarah} alt="sarah" style={{ borderRadius: '15%' }} />

          <div className="social-icons">
            <a href='httsections://www.instagram.com/hittingthebottle/' target='_blank' rel="noopener noreferrer"><i className='fab fa-instagram fa-lg fa-fw'></i>
            </a>
            <a href='https://www.facebook.com/hittingthebottlepod/' target='_blank' rel="noopener noreferrer"><i className='fab fa-facebook fa-lg fa-fw'></i>
            </a>
            <a href='https://www.tiktok.com/@hittingthebottlepod' target='_blank' rel="noopener noreferrer"><i className='fab fa-tiktok fa-lg fa-fw'></i>
            </a>
          </div>

          <div className="sit-bio">
            <h3 className="sit-name">Sarah</h3>
            <div className='sit-about-sarah'>
              <p>
                Is a self-proclaimed mom expert who truly has no idea what the f*ck she is doing. Fake it ‘til you make it, isn’t that what they say?  Coming from a diverse background including - but not limited to - corporate retail, design, and a quick-but-very-fun stint in bartending, motherhood was a far cry from her career path. Not one to back down, she accepted the role and is doing the best she can. She is a single mama to a sprightly three-year-old Owen Fox, who is an actual tornado of love and mischief.
              </p>
              <p>
                After quite the life-changing move from the east coast to the west to help a friend launch a new business...a global pandemic hit.  So what does a single mother, unemployed, living across the country from her support system do? Her best to create a community of people who also have no fucking clue what they are doing, drink in hand.
              </p>
              <p>
                Alongside Alysia, Sarah wants to create a safe space to talk about shit: the good, the bad, and the especially hideous. Time to slide down a bourbon on the rocks, sit crooked, and talk straight.
              </p>
            </div>
          </div>
        </div>

        <div className="more">
          <section>Find us here:
            <a href='httsections://www.instagram.com/hittingthebottle/' target='_blank' rel="noopener noreferrer"><i className='fab fa-instagram fa-lg fa-fw'></i>
            </a>
            <a href='https://www.facebook.com/hittingthebottlepod/' target='_blank' rel="noopener noreferrer"><i className='fab fa-facebook fa-lg fa-fw'></i>
            </a>
            <a href='https://www.tiktok.com/@hittingthebottlepod' target='_blank' rel="noopener noreferrer"><i className='fab fa-tiktok fa-lg fa-fw'></i>
            </a>
          </section>
        </div>
      </div>
    )
  }
}

export default OurStory;
