import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../../utils/colors';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const NavLinks = () => {
    return (
      <div className="flex items-center">
        <Link className="px-2 font-extrabold text-gray-500 hover:text-blue-900" style={{color:colors.haseBlue, textDecoration:'none'}}to="/about">
          About
        </Link>
        <DropdownButton id="services-dropdown" variant='secondary' title="Services" style={{padding:2}}>
          <Dropdown.Item href="/services?action">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="capabillities-dropdown" variant='secondary' title="Capabilities" style={{padding:2}}>
          <Dropdown.Item href="#/action-1">Drilling</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Tubing</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Milling</Dropdown.Item>
          <Dropdown.Item to="" href="/action-3">Saw Cutting</Dropdown.Item>
        </DropdownButton>
        <Link className="text-white hover:bg-blue-800 inline-flex items-center justify-center w-auto mx-1 px-3 py-2 shadow-xl rounded-xl" style={{ backgroundColor: colors.haseBlue , textDecoration: 'none'}} smooth to="/contact">
          Contact us
        </Link>
      </div>
    )
}

export default NavLinks;