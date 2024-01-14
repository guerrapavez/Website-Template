import React from 'react';
import colors from '../utils/colors';
class SlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            images: props.images,
        };
    }

    componentDidMount() {
        this.setState({ images: this.state.images });
    }

    render() {
        const { currentIndex, images } = this.state;

        const goToPreviousSlide = () => {
            this.setState(prevState => ({
                currentIndex: (prevState.currentIndex - 1 + images.length) % images.length
            }));
        };

        const goToNextSlide = () => {
            this.setState(prevState => ({
                currentIndex: (prevState.currentIndex + 1) % images.length
            }));
        };

        const buttonStyle = {
            backgroundColor: '#007bff', // Change the color as needed
            color: '#ffffff', // Change the color as needed
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
          };

        return (
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src={images[currentIndex]} alt="Slideshow Image" />
                    </div>
                </div>
                <a className='prev' style={{marginRight:2,padding:2,paddingLeft:5,paddingRight:5}} onClick={goToPreviousSlide}>&#10094;</a>
                <a className='next' style={{marginLeft:2, padding:2,paddingLeft:5, paddingRight:5}}onClick={goToNextSlide}>&#10095;</a>  
            </div>
        );
    }
}

export default SlideShow;
