import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer";
import {useDocTitle} from '../components/CustomHook';
import colors from "../utils/colors";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";

const Capabilities = () => {
    useDocTitle('HaseTooling | Capabilities')
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
                            Our Capabilities
                        </h1>
                        <Tabs
                        activeKey={key}
                        defaultActiveKey="profile"
                        id="controlled-tab-capabilities"
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                        style={{color:colors.haseBlue}}
                        >
                            <Tab eventKey="drilling" title="Drilling" style={{color:colors.haseBlue}}>
                                Tab content for Drilling
                            </Tab>
                            <Tab eventKey="turning" title="Turning">
                                Tab content for Turning
                            </Tab>
                            <Tab eventKey="milling" title="Milling">
                                Tab content for Milling
                            </Tab>
                            <Tab eventKey="grinding" title="Grinding">
                                Tab content for Grinding
                            </Tab>
                            <Tab eventKey="laser_engraving" title="Laser Engraving">
                                Tab content for Laser Engraving
                            </Tab>
                            <Tab eventKey="saw_cutting" title="Saw Cutting">
                                Tab content for Saw Cutting
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Capabilities;