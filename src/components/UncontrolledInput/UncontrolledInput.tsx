import React, {useRef, useState} from 'react';

export const UncontrolledInput = () => {

    const [value, setValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return (
        <div>
            <input ref={inputRef}/><button onClick={onClickHandler}>save</button> - {value}
            </div>
        );
};