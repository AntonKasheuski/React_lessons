import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                collapsed={props.collapsed}
                onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean,
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.onChange}
        >---{props.title}---</h3>
    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return <ul>
        { props.items.map( (i, index) => <li key={index} onClick={() => props.onClick(i.value)}>{i.title}</li>) }
    </ul>
}

export default Accordion;