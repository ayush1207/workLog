import { useEffect } from "react";

export default function Pagination({pageNumber,setPageNumber}){
    let page;
    let List = [];
    useEffect(()=>{
        page = {
            prev : (pageNumber - 3  > 0) ? pageNumber - 3 :  1,
            next : pageNumber + 3
        }

        for(let i=Math.min(page.prev,pageNumber);i<=page.next;i++){
            List.push(i);
        }
    },[pageNumber]); 

    function next(){
        setPageNumber((prevPage)=>prevPage+1);
    }

    function prev(){
        setPageNumber((prevPage)=>prevPage-1);
    }
    return (
        <divc className="pagination-container">
            <div onClick={prev}>{"<"}</div>
            {
                List.forEach(data => {
                    return <div className={data == pageNumber ? 'active' : ''}>{data}</div>
                })
            }
            <div onClick={next}>{">"}</div>
        </divc>
    )
}