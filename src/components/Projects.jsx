import React from 'react';
import Slider from 'react-slick';

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div>
            <h2>Projects</h2>
            <Slider {...settings}>
                <div>
                    {/* Project 1 */}
                </div>
                <div>
                    {/* Project 2 */}
                </div>
                <div>
                    {/* Project 3 */}
                </div>
                {/* Add more project slides here */}
            </Slider>
        </div>
    );
};

export default Projects;