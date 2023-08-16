import { AiOutlineSearch } from 'react-icons/ai'
import './styles/hero.styles.css'

function Hero() {
  return (
    <div className='hero'>
      <div className='content'>
        <h1>Find the perfect place</h1>
        <p className='search-text'>
          Search the largest selection of luxury high-rise apartments,
          multi-family homes, and luxury houses.
        </p>
        <form className='search'>
          <input
            type='text'
            name='keyword'
            id='keyword'
            placeholder='Enter Keyword...'
          />
          <div className='radio'>
            <input type='radio' name='buy-rent' id='buy' />
            <label htmlFor='buy'>Buy</label>
            <input type='radio' name='buy-rent' id='rent' />
            <label htmlFor='rent'>Rent</label>
            <button className='btn' type='submit'>
              <AiOutlineSearch className='icon /' />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero
