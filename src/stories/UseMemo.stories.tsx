import React, {useMemo, useState} from "react";
import {Select, ItemType, SelectPropsType} from "../components/select/Select";

export default {
    title: 'useMemo',
    component: Select
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultB = 1

    let resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResult = tempResult * i;
        }
        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}

//-------------------------------------------------------------------------------

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users rendered')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemoExample = () => {
    console.log("HelpsToReactMemoExample")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);

    let filteredUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])


    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Users users={filteredUsers}/>
    </>
}

//-------------------------------------------------------------------------------

const CityList = (props: SelectPropsType) => {
    console.log("Select rendered")
    return <Select items={props.items} />
}

const CityListWithReactMemo = React.memo(CityList)

export const UseMemoHomeWork = () => {
    console.log('All component rendered')
    const [counter, setCounter] = useState(0)
    const [cities, setCities] = useState<ItemType[]>([
        {title: 'Minsk', value: 1, country: 1, citizensCount: 2},
        {title: 'Moscow', value: 2, country: 2, citizensCount: 10},
        {title: 'Kiev', value: 3, country: 3, citizensCount: 4},
        {title: 'Brest', value: 4, country: 1, citizensCount: 0.8},
        {title: 'Hrodno', value: 5, country: 1, citizensCount: 0.6},
        {title: 'Vitebsk', value: 6, country: 1, citizensCount: 0.7},
        {title: 'Saint-Petersburg', value: 7, country: 2, citizensCount: 5},
        {title: 'Rostov', value: 8, country: 2, citizensCount: 3},
        {title: 'Vladivostok', value: 9, country: 2, citizensCount: 2},
        {title: 'Kharkiv', value: 10, country: 3, citizensCount: 0.9},
        {title: 'Lviv', value: 11, country: 3, citizensCount: 1},
        {title: 'Zhitomir', value: 12, country: 3, citizensCount: 0.4},
    ])

    const citiesOfBelarus = useMemo( () => {
        let filteredCities = cities.filter(c => c.country === 1).map((c, i) => ({...c, value: i + 1}))
        console.log(filteredCities)
        return filteredCities
    }, [cities])
    const citiesWith_o_Letter = useMemo( () => {
        let filteredCities = cities.filter(c => c.title.toLowerCase().indexOf('o') > -1).map((c, i) => ({...c, value: i + 1}))
        console.log(filteredCities)
        return filteredCities
    }, [cities])
    const moreThen1mlnCitizens = useMemo( () => {
        let filteredCities = cities.filter(c => c.citizensCount ? c.citizensCount  >= 1 : "").map((c, i) => ({...c, value: i + 1}))
        console.log(filteredCities)
        return filteredCities
    }, [cities])

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>{counter}</button>
        <hr></hr>
        <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{margin: "40px"}}>
                {"All cities"}<CityListWithReactMemo items={cities}/>
            </div>
            <div style={{margin: "40px"}}>
                {"Belarusian cities"}<CityListWithReactMemo items={citiesOfBelarus}/>
            </div>
            <div style={{margin: "40px"}}>
                {"Cities with 'o' letter"}<CityListWithReactMemo items={citiesWith_o_Letter}/>
            </div>
            <div style={{margin: "40px"}}>
                {"Cities with more than 1 million of citizens"}<CityListWithReactMemo items={moreThen1mlnCitizens}/>
            </div>
        </div>
    </>
}