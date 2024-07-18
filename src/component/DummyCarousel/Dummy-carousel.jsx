import React, { useEffect, useRef, useState } from 'react';
import carouselImages from '../dummy/images.json';

export default function DummyCarousel() {
    const [imageData, setImageData] = useState(0);
    let interval = useRef(null);
    const DataLength = carouselImages.length;

    useEffect(() => {
        setImage();

        return () => {
            clearInterval(interval.current);
        }
    }, []);

    function setImage() {
        interval.current = setInterval(handleNext, 1000);
    };

    function removeEvent() {
        clearInterval(interval.current);
    }

    function handleNext() {
        setImageData((prevImageData) => {
            if (prevImageData == DataLength - 1) {
                return 0;
            } else {
                return prevImageData + 1;
            }
        });
    }

    function handlePrev() {
        setImageData((prevImageData) => {
            if (prevImageData == 0) {
                return DataLength - 1;
            } else {
                return prevImageData - 1;
            }
        });
    }

    return (
        <div className='carousel__parent'>
            {carouselImages.length > 0 && imageData ? (
                <div className='carousel__parent-div'>
                    <div onClick={() => handlePrev()} id="left-button" >{"<"}</div>
                    <div id="image-render" >
                        <img onMouseEnter={() => removeEvent()}
                            onMouseLeave={() => setImage()}
                            className="img_render_tag"
                            src={carouselImages[imageData].thumbnailUrl}
                            alt={carouselImages[imageData].title}
                            key={carouselImages[imageData].id + "img"} />
                    </div>
                    <div onClick={() => handleNext()} id="right-button">{">"}</div>
                </div>) : ''}
        </div>

    );

}