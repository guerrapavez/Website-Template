import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../Navbar/NavLinks';
import haseLogoImg from '../../images/Hase_Tooling_logo.png';
import grandRiverLogoImg from '../../images/Grand_River_logo.png';
import smallHaseLogoImg from '../../images/Hase_Tooling_logo_just_HS.png';
import smallGrandRiverLogoImg from '../../images/Grand_River_logo_just_GR.png';
import colors from '../../utils/colors';


const NavBar = () => {
    const [top, setTop] = useState(true);
    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
    }

    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

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
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-20 ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex flex-row items-center">
                <Link to="/">
                    <div className="flex items-center ml-auto" style={{paddingTop: 2 , paddingBottom: 4}}>
                    <img alt="card img" className="rounded-t duration-1000" style={{maxWidth:'50%'}} src={isMobile ? smallHaseLogoImg : haseLogoImg} />
                    <img alt="card img" className="rounded-t duration-1000" style={{maxWidth:'50%'}} src={isMobile ? smallGrandRiverLogoImg : grandRiverLogoImg} />
                    </div>
                </Link>
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden" style={{ backgroundColor: colors.haseBlue , right:0}} onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen && (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            )}
                            {!isOpen && (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                <div className='hidden space-x-6 lg:inline-block p-5'>
                    <NavLinks />
                </div>
                <div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white rounded-lg block lg:hidden shadow-xl top-14 ${isOpen ? "block" : "hidden"}`}>
                    <div className='flex flex-col space-y-6'>
                    <NavLinks />
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
