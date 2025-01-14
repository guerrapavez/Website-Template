import Button from 'react-bootstrap/Button';
import colors from '../../utils/colors';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState, useEffect } from 'react';

const NavLinks = () => {
    const [width, setWidth] = useState(window.innerWidth);

      function handleWindowSizeChange() {
          setWidth(window.innerWidth);
      }
      useEffect(() => {
          window.addEventListener('resize', handleWindowSizeChange);
          return () => {
              window.removeEventListener('resize', handleWindowSizeChange);
          }
      }, []);
      const isMobile = width <= 768;
      
    return (
      <div className={`${isMobile ? 'flex-col' : 'flex'} items-center`}>
        <Button title='About' variant='light' style={{textDecoration:'none', fontStyle:'normal'}}href="/about">
         About
        </Button>
        <DropdownButton id="services-dropdown" title="Services" variant='light' style={{padding:2}}>
          <Dropdown.Item href="/services">Fixtures</Dropdown.Item>
          <Dropdown.Item href="/services">Gauges</Dropdown.Item>
          <Dropdown.Item href="/services">Spare Parts</Dropdown.Item>
          <Dropdown.Item href="/services">SPM</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="capabillities-dropdown" variant='light' title="Capabilities" style={{padding:2, colorScheme: colors.haseBlue }}>
          <Dropdown.Item href="/capabilities">Drilling</Dropdown.Item>
          <Dropdown.Item href="/capabilities">Turning</Dropdown.Item>
          <Dropdown.Item href="/capabilities">Milling</Dropdown.Item>
          <Dropdown.Item href="/capabilities">Grinding</Dropdown.Item>
          <Dropdown.Item href="/capabilities">Laser Engraving</Dropdown.Item>
          <Dropdown.Item href="/capabilities">Saw Cutting</Dropdown.Item>
        </DropdownButton>
        <Button style={{ margin:2, backgroundColor: colors.haseBlue , textDecoration: 'none'}} smooth href="/contact">
          Contact us
        </Button>
      </div>
    )
}

export default NavLinks;