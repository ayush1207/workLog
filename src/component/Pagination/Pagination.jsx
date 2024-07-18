export default function Pagination({pageNumber,setPageNumber}){

    function next(){
        setPageNumber((prevPage)=>prevPage+1);
    }

    function prev(){
        setPageNumber((prevPage)=>prevPage-1);
    }
    return (
        <divc className="pagination-container">
            <div onClick={prev}>{"<"}</div>
            <div>{pageNumber}</div>
            <div onClick={next}>{">"}</div>
        </divc>
    )
}