import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect after every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect after first render')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect after first render end every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        <div>
            {fake}
            <button onClick={() => setFake(fake + 1)}>fake +</button>
        </div>
        <div>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
        </div>

    </>
}