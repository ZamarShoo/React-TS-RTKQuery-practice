import React, {FC} from 'react'
import {Link} from 'react-router-dom'

const Navigation: FC = () => {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
        <h3 className='font-bold'>Github Search</h3>

        <ul className='flex'>
            <li><Link className='mr-4' to="/">Home</Link></li>
            <li><Link to="/favorite">Favorite</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation