import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../utils/colors';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        {/* <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div> */}
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-blue-900 font-bold" style={{ color: colors.haseBlue }}>We Offer Different Ways of Problem Solving</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Hase Tooling Specialties Inc. was established 1991 and has over 45 years of machining experience</p>
                            </div>
                            
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We are located in Kitchener in the heart of the "Technology Triangle" of Canada, about 100 km southwest of Toronto. Our facility has 5000 ft² and is well equipped with high precision machinery and measuring equipment.</p>
                            </div>
                            <Link to="/contact" style={{ backgroundColor: colors.haseBlue }} className="text-white hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Contact us
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;