import React, { useEffect, useState } from 'react';
import './About.css';
import backgroundVideo from '../images/BackgroundVideo.mp4';
import A1 from '../images/A1.png';
import A2 from '../images/A2.png';
import A3 from '../images/A3.png';
import B1 from '../images/B1.png';
import B2 from '../images/B2.png';
import B3 from '../images/B3.png';
import C1 from '../images/C1.png';
import C2 from '../images/C2.png';
import C3 from '../images/C3.png';

import MoveImage from './MoveImage';
import { CgArrowLongRight } from "react-icons/cg";
import { Card, Button } from 'react-bootstrap';

const About = () => {
    const [isVisible, setIsVisible] = useState(false); // Initialize visibility state for offers
    const [cardVisible, setCardVisible] = useState(false); // Initialize visibility state for card contents
    const [textVisible, settextVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            }
            if (window.scrollY > 600) {
                setCardVisible(true);
            }
            if (window.scrollY > 1400) {
                settextVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const slides = [
        {
            id: 1,
            image: B1, // Replace with actual image URLs
            title: 'Signature cuisine',
            description:'Our spread of dining experiences are all carefully curated — from ingredients and menus, to lighting and decor. Whether you’re served a poolside brunch, or a Michelin-star meal, you can guarantee culinary excellence from our dedicated chefs.',
        },
        {
            id: 2,
            image: B2,
            title: 'World-renowned hospitality',
            description:'We want to make every moment precious for everyone who walks through our doors. With our warm, authentically Indonesian hospitality, we exceed expectations to delight our guests at every opportunity.'
        },
        {
            id: 3,
            image: B3,
            title: 'Redefining luxury',
            description:'We’re leading luxury travel to something more emotional and inspiring. With our world-class hospitality and bold creative flair, we create moments that stay with our guests for years to come.'
        },
        // Add more slides here if needed
    ];


    const ImageCards = () => {
        const icards = [
          {
            title: "Luxury & Travel Concierge",
            image: C1,
          },
          {
            title: "Luxury Experiences",
            image: C2,
          },
          {
            title: "Tailor-Made Travel",
            image: C3,
          },
        ];
      
        return (
          <div className="icard-container">
            {icards.map((icard, index) => (
              <div key={index} className="icard">
                <div className="icard-image" style={{ backgroundImage: `url(${icard.image})` }}>
                  <div className="icard-overlay">
                    <h2>{icard.title}</h2>
                    <p>Explore</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      };
      

    const Slider = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [visible, setVisible] = useState(true);

        const nextSlide = () => {
            setVisible(false); // Hide the current slide
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                );
                setVisible(true); // Show the next slide
            }, 500); // Wait for the transition duration before changing the index
        };
    
        const prevSlide = () => {
            setVisible(false); // Hide the current slide
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? slides.length - 1 : prevIndex - 1
                );
                setVisible(true); // Show the previous slide
            }, 500); // Wait for the transition duration before changing the index
        };

        useEffect(() => {
            const interval = setInterval(() => {
                nextSlide();
            }, 10000); // Change every 10 seconds

            return () => clearInterval(interval);
        }, []);

        return (
            <div className="slider">
                <div className="slider-content" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                    <img src={slides[currentIndex].image} alt={slides[currentIndex].title} className="slider-image" />
                    <div className="slider-text">
                        <h3>{slides[currentIndex].title}</h3>
                        <p>{slides[currentIndex].description}</p>
                    </div>
                </div>
                <div className="slider-arrows">
                    <button onClick={prevSlide} className="slider-arrow left-arrow">❮</button>
                    <button onClick={nextSlide} className="slider-arrow right-arrow">❯</button>
                </div>
            </div>
        );
    };

    return (
        <div className="About">
            
            
            <div className="video-container">
                <video autoPlay loop muted className="background-video">
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay">
                    <div style={{ marginLeft: '10%', marginTop: '22%', marginBottom: '320px' }}>
                        <h1>Luxury</h1>
                        <h2>Travel & Lifestyle</h2>
                        <h3>in Indonesia</h3>
                        <span style={{ cursor: 'pointer' }}>EXPLORE <CgArrowLongRight size={'25px'} /></span>
                    </div>
                </div>
            </div>
            <div class="container">
            <div class="component" style={{
                alignItems: 'center',
                textAlign: 'center',
                margin: '20px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                visibility: isVisible ? 'visible' : 'hidden'
            }}>
                <span style={{ color: 'white' }}>OFFERS</span><br />
                <span style={{ color: 'white' }}>For our valued guests</span>
            </div>

            <div class="component">
                <div className="card-container">
                    <Card className="custom-card">
                        <Card.Img variant="top" src={A1} className="custom-card-img" />
                        <Card.Body>
                            <div style={{
                                margin:'25px',
                                opacity: cardVisible ? 1 : 0,
                                transform: cardVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                                visibility: cardVisible ? 'visible' : 'hidden'
                            }}>
                                <Card.Title>Experience</Card.Title>
                                <h3>The Escapes</h3>
                                <Card.Text>
                                    Experience pure relaxation: Discover the perfect escape.
                                    <ul>
                                        <li>All-inclusive package</li>
                                        <li>Unique Experiences</li>
                                        <li>Exclusive Access</li>
                                        <li>VIP Treatment</li>
                                        <li>Exclusive Savings & Offers</li>
                                    </ul>
                                </Card.Text>
                            </div>
                            <Button variant="outline-light">BOOK NOW</Button>
                        </Card.Body>
                    </Card>

                    <Card className="custom-card">
                        <Card.Img  variant="top" src={A2} className="custom-card-img" />
                        <Card.Body  >
                            <div style={{
                                margin:'25px',
                                opacity: cardVisible ? 1 : 0,
                                transform: cardVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                                visibility: cardVisible ? 'visible' : 'hidden'
                            }}>
                                <Card.Title>Custom-Made</Card.Title>
                                <h3>Luxury Travel</h3>
                                <Card.Text>
                                    Tailored to perfection: Indulge in the bespoke journey of your dreams.
                                    <ul>
                                        <li>Tailored to your preferences</li>
                                        <li>Exclusive Access</li>
                                        <li>VIP Treatment</li>
                                        <li>Stress-free Travel Planning</li>
                                        <li>Unforgettable Experiences</li>
                                    </ul>
                                </Card.Text>
                            </div>
                            <Button variant="outline-light">GET IN TOUCH</Button>
                        </Card.Body>
                    </Card>

                    <Card className="custom-card">
                        <Card.Img variant="top" src={A3} className="custom-card-img" />
                        <Card.Body>
                            <div style={{
                                margin:'25px',
                                opacity: cardVisible ? 1 : 0,
                                transform: cardVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                                visibility: cardVisible ? 'visible' : 'hidden'
                            }}>
                                <Card.Title>Lifestyle Management</Card.Title>
                                <h3>Memberships</h3>
                                <Card.Text>
                                    Experience the ultimate lifestyle with our exclusive memberships.
                                    <ul>
                                        <li>Hassle-free Management</li>
                                        <li>Dedicated Concierge</li>
                                        <li>Exclusive Access</li>
                                        <li>Tailored Solutions</li>
                                        <li>Expert Advice & Guidance</li>
                                    </ul>
                                </Card.Text>
                            </div>
                            <Button variant="outline-light">OUR SERVICES</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
<div class="component"> <Slider /></div> 
           
                <div class="component" style={{
                color:'white',
                alignItems: 'center',
                textAlign: 'center',
                margin: '20px',
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
                visibility: textVisible ? 'visible' : 'hidden'}}>
                    <span >OUR EXPERTISES</span><br/><br/>
                    <span>We are a high-end lifestyle company that specializes in providing exclusive & personalized concierge, travel, and entertainment experiences to a discerning and selective clientele who demand the very best.</span><br/><br/>
                    <span>We draw on our in-depth knowledge of the region to bring you only the most exceptional luxury villas and first-class yacht charters in Indonesia. Our personalized service ensures that every aspect of your journey is tailored to your tastes from start to finish so that you can enjoy a truly unforgettable journey in Bali and beyond. We bring together Indonesia’s most exciting, exclusive, and luxurious properties and holiday experiences.</span><br/>
                    <Button className='textButton' variant="outline-light">OUR SERVICES</Button>
                </div>


                    <ImageCards />

                
                <div class="component"  style={{
                color:'white',
                alignItems: 'center',
                textAlign: 'center',
                margin: '20px',}}>
                    <span>A 360 DEGREE EXPERIENCE</span><br/>
                    <span>At LOV ANGELS Member's Club, we represent the epitome of luxury, offering an exclusive haven for individuals who seek a level of personalized excellence that transcends the ordinary. We are not just a club, we are a portal to a world where indulgence and privilege converge.</span>
                </div>

                <div class="component">   <MoveImage className='MoveImage' /> </div>

            <div class="component" className="luxury-experience">
                <div className='le-cn'>
                    <div className="le-content">
                        <p>
                            Indulge in the most <em>luxurious</em> to the most <em>authentic experiences</em>
                            while living on the Island of Gods, Bali. At LOV Angels, we carefully select only the
                            most majestic villas, hotels, resorts, yachts, exclusive transportation, activities,
                            and entertainment to meet the highest standards of our guests. Let our team curate a
                            personalized and unforgettable experience that caters to your unique preferences and desires.
                        </p>
                        
                        <button className="services-button">Our Services</button>
                    </div>
                </div>
            </div>
            <div class="component" style={{color:'white'}}>
                <h4>ABOUT US</h4> ,<br />
                <span>LOV Angels is a luxury concierge company based in Bali, Indonesia, specializing in bespoke, high-quality travel and concierge services for high-net-worth individuals and corporate clients. Since our establishment in 2000, we have been dedicated to providing highly tailored solutions that exceed our clients' expectations across Indonesia.</span> 
            </div>
            </div>
        </div>
    );
};

export default About;
