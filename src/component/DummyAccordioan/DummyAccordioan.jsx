import AccordCard from "./AccordCard";
import "./Accordioan.css";
const dataJson = [
    {
        "ques": "What is you Name?",
        "ans": "My name is Ayush KUmar SIngh"
    },
    {
        "ques": "How are you doing today ",
        "ans": "I am doin well taoday"
    }
];
export default function DummyAccordioan() {

    
    return (
        <div className="accordian-parent">
            {
                dataJson.map((qna, index) =>
                    <AccordCard key={index} quesAns={qna}></AccordCard>
                    )
            }

        </div>
    );
}