import { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import "./Pagination.css";

export default function Posts(){

    const pageSize =5 ;
    const [pageNumber,setpageNumber] = useState(1);
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetchImageData();
    },[pageNumber]);

    async function fetchImageData(){
        let url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${pageSize}`
        const data = await (await fetch(url)).json();
        setData(()=>data);
    }

    return (
        <div className="Pagination-parent">
            {
                data ? 
                data.map((post,index)=>{
                    return <Card key={index} picData={post}></Card>
                }) : ""
            }
            <Pagination pageNumber={pageNumber} setPageNumber={setpageNumber}></Pagination>
        </div>
    );
}