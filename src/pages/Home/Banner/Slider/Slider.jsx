import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slider = () => {
    return (
        <div>
            <AwesomeSlider animation="cubeAnimation">
                <div data-src="/path/to/image-0.png" />
                <div data-src="/path/to/image-1.png" />
                <div data-src="/path/to/image-2.jpg" />
            </AwesomeSlider>        
        </div>
    );
};

export default Slider;