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

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log('SetTimeoutExample')

    useEffect(() => {
        console.log('setTimeout')
        const timeoutId = setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
        return () => {
            clearTimeout(timeoutId)
        }
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

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log('SetIntervalExample')

    useEffect(() => {
        const intervalId = setInterval(() => {
            //console.log('counter ' + counter)
            setCounter(a => a + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        <div>
            fake: {fake}
            {/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
        </div>
        <div>
            counter: {counter}
            {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
        </div>
    </>
}

export const ClockExample = () => {
    let date = new Date()

    const [hours, setHours] = useState(String(date.getHours()))
    const [minutes, setMinutes] = useState(String(date.getMinutes()))
    const [seconds, setSeconds] = useState(String(date.getSeconds()))

    useEffect(() => {
        setInterval(() => {
            let newDate = new Date()
            setSeconds(String(newDate.getSeconds()).padStart(2, '0'))
            setMinutes(String(newDate.getMinutes()).padStart(2, '0'))
            setHours(String(newDate.getHours()).padStart(2, '0'))
        }, 1000)
    }, [])

    return <div>
        {hours}:{minutes}:{seconds}
    </div>
}