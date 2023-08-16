import { useState } from 'react'
//icons
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsFillHouseFill } from 'react-icons/bs'
//styles
import './styles/header.styles.css'

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const handleClick = () => setShowMenu(!showMenu)

  return (
    <div className='navbar'>
      <div className='container'>
        <h1>
          <span>
            <BsFillHouseFill />
            Real
          </span>
          Estate
        </h1>
        <button className='btn'>Sign In</button>
        <ul className={showMenu ? ' nav-menu active' : 'nav-menu'}>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Search</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {showMenu ? (
            <FaRegTimesCircle className='icon' />
          ) : (
            <HiOutlineMenuAlt4 className='icon' />
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
