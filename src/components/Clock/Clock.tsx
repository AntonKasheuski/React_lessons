import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'

const get2digitsString = (time: number) => time < 10 ? "0" + time : time;

type PropsType = {
    analogMode: boolean
}

const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
                setDate(new Date())
            },
            1000)

        return () => {
            clearInterval(intervalID)
        }
    }, []);

    const hoursStyle = {
        transform: `rotate(${(date.getHours() * 30 + date.getMinutes() / 10) + 90}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${(date.getMinutes() * 6 + date.getSeconds() / 10) + 90}deg)`
    };
    const secondsStyle = {
        transform: `rotate(${(date.getSeconds() * 6) + 90}deg)`
    };

    return <>
        {props.analogMode
            ? <div className={s.body}>
                <div className={s.clock}>
                    <div className={s.outerClockFace}>
                        <div className={`${s.hand} ${s.hourHand}`} style={hoursStyle}></div>
                        <div className={`${s.hand} ${s.minHand}`} style={minutesStyle}></div>
                        <div className={`${s.hand} ${s.secondHand}`} style={secondsStyle}></div>
                    </div>
                </div>
            </div>
            : <div>
                <span>{get2digitsString(date.getHours())}</span>
                :
                <span>{get2digitsString(date.getMinutes())}</span>
                :
                <span>{get2digitsString(date.getSeconds())}</span>
            </div>
        }
    </>;
};

export default Clock;