import Carousel from 'react-bootstrap/Carousel';
import './cssfiles/Slider.css';
import pic1 from './pictures/1.png';
import pic2 from './pictures/2.png';
import pic3 from './pictures/3.png';
import pic5 from './pictures/5.png';
import Image from 'react-bootstrap/Image';
import { useNavigate } from "react-router-dom";

export default function Slider(){

    const navigate = useNavigate();

    const goToBooks = () => {
        navigate("/books");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return(
        <div className="slider-wrapper">

            <Carousel fade controls={false} indicators interval={3500}>

                {/* SLIDE 1 */}
                <Carousel.Item className="slide">
                    <Image src={pic1} className="sliderclass" />
                    <div className="overlay-center">
                        <h1>Step Into A World of Books</h1>
                        <p>Stories that stay with you forever</p>
                        <button onClick={goToBooks}>
                            Explore Collection
                        </button>
                    </div>
                </Carousel.Item>

                {/* SLIDE 2 */}
                <Carousel.Item className="slide">
                    <Image src={pic2} className="sliderclass" />
                    <div className="overlay-center">
                        <h1>Top Picks For Readers</h1>
                        <p>Handpicked bestsellers just for you</p>
                        <button onClick={goToBooks}>
                            Browse Now
                        </button>
                    </div>
                </Carousel.Item>

                {/* SLIDE 3 */}
                <Carousel.Item className="slide">
                    <Image src={pic3} className="sliderclass" />
                    <div className="overlay-center">
                        <h1>Feed Your Mind</h1>
                        <p>Knowledge that builds your future</p>
                        <button onClick={goToBooks}>
                            Start Reading
                        </button>
                    </div>
                </Carousel.Item>

                {/* SLIDE 4 */}
                <Carousel.Item className="slide">
                    <Image src={pic5} className="sliderclass" />
                    <div className="overlay-center">
                        <h1>Escape Into Stories</h1>
                        <p>Fiction that feels real</p>
                        <button onClick={goToBooks}>
                            Discover More
                        </button>
                    </div>
                </Carousel.Item>

            </Carousel>

        </div>
    );
}