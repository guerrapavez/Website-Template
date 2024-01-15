import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import {useDocTitle} from '../components/CustomHook';


const Home = () => {
    useDocTitle("HaseTooling | Specialized & Custom tooling | Waterloo");
    return (
        <div>
            <Hero />
            <Intro />
            <Services />
            <Clients />
            <Cta/>
            <Footer />
        </div>

    )
}

export default Home;

