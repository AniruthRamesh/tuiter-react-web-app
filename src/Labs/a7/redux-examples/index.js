import React from "react"
import hello from "./reducers/hello"
//import { createStore } from "redux"
import { Provider } from "react-redux"
import HelloReduxExample from "./hello-world-redux-example.js"
import todos from "./reducers/todos-reducer"
import Todos from "./todos-component"
import {configureStore} from '@reduxjs/toolkit'

//const store = createStore(hello)
const store = configureStore({
    reducer: {hello, todos}
   });
   

const ReduxExamples = ()=>{
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExample/>
            </div>
        </Provider>
        
    )
}

export default ReduxExamples