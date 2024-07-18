import { useEffect, useRef, useState } from "react";

export default function StarRating() {

    let starLength = 5;
    let starArray = useRef([]);

    const [selectedStar, setSelectedStar] = useState();
    const [hoverOn, setHoverOn] = useState(-1);


    useEffect(() => {
        starArray.current = (new Array(starLength).fill(0));
    }, []);

    function setData(index) {
        setSelectedStar(() => { return index })
    }

    return (
        <div className="star-rating__parent ">
            <div className="container">
                {(new Array(starLength).fill(0)).map((key, index) => {
                    return (
                        <span
                            key={index}
                            className={(hoverOn ==-1 && index <= selectedStar) || index <= hoverOn   ? 'golden-color' : ''}
                            onClick={() => setSelectedStar(index)}
                            onMouseEnter={() => setHoverOn(index)}
                            onMouseLeave={() => setHoverOn(-1)}
                            >
                            &#9733;
                        </span>)
                })}
            </div>
        </div>
    );
}