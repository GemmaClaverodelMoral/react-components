import React from 'react';
import './RoundedImage.css';

const RoundedImage = ({ borderRadius, width, height, imagePath }) => {

    return (
        <div className="rounded-image-container">
            <img 
                src={imagePath}
                alt="Corazon"
                className="rounded-image"
                style={{ 
                    borderRadius: `${borderRadius}px`,
                    width: width,
                    height: height 
                }} 
            />
        </div>
    );
};

export default RoundedImage;