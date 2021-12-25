import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType,
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log("UncontrolledRating rendering")
        return (
            <div>
                <Star selected={props.value > 0} value={1} onClick={props.onClick} />
                <Star selected={props.value > 1} value={2} onClick={props.onClick} />
                <Star selected={props.value > 2} value={3} onClick={props.onClick} />
                <Star selected={props.value > 3} value={4} onClick={props.onClick} />
                <Star selected={props.value > 4} value={5} onClick={props.onClick} />
            </div>
        );
    }

type StarPropsType = {
    selected: boolean,
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={() => {props.onClick(props.value)}}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}