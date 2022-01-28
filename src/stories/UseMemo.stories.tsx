import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
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

    let filteredUsers =  useMemo( () => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])


    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}
        <Users users={filteredUsers}/>
    </>
}