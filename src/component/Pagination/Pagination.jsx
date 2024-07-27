import { useEffect, useRef } from "react";

export default function Pagination({ pageNumber, setPageNumber }) {
    let page = useRef(null);
    let list = useRef([]);
    useEffect(() => {
        page.current = {
            prev: (pageNumber - 3 > 0) ? pageNumber - 3 : 1,
            next: pageNumber + 3
        }
        list.current = [];
        for (let i = Math.min(page.current.prev, pageNumber); i <= page.current.next; i++) {
            list.current.push(i);
        }
        console.log(list.current);
    }, [pageNumber]);

    function next() {
        setPageNumber((prevPage) => prevPage + 1);
    }

    function prev() {
        setPageNumber((prevPage) => prevPage - 1);
    }
    return (
        <div className="pagination-container">
            <div onClick={prev}>{"<"}</div>
                    { list.current ? list.current.map(data => <span onClick={() => setPageNumber(data)} key={data} className={data === pageNumber ? 'active' : ''}>{data}</span>) : ''}
            <div onClick={next}>{">"}</div>
        </div>
    )
}