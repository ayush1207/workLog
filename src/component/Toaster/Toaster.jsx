import { useRef, useState } from "react";
import "./Toast.css";

export default function Toaster() {

    const [toasts, setToasts] = useState([]);
    const timerRef = useRef([]);

    function close(id) {
        clearTimeout(timerRef.current[id]);
        delete timerRef.current[id];
        setToasts((prevToasts) => {
            const val = prevToasts.filter(data => {
                return data.id !== id
            });
            return val;
        });
    }

    function hide(id) {
        timerRef.current[id] = setTimeout(() => close(id),5000);
    }

    function trigger(type, message) {
        const id = new Date().getTime();
        setToasts((prevToast) => {
            let newData = [...prevToast, { id, type, message }];
            return newData;
        });
        hide(id);
    }
    return (
        <div className="toast-parent">
            <div className="toast-container">
                {toasts && toasts.map(({ id, message, type }) => {
                    return (
                        <div key={id} className={type}>
                            <span>{message}</span>
                            <span className="cursor-pointer text-end" onClick={()=> close(id)}>x</span>
                        </div>
                    )
                })}
            </div>
            <div className="btn-container">
                <div className="btn-div">
                    <button className="m-2" onClick={() => trigger('success', 'Sucessfull Toast')}>Success Toast</button>
                    <button className="m-2" onClick={() => trigger('error', 'Error Toast')}>Error Toast</button>
                    <button className="m-2" onClick={() => trigger('info', 'Info Toast')}>Info Toast</button>
                </div>
            </div>
        </div>
    );
}