import {reducer,StateType} from "./reducer";

let state1: StateType
let state2: StateType
beforeEach( () => {
    state1 = {collapsed: true}
    state2 = {collapsed: false}
})

test('reducer should change value to opposite value', () => {
    //data
    const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"
    const action = {type: TOGGLE_CONSTANT}

    //action
    const result1 = reducer(state1, action).collapsed
    const result2 = reducer(state2, action).collapsed

    //expectation
    expect(result1).toBe(state2.collapsed)
    expect(result2).toBe(state1.collapsed)
})

test('reducer should throw error Bad action type', () => {
    //data
    const TOGGLE_CONSTANT = "INRENVEWVNLRSBVLSB"
    const action = {type: TOGGLE_CONSTANT}

    //action + expectation
    expect( () => {reducer(state1, action)} ).toThrowError()
})