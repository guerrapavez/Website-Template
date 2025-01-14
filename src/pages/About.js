import NavBar from "../components/Navbar/NavBar"
import certImg from '../images/iso-certificate-can2143.jpg';
import thing1 from '../images/SlideShow/thing1.jpg';
import thing2 from '../images/SlideShow/thing2.jpg';
import thing3 from '../images/SlideShow/thing3.jpg';
import thing4 from '../images/SlideShow/thing4.jpg';
import Footer from "../components/Footer";
import { useDocTitle } from '../components/CustomHook';
import colors from '../utils/colors';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';


const About = () => {
    useDocTitle('HaseTooling | About Us')
    const descriptionAbout = "We take great pride in our capabilities of offering our clients tools for automation, gauging, specialty tooling and small precision dies. We thrive to give our customers Excellent Service with fast turnaround times and a quality product at competitive pricing. The industries we are currently working for are the Automotive Sector, Customer Products, Stamping Companies as well as Automated Packaging and Bottling lines.";
    const descriptionCert = "We are proud to announce that Hase Tooling Specialties Inc has achieved ISO 9001:2015 certification, a globally recognized standard for Quality Management Systems. This certification reflects our unwavering commitment to delivering products/services of the highest quality and our dedication to continuous improvement.";

    const images = [thing1, thing2, thing3, thing4];
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
        <>
            <div className="hero" id='hero'>
                <NavBar />
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div className="flex flex-col justify-between text-center lg:text-left" style={{ paddingTop: 138 }}>
                        <div className="flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold" style={{ color: colors.haseBlue }}>
                                About Us
                            </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center" data-aos="zoom-in" data-aos-delay="200">
                            <div style={{ maxWidth: 900 }} className="text-xl font-semibold tracking-tight mb-5 mr-7 text-gray-500">{descriptionAbout}</div>

                            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center items-center text-center`} data-aos="zoom-in" data-aos-delay="200">
                                <div className="p-2" id='about'>
                                    <div className="flex-col my-4 lg:text-left lg:my-0 lg:justify-end w-full px-8" data-aos="zoom-in" data-aos-delay="500">
                                        <h3 className="text-3xl font-bold" style={{ color: colors.haseBlue }}>Industries Served</h3>
                                        <ul className="list-disc pl-6 text-xl text-gray-600 font-semibold">
                                            <li>Oil and Gas</li>
                                            <li>Mining</li>
                                            <li>Non-Destructive testing (NDT)</li>
                                            <li>Power Generation</li>
                                            <li>Pipe Line</li>
                                            <li>Medical</li>
                                            <li>Automotive</li>
                                            <li>Automation</li>
                                            <li>Manufacturing</li>
                                            <li>Refineries</li>
                                            <li>Industrial Equipment</li>
                                            <li>Agriculture</li>
                                            <li>Construction</li>
                                        </ul>
                                    </div>
                                </div>
                                <Carousel fade style={{width: isMobile ? '100%' : 900} }>
                                    {images.map((image, index) => (
                                        <Carousel.Item key={index} >
                                            <img
                                                src={image}
                                                alt={`Slide ${index}`}
                                                style={{ maxWidth: 900, width: !isMobile ? 900 : '100%'}}
                                                className="rounded-lg"
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                                <h3 className="text-3xl font-bold" style={{ color: colors.haseBlue }}>ISO 9001-2015 Certification</h3>
                                <div>
                                    <p className='my-3 text-xl text-gray-600 font-semibold'>{descriptionCert}</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                                <img alt="card img" className="rounded-t float-right" style={{ maxHeight: 900 }} src={certImg} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;