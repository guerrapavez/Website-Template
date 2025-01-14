import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer";
import {useDocTitle} from '../components/CustomHook';
import colors from "../utils/colors";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";

const Services = () => {
    useDocTitle('HaseTooling | Services')
    const [key, setKey] = useState('drilling');

    return (
        <>
           <div className="hero" id='hero'>
                <div style={{paddingBottom: 128}}>
                    <NavBar />
                </div>
                <div className="flex flex-col py-8 text-center items-center">
                    <div data-aos="zoom-in" data-aos-delay="200">
                        <h1 style={{color: colors.haseBlue}}>
                            Our Services
                        </h1>
                        <Tabs
                        activeKey={key}
                        defaultActiveKey="profile"
                        id="controlled-tab-capabilities"
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                        style={{color:colors.haseBlue}}
                        >
                            <Tab eventKey="fixtures" title="Fixtures">
                                Tab content for Fixtures
                            </Tab>
                            <Tab eventKey="gauges" title="Gauges">
                                Tab content for Gauges
                            </Tab>
                            <Tab eventKey="spare_parts" title="Spare Parts">
                                Tab content for Milling
                            </Tab>
                            <Tab eventKey="spm" title="SPM">
                                Tab content for Grinding
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Services;