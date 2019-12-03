import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './component';
import reduce from './reducer';

const store = createStore(reduce);
const ele = document.getElementById('root');

const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    ele
)

render(); //初始化的时候更新一次

store.subscribe(render); //通过store.subscribe()进行监听，当store变化的时候，执行render函数