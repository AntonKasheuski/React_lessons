import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

//import { Button } from './Button';

export default {
    title: 'Example/Button',
    //component: Button,
};

export const TrackValueOfUncontrolledInput = () => {
    const [inputValue, setInputValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    };
    return (
        <><input onChange={onChangeHandler}/> - {inputValue}</>
    )
}

export const GetValueOfUncontrolledInputByPressButton = () => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickHandler = () => {
        const text = inputRef.current as HTMLInputElement;
        setInputValue(text.value)
    };
    return (
        <><input ref={inputRef}/><button onClick={onClickHandler}>add</button> - actual value: {inputValue} </>
    )
}

export const ControlledInput = () => {
    const [inputValue, setInputValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    };
    return (
        <><input value={inputValue} onChange={onChangeHandler}/> - {inputValue}</>
    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    };
    return (
        <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    };
    return (<select value={parentValue} onChange={onChangeHandler}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    )
}