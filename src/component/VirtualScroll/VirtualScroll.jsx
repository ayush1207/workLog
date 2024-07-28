import './VirtualScroll.css';
import VirtualScrollChild from './VirtualScrollChild';

export default function VirtualScroll() {
    const listData = Array.from({length : 1000000}, (_,index)=> index+1);
    return (
        <div>
            <VirtualScrollChild 
                listData={listData} 
                parentHeight={400}
                childHeight={40}
                width={300}
            >
            </VirtualScrollChild>
        </div>
    );
}