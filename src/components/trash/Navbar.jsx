import React, { useState } from 'react';
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import './Navbar.css';



const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // For toggling off-canvas
  const [hoverIndex, setHoverIndex] = useState(null); // Track hover for links
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is open
  const [hoverDropdownIndex, setHoverDropdownIndex] = useState(null); // Track hover for dropdown items
  const [dropdownTimeout, setDropdownTimeout] = useState(null); // Timeout for closing dropdown

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleDropdownMouseEnter = (index) => {
    clearTimeout(dropdownTimeout);
    setHoverDropdownIndex(index);
  };

  const handleDropdownMouseLeave = () => {
    setHoverDropdownIndex(null);
  };

  const openDropdown = (dropdownName) => {
    clearTimeout(dropdownTimeout); // Prevent closing if hovering again
    setActiveDropdown(dropdownName);
  };

  const closeDropdownAfterDelay = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 3000); // Close after 3 seconds
    setDropdownTimeout(timeout);
  };

  const cancelDropdownClose = () => {
    clearTimeout(dropdownTimeout);
  };

  const styles = {
    navContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      height: '67px',
      width:'100%',
      position:'fixed',
      zIndex: 2,
    },
    menuIcon: {
      flex: '0 1 88px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      
    },
    logo: {
      flex: '0 2 245px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      margin:'0px 5% '
    },
    logoText: {
      fontSize: '24px',
      fontWeight: '1000',
      display: 'inline',
    },
    logoHighlight: {
      color: 'white',
      fontWeight: 'normal',
      display: 'inline',
    },
    navLinks: {
      backgroundColor: 'black',
      display: 'flex',
      flex: 3,
      position: 'relative',
      marginRight:'4%'
    },
    navLink: (index) => ({
      flex: index + 1,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      width: 'auto',
      backgroundImage: hoverIndex === index || activeDropdown === index
        ? 'linear-gradient(to bottom, white 6%, transparent 6%)'
        : 'none',
      backgroundColor: 'black',
      transition: 'background-image 0.3s ease',
    }),
    dropdown: (index) => {
      switch (index) {
        case 0: // First dropdown
          return {
            position: 'absolute',
            top: '67px',  // Align under the nav bar
            left: '0%',  // Place under the first nav link
            backgroundColor: 'black',
            
            width: 'auto',
            zIndex: 2,
          };
        case 1: // Second dropdown
          return {
            position: 'absolute',
            top: '67px',  // Align under the nav bar
            left: '130px',  // Slightly right under the second nav link
            backgroundColor: 'black',
            width: 'auto',
            zIndex: 2,
          };
        case 2: // Third dropdown
          return {
            position: 'absolute',
            top: '67px',  // Align under the nav bar
            left: '327px',  // Right under the third nav link
            backgroundColor: 'black',
            width: 'auto',
            zIndex: 2,
            
          };
        default:
          return {};  // Default empty style if index doesn't match
      }
    },
    dropdownItem: (index) => ({
      padding: '10px 20px',
      color: 'white',
      cursor: 'pointer',
      backgroundImage: hoverDropdownIndex === index
        ? 'linear-gradient(to bottom, white 6%, transparent 6%)'
        : 'none',
      transition: 'background-image 0.1s ease',
    }),
    offCanvasMenu: {
      position: 'fixed',
      top: 0,
      left: isMobile ? 0 : '-100%',
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
      display: isMobile ? 'block' : 'none', // Show overlay when menu is open
    },
  };

  return (
    <>
      <div style={styles.navContainer}>
        <div style={styles.menuIcon} onClick={toggleMenu}>
          <IoMenuOutline size={50} />
        </div>
        <div style={styles.logo}>
          <span style={{ ...styles.logoText, whiteSpace: 'nowrap' }}>LOV <span style={styles.logoHighlight}>ANGELS</span></span>
        </div>
        <div style={{ ...styles.navLinks }}>
          <div
            style={styles.navLink(0)}
            onMouseEnter={() => openDropdown(0)}
            onMouseLeave={closeDropdownAfterDelay}
          >
            <div style={{marginLeft:'5px', marginRight:'75px' }}><span>ABOUT</span></div>
          </div>
          {activeDropdown === 0 && (
            <div
              style={styles.dropdown(0)}
              onMouseEnter={cancelDropdownClose}
              onMouseLeave={closeDropdownAfterDelay}
            >
              <div
                style={styles.dropdownItem(0)}
                onMouseEnter={() => handleDropdownMouseEnter(0)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                LUXURY TRAVEL
              </div>
              <div
                style={styles.dropdownItem(1)}
                onMouseEnter={() => handleDropdownMouseEnter(1)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                PRIVATE EVENTS
              </div>
              <div
                style={styles.dropdownItem(2)}
                onMouseEnter={() => handleDropdownMouseEnter(2)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                LIFESTYLE MANAGEMENT
              </div>
              <div
                style={styles.dropdownItem(3)}
                onMouseEnter={() => handleDropdownMouseEnter(3)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                GLOBAL MEMBERSHIP
              </div>
              <div
                style={styles.dropdownItem(4)}
                onMouseEnter={() => handleDropdownMouseEnter(4)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                GET IN TOUCH
              </div>
            </div>
          )}

          {/* Off-Canvas Menu */}
          <div style={styles.offCanvasMenu}>
            <div style={styles.closeButton} onClick={toggleMenu}>
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
          <div style={styles.overlay} onClick={toggleMenu} />

          <div
            style={styles.navLink(1)}
            onMouseEnter={() => openDropdown(1)}
            onMouseLeave={closeDropdownAfterDelay}
          >
            <span style={{marginLeft:'5px', marginRight:'75px' }}>EXPERIENCES</span>

          </div>
          {activeDropdown === 1 && (
            <div
              style={styles.dropdown(1)}
              onMouseEnter={cancelDropdownClose}
              onMouseLeave={closeDropdownAfterDelay}
            >
              <div
                style={styles.dropdownItem(0)}
                onMouseEnter={() => handleDropdownMouseEnter(0)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                TRAVEL CONCIERGE
              </div>
              <div
                style={styles.dropdownItem(1)}
                onMouseEnter={() => handleDropdownMouseEnter(1)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                PRIVATE AVIATION
              </div>
              <div
                style={styles.dropdownItem(2)}
                onMouseEnter={() => handleDropdownMouseEnter(2)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                DINING EXPERIENCES
              </div>
              <div
                style={styles.dropdownItem(3)}
                onMouseEnter={() => handleDropdownMouseEnter(3)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                WELLNESS & BEAUTY
              </div>
              <div
                style={styles.dropdownItem(4)}
                onMouseEnter={() => handleDropdownMouseEnter(4)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                PERSONAL SHOPPER
              </div>
            </div>
          )}
          {/* TAILOR MADE TRAVEL */}
        <div
          style={styles.navLink(2)}
          onMouseEnter={() => openDropdown(2)}
          onMouseLeave={closeDropdownAfterDelay}
        >
         <span style={{whiteSpace:'nowrap', marginLeft:'5px', marginRight:'70px' }}> TAILOR MADE TRAVEL</span>
        </div>
        {activeDropdown === 2 && (
          <div
            style={styles.dropdown(2)} // Pass the index to the dropdown style
            onMouseEnter={cancelDropdownClose}
            onMouseLeave={closeDropdownAfterDelay}
          >
            <div
              style={styles.dropdownItem(0)}
              onMouseEnter={() => handleDropdownMouseEnter(0)}
              onMouseLeave={handleDropdownMouseLeave}
            >
              THE TRAVEL PACKAGES
            </div>
            <div
              style={styles.dropdownItem(1)}
              onMouseEnter={() => handleDropdownMouseEnter(1)}
              onMouseLeave={handleDropdownMouseLeave}
            >
              THE TRAVEL PROCESS
            </div>
            <div
              style={styles.dropdownItem(2)}
              onMouseEnter={() => handleDropdownMouseEnter(2)}
              onMouseLeave={handleDropdownMouseLeave}
            >
              LOV EDITORIAL
            </div>
          </div>
        )}

        <div
          style={styles.navLink(3)}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <span style={{whiteSpace:'nowrap',marginLeft:'5px'}}>INQUIRE NOW</span>
        </div>
      
        </div>
      </div>
    </>
  );
};

export default Navbar;
