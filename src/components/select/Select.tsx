import React, {useState, KeyboardEvent} from "react";
import s from './Select.module.css';

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [headerTitleValue, setHeaderTitleValue] = useState(1)
    const [collapsedValue, setCollapsedValue] = useState(true)
    const [hoveredItem, setHoveredItem] = useState(headerTitleValue)

    const headerTitle = props.items[headerTitleValue-1].title

    const onHeaderClickCallback = () => {
        setCollapsedValue(!collapsedValue)
    }
    const onItemClickCallback = (value: number) => {
        setHeaderTitleValue(value)
        setCollapsedValue(!collapsedValue)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLSpanElement>) => {

        for (let i=hoveredItem;i<=props.items.length;i++) {
            if (e.key === "ArrowUp" && i !== 1) {
                setHoveredItem(props.items[i-2].value)
                console.log("arrowup")
                break
            }
            if (e.key === "ArrowDown" && i !== props.items.length) {
                setHoveredItem(props.items[i].value)
                console.log("arrowdown")
                break
            }
        }
        if (collapsedValue && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
            setCollapsedValue(!collapsedValue)
        }
        if (!collapsedValue && e.key === "Enter") {
            setHeaderTitleValue(hoveredItem)
            setCollapsedValue(!collapsedValue)
        }
        if (!collapsedValue && e.key === "Escape") {
            setCollapsedValue(!collapsedValue)
        }
    }

    return (
        <>
            <select>
                <option value="">Minsk</option>
                <option value="">Vilnius</option>
                <option value="">Riga</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
                <option value="">Warsaw</option>
            </select>
            <div onKeyUp={onKeyPressCallback} tabIndex={0}>
                <span className={s.mainStyle}
                      onClick={onHeaderClickCallback}>
                    {headerTitle}
                </span>
                {!collapsedValue && (
                    <div className={s.itemsStyle}>
                        {props.items.map(i => <div
                            key={i.value}
                            className={s.item + " " + (i.value === hoveredItem ? s.selected : "")}
                            onClick={() => onItemClickCallback(i.value)}
                            onMouseEnter={() => setHoveredItem(i.value)}
                        >{i.title}
                        </div>)}
                    </div>
                )}
            </div>
        </>
    )
}