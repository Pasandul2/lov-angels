import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import D1 from '../images/D1.png';
import D2 from '../images/D2.png';
import D3 from '../images/D3.png';
import D4 from '../images/D4.png';
import D5 from '../images/D5.png';
import './MoveImage.css';

// Keyframe animations (unchanged)
const moveLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const moveRight = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
`;

// Styled components (unchanged)
const ImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const ImageChainLeft = styled.div`
  display: flex;
  animation: ${moveLeft} 20s linear infinite;
  width: calc(100% * 2); /* Twice the width to ensure smooth loop */
`;

const ImageChainRight = styled.div`
  display: flex;
  animation: ${moveRight} 20s linear infinite;
  width: calc(100% * 2); /* Twice the width to ensure smooth loop */
  flex-direction: row-reverse; /* Reverse the direction of images for rightward scrolling effect */
`;

const Image = styled.img`
  width: 20%; /* Each image takes up 20% of the wrapper's width (5 images) */
  flex-shrink: 0;
`;

// MoveImage component
const MoveImage = () => {
  const moveContainerRef = useRef(null);

  const handleMouseWheel = (event) => {
    if (moveContainerRef.current) {
      moveContainerRef.current.scrollLeft += event.deltaY; // Scroll left/right based on mouse wheel movement
      event.preventDefault(); // Prevent default scrolling
    }
  };

  return (
    <div className='AImageMove' onWheel={handleMouseWheel} ref={moveContainerRef}>
      <div className='ImageMove'>
        <ImageWrapper className='ImageWrapper'>
          <ImageChainLeft>
            {/* Images */}
            <Image style={{ padding: '10px' }} src={D1} alt="Image 1" />
            <Image style={{ padding: '10px' }} src={D2} alt="Image 2" />
            <Image style={{ padding: '10px' }} src={D3} alt="Image 3" />
            <Image style={{ padding: '10px' }} src={D4} alt="Image 4" />
            <Image style={{ padding: '10px' }} src={D5} alt="Image 5" />
            {/* Duplicate images for smooth looping */}
            <Image style={{ padding: '10px' }} src={D1} alt="Image 1" />
            <Image style={{ padding: '10px' }} src={D2} alt="Image 2" />
            <Image style={{ padding: '10px' }} src={D3} alt="Image 3" />
            <Image style={{ padding: '10px' }} src={D4} alt="Image 4" />
            <Image style={{ padding: '10px' }} src={D5} alt="Image 5" />
          </ImageChainLeft>
        </ImageWrapper>

        <ImageWrapper>
          <ImageChainRight>
            {/* Images */}
            <Image style={{ padding: '10px' }} src={D1} alt="Image 1" />
            <Image style={{ padding: '10px' }} src={D2} alt="Image 2" />
            <Image style={{ padding: '10px' }} src={D3} alt="Image 3" />
            <Image style={{ padding: '10px' }} src={D4} alt="Image 4" />
            <Image style={{ padding: '10px' }} src={D5} alt="Image 5" />
            {/* Duplicate images for smooth looping */}
            <Image style={{ padding: '10px' }} src={D1} alt="Image 1" />
            <Image style={{ padding: '10px' }} src={D2} alt="Image 2" />
            <Image style={{ padding: '10px' }} src={D3} alt="Image 3" />
            <Image style={{ padding: '10px' }} src={D4} alt="Image 4" />
            <Image style={{ padding: '10px' }} src={D5} alt="Image 5" />
          </ImageChainRight>
        </ImageWrapper>

        <ImageWrapper>
          <ImageChainLeft>
            {/* Images */}
            <Image style={{ padding: '10px' }} src={D1} alt="Image 1" />
            <Image style={{ padding: '10px' }} src={D2} alt="Image 2" />
            <Image style={{ padding: '10px' }} src={D3} alt="Image 3" />
            <Image style={{ padding: '10px' }} src={D4} alt="Image 4" />
            <Image style={{ padding: '10px' }} src={D5} alt="Image 5" />
            {/* Duplicate images for smooth looping */}
            <Image style={{ padding: '10px' }} src={D1} alt="Image 1" />
            <Image style={{ padding: '10px' }} src={D2} alt="Image 2" />
            <Image style={{ padding: '10px' }} src={D3} alt="Image 3" />
            <Image style={{ padding: '10px' }} src={D4} alt="Image 4" />
            <Image style={{ padding: '10px' }} src={D5} alt="Image 5" />
          </ImageChainLeft>
        </ImageWrapper>
      </div>
    </div>
  );
};

export default MoveImage;
