import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";


export function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className={"App"}>
            <h3>Uncontrolled Components</h3>
            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating />
            <UncontrolledInput />
            <hr/>
            <h3>Controlled Components</h3>
            <OnOff
                on={switchOn}
                onChange={setSwitchOn}
            />
            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
            />
            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />
        </div>
    );
}