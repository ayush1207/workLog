import { useState } from "react";

export default function AccordCard({ quesAns }) {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h3>
                {quesAns.ques}
                <span onClick={() => setShow(()=> !show)}>
                    {show ? "-" : "+"}</span>
            </h3>
            <p>
                {show ? quesAns.ans : ""}
            </p>
        </div>
    )
}