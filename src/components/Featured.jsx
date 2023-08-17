import './styles/featured.styles.css'

import House1 from '../assets/house1.jpg'
import Bed1 from '../assets/bed1.jpg'
import Bed2 from '../assets/bed2.jpg'
import Kitchen from '../assets/kitchen.jpg'
import Bathroom1 from '../assets/bath1.jpg'
import House2 from '../assets/house2.jpg'
import Bed3 from '../assets/bed3.jpg'
import Bed4 from '../assets/bed4.jpg'
import Bathroom2 from '../assets/bath2.jpg'
import LivingRoom from '../assets/living-room.jpg'

function Featured() {
  return (
    <section className='featured'>
      <h1 className='featured-text'>Top Featured Listings</h1>
      <p>Selected listings byb City, State, & Zip based on views.</p>
      <div className='container'>
        <article className='listing'>
          <img src={House1} alt='House' />
          <img src={Bed1} alt='Bedroom 1' />
          <img src={Bed2} alt='Bedroom 2' />
          <img src={Kitchen} alt='Kitchen' />
          <img src={Bathroom1} alt='Bathroom' />
          <div className='span-3 img-details'>
            <div className='top'>
              <h2>123 Acme St, Dallas, TX</h2>
              <p>House for Sale</p>
              <p className='price'>$2,677,000</p>
            </div>
            <div className='info-grid'>
              <div className='info'>
                <p className='bold'>
                  Bedrooms: <span className='info-detail'>5</span>
                </p>
              </div>
              <div className='info'>
                <p className='bold'>
                  Bedrooms: <span className='info-detail'>7</span>
                </p>
              </div>
              <div className='info'>
                <p className='bold'>
                  Square Feet: <span className='info-detail'>8,138</span>
                </p>
              </div>
              <div className='info'>
                <p className='bold'>
                  Estimated Payment:{' '}
                  <span className='info-detail'>$14,797 / mo</span>
                </p>
              </div>
            </div>
          </div>
          <div className='span-2 right-img-details'>
            <p>
              A Beautiful modern day home in the city with a full-size pool.
              Spacious and luxurious home with a beautiful view of the city.
              Includes two full bathrooms, granite countertop kitchen, and a
              mediia/entertainment room for a nice night in.
              <button className='btn'>View Listing</button>
            </p>
          </div>
        </article>
        <article className='listing listing-2'>
          <img src={House2} alt='House' />
          <img src={Bed3} alt='Bedroom' />
          <img src={Bed4} alt='Bedroom' />
          <img src={Bathroom2} alt='Bathroom' />
          <img src={LivingRoom} alt='Living Room' />
          <div className='span-3 img-details'>
            <div className='top'>
              <h2>123 Acme St, Dallas, TX</h2>
              <p>House for Sale</p>
              <p className='price'>$2,677,000</p>
            </div>
            <div className='info-grid'>
              <div className='info'>
                <p className='bold'>
                  Bedrooms: <span className='info-detail'>5</span>
                </p>
              </div>
              <div className='info'>
                <p className='bold'>
                  Bedrooms: <span className='info-detail'>7</span>
                </p>
              </div>
              <div className='info'>
                <p className='bold'>
                  Square Feet: <span className='info-detail'>8,138</span>
                </p>
              </div>
              <div className='info'>
                <p className='bold'>
                  Estimated Payment:{' '}
                  <span className='info-detail'>$14,797 / mo</span>
                </p>
              </div>
            </div>
          </div>
          <div className='span-2 right-img-details'>
            <p>
              A Beautiful modern day home in the city with a full-size pool.
              Spacious and luxurious home with a beautiful view of the city.
              Includes two full bathrooms, granite countertop kitchen, and a
              mediia/entertainment room for a nice night in.
              <button className='btn'>View Listing</button>
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Featured
