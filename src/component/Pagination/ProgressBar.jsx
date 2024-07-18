import { useEffect, useRef, useState } from "react";

export default function ProgressBar() {

    const [status, setStatus] = useState(0);
    const interval = useRef(null);
    useEffect(() => {

        return () => {
            clearInterval(interval.current);
        }
    }, []);

    function toggleButton(){
        interval.current = setInterval(() => {
            setStatus((prevStatus) =>{
                console.log("interval",prevStatus);
                if(prevStatus >= 100){
                    clearInterval(interval.current);
                    setTimeout(() => {
                        setStatus(0);
                    }, 2000);
                    return prevStatus;                    
                }
             return prevStatus + 5;
        });
        }, 150);
    }

    return (
        <div className="progress-bar__parent">
            <button className="vutton" onClick={()=> toggleButton()}>Toggle</button>
            <div className="container">
                <div style={{transform : `translateX(${status-100}%)`}}
                 className="progress">
                </div>
            </div>
        </div>
    );
}