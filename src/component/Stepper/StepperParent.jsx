import Stepper from "./Stepper"
import './Stepper.css'

export default function StepperParent() {
    const StepperData = [
        {
            header : 'Cme of the indonesia medical association',
            body : 'cardiac arrest Cme'
        },
        {
            header : 'Webinar of the Indian medical association',
            body : 'cardiac arrest webinar'
        },
        {
            header : 'Survey of the Taiwan medical association',
            body : 'cardiac arrest Survey'
        },
        {
            header : 'Doctalks of the Japan medical association',
            body : 'cardiac arrest Doctalks'
        }
    ]
    return (
        <div className="stepperParent">
            {
                StepperData ? 
                StepperData.map((data,index) => {
                    return (
                        <Stepper
                        key={index+data.body} header={data.header} body={data.body} stepps={index}></Stepper>
                    )
                })  : ''
            }
        </div>
    )
}