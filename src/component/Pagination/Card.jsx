export default function Card({picData}){
    return (
        <span>
            <img src={picData.download_url} alt={picData.author} />
            {/* <img src="https://picsum.photos/id" alt="asdf" /> */}
        </span>
    )
} 