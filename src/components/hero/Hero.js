import React from 'react'
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Link, useNavigate } from 'react-router-dom';


const Hero = ({ movies }) => {

    const navigate = useNavigate();

    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                   
                }
            </Carousel>
        </div>
    )
}

export default Hero