import { h } from 'preact';
// @ts-ignore
import Glide from 'glidejs';
import firstSlide from '../assets/carrousel/bg-1.jpg';
import secondSlide from '../assets/carrousel/bg-2.jpg';
import thirdSlide from '../assets/carrousel/bg-3.jpg';
import fourthSlide from '../assets/carrousel/bg-4.jpg';

export default function Carrousel() {

    const carrousel = new Glide('.carrousel', {
        type: 'carousel',
        startAt: 0,
        perView: 1
    });
    carrousel.mount();

    return (
        <div className="carrousel">
            <ul className="carrousel__slides">
                <li className="carrousel__slide">
                    <img src={firstSlide} alt="First slide" />
                </li>
                <li className="carrousel__slide">
                    <img src={secondSlide} alt="Second slide" />
                </li>
                <li className="carrousel__slide">
                    <img src={thirdSlide} alt="Third slide" />
                </li>
                <li className="carrousel__slide">
                    <img src={fourthSlide} alt="Third slide" />
                </li>
            </ul>
        </div>
    );
}