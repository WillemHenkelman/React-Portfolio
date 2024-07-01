import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-full overflow-hidden px-4">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="max-w-6xl mx-auto">
                <Slider {...settings}>
                    <div className="px-2">
                        <div className="bg-white p-4 rounded shadow">
                            {/* Project 1 content */}
                            <h3>Project 1</h3>
                            <p>Description of Project 1</p>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="bg-white p-4 rounded shadow">
                            {/* Project 2 content */}
                            <h3>Project 2</h3>
                            <p>Description of Project 2</p>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="bg-white p-4 rounded shadow">
                            {/* Project 3 content */}
                            <h3>Project 3</h3>
                            <p>Description of Project 3</p>
                        </div>
                    </div>
                    {/* Add more project slides here */}
                </Slider>
            </div>
        </div>
    );
};

export default Projects;