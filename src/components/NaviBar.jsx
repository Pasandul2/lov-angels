import React, { useEffect, useState, useCallback } from 'react';
import { IoMenuOutline } from "react-icons/io5";
import './NaviBar.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { Turn as Hamburger } from 'hamburger-react';

const NaviBar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [visible, setVisible] = useState(true);
    const [isWeb, setIsWeb] = useState(false);
    let lastScrollY = 0;

    const toggleMenuWeb = () => {
        setIsWeb(!isWeb);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openDropdown = (index) => {
        setActiveDropdown(index);
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (isMobile) {
            if (currentScrollY > lastScrollY) {
                setVisible(false); // Hide navbar on scroll down
            } else {
                setVisible(true); // Show navbar on scroll up
            }
        }

        lastScrollY = currentScrollY;
    }, [isMobile]);

        // Memoized handleResize
        const handleResize = useCallback(() => {
            setIsMobile(window.innerWidth <= 768); // Adjust width as needed
        }, []);


        
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleResize);
            };
        }, [handleScroll, handleResize]);


    const styles = {

    offCanvasMenu: {
        position: 'fixed',
        top: 0,
        left: isWeb ? 0 : '-100%',
        width: '355px',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        transition: 'left 0.3s ease',
        zIndex: 3,
        paddingTop: '67px',
        paddingLeft:'40px',
  
      },
      offCanvasLink: {
        padding: '10px 0px ',
        
        cursor: 'pointer',
        
      },
      closeButton: {
        
        position: 'absolute',
        top: '60px',
        cursor: 'pointer',
      },
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black with transparency
        zIndex: 1,
        display: isWeb ? 'block' : 'none', // Show overlay when menu is open
      },
    };




    return (
        <nav className={`nav ${visible ? 'fade-in' : 'fade-out'}`}>
            <div className='menuIcon' onClick={toggleMenuWeb}><IoMenuOutline /></div>


{/* Off-Canvas Menu */}
<div style={styles.offCanvasMenu}>
            <div style={styles.closeButton} onClick={toggleMenuWeb}>
              X
            </div>
            <div style={{marginTop:'60px'}}>
            <div style={styles.offCanvasLink}><span>LOV ANGELS <MdOutlineArrowForwardIos /> </span> </div>
            <div style={styles.offCanvasLink}>LOV AGENCY <MdOutlineArrowForwardIos /></div>
            <div style={styles.offCanvasLink}>LOV EVENYS <MdOutlineArrowForwardIos /></div>
            <div style={styles.offCanvasLink}>CORPORATE CONCIERGE <MdOutlineArrowForwardIos /></div>
            <div style={{...styles.offCanvasLink ,whiteSpace:'nowrap'}} >HOSPITALITY CONSULTANCY <MdOutlineArrowForwardIos /></div>
            <div>
              <span>+62 877 5047 9353</span><br/>
              <span fontFamily=' Helvetica'>bookings@thelovangels.com</span><br/>
              <IoLogoInstagram /><FaTiktok /><BsWhatsapp /><GrYoutube /><FaLinkedinIn /><br/>
              <span style={{ ...styles.logoText, whiteSpace: 'nowrap' }}>LOV <span style={styles.logoHighlight}>ANGELS</span></span>
              </div>
            </div>
          </div>

          {/* Overlay */}
          <div style={styles.overlay} onClick={toggleMenuWeb} />



            <div className='logo'>
                <span className='logoText' style={{ whiteSpace: 'nowrap' }}>
                    LOV <span className='logoTextt'>ANGELS</span>
                </span>
            </div>

            {/* Desktop Navigation Links (Hide on Mobile) */}
            <ul className='desktopNav' style={{whiteSpace:'nowrap'}}>
                {['ABOUT', 'EXPERIENCES', 'TAILOR MADE TRAVEL', 'INQUIRE NOW'].map((link, index) => (
                    <div
                        key={index}
                        className='navLink'
                        onMouseEnter={() => openDropdown(index)}
                        onMouseLeave={closeDropdown}
                    >
                        <li>{link}</li>
                        {activeDropdown === index && (
                            <div className='dropdown'>
                                {getDropdownItems(index).map((item, idx) => (
                                    <div key={idx} className='dropdownItem'>{item}</div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </ul>

            {/* Hamburger icon */}
            <div className='mobileMenuIcon' onClick={toggleMenu}><Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} /></div>

            {/* Off-Canvas Menu */}
            <div className={`offCanvasMenu ${isMenuOpen ? 'open' : ''}`}>
            <div className='mobileMenuIcon' onClick={toggleMenu}><Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} /></div>
                <ul>
                    {['ABOUT', 'EXPERIENCES', 'TAILOR MADE TRAVEL', 'INQUIRE NOW'].map((link, index) => (
                        <li key={index} onClick={() => setIsMenuOpen(false)}>{link}</li>
                    ))}
                </ul>
                <div className="socialIcons">
                    <IoLogoInstagram />
                    <GrYoutube />
                    <BsWhatsapp />
                    <FaLinkedinIn />
                    {/* Add other social icons here */}
                </div>
            </div>
        </nav>
    );
};

// Function to return dropdown items based on the link index
const getDropdownItems = (index) => {
    const dropdowns = [
        ["LUXURY TRAVEL", "PRIVATE EVENTS", "LIFESTYLE MANAGEMENT", "GLOBAL MEMBERSHIP", "GET IN TOUCH"],
        ["TRAVEL CONCIERGE", "PRIVATE AVIATION", "DINING EXPERIENCES", "WELLNESS & BEAUTY", "PERSONAL SHOPPER"],
        ["THE TRAVEL PACKAGES", "THE TRAVEL PROCESS", "LOV EDITORIAL"],
        [] // No dropdown for INQUIRE NOW
    ];
    return dropdowns[index] || [];
};

export default NaviBar;
