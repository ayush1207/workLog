import { useState } from "react";

export default function VirtualScrollChild({ listData, parentHeight, childHeight, width }) {
    const [index, setIndex] = useState([0, Math.floor(parentHeight / childHeight)]);
    const list = listData.slice(index[0], index[1] + 1);
    console.log(listData)

    function handleScroll(e){
        const {scrollTop} = e.target;
        const newStartIndex = Math.floor(scrollTop/childHeight);
        const newEndIndex = newStartIndex +Math.floor(parentHeight/childHeight)
        setIndex([newStartIndex,newEndIndex]);
    }
    return (
        <div onScroll={handleScroll} className="virtualScrollContainer" style={{ width, height: parentHeight, background: 'grey', overflow: 'auto' }}>
            <div style={{height:(listData.length*childHeight),overflow:'auto',
                position : 'relative'
            }}>
                {
                    list.map((data, idx) => {
                        return (
                            <div 
                                style={{ 
                                height: childHeight, 
                                background: 'coral',
                                marginBlock: '4px' ,
                                position : 'absolute',
                                top : (index[0] + idx)*childHeight,
                                width : '100%'
                            }}
                            >data {data}</div>
                        )
                    })
                }
            </div>
        </div>
    )
} 