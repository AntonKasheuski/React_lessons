import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";


function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [on, setOn] = useState<boolean>(false);

    return (
        <div className={"App"}>
            <h3>Uncontrolled Components</h3>
            <UncontrolledOnOff/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating />
            <hr/>
            <h3>Controlled Components</h3>
            <OnOff
                on={on}
                setOn={setOn}
            />
            <Accordion
                titleValue={"Menu"}
                accordionCollapsed={accordionCollapsed}
                setAccordionCollapsed={setAccordionCollapsed}
            />
            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />
        </div>
    );
}

/*type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{ props.title }</h1>
}*/

export default App;