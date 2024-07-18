import { useEffect, useState } from "react";

export default function InfiniteScroll() {

    const [imgData, setImageData] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    let lastImage =null;
    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=4`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setImageData((prevData) => {
                    return [...prevData, ...arr];
                });
            })
            .catch((err) => {
                console.log("error", err);
            })

            const observer = new IntersectionObserver((param)=>{
                if(param[0].isIntersecting){
                    observer.unobserve(elem);
                    updatePagoNo();
                }
            })

            const elem = document.querySelector('.image_view:last-child');
            if(!elem){
                return;
            }
            observer.observe(elem);

        // window.addEventListener('scroll',checkIfScrolllable);
        // return ()=>{
        //     window.removeEventListener('scroll',checkIfScrolllable);
        // }
    }, [pageNo]);

    function updatePagoNo() {
        setPageNo((prevPage) => {
            return prevPage + 1;
        })
    }

    function checkIfScrolllable(){
        const {scrollTop, clientHeight , scrollHeight } = document.documentElement;
        if(scrollTop+ clientHeight >= scrollHeight-30){
            updatePagoNo();
        }
    }

    return (
        <div className="infiniteScroll__parent">
            <div className="container" >
                {imgData && imgData.length > 0 ?
                    imgData.map((data, index) => {
                        return (
                            <img
                            className="image_view" 
                            key={index} 
                            src={data.download_url} 
                            alt="" 
                            onMouseEnter={() => { updatePagoNo() }} />
                        )
                    }) : ''
                }
            </div>
        </div>
    );
}