import React from "react";

type PropsType = {
    on: boolean,
    onChange: (on: boolean) => void
}

export function OnOff(props: PropsType) {

    const onStyle = {
        width: '60px',
        height: '20px',
        border: '2px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white',
    }
    const offStyle = {
        width: '60px',
        height: '20px',
        border: '2px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: !props.on ? 'red' : 'white',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '7px',
        border: '2px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={ () => { props.onChange(true) } }>On</div>
            <div style={offStyle} onClick={ () => { props.onChange(false) } }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}