import React from "react";
import Clock from "./Clock";

export default {
    title: 'Clock',
    component: Clock,
}

export const AnalogClockExample = () => {
    return <Clock analogMode={true}/>
}

export const DigitalClockExample = () => {
    return <Clock analogMode={false}/>
}
