import React, { useState } from 'react'
/*
버튼을 클릭하면 랜더링은 한번만 일어난다.
setState는 호출 즉시 랜더링을 하는 것이 아니라
동시에 변경되는 state들을 전부 누적한 후에 한꺼번에 랜더링이 일어남
*/
const Child =({state, action}:any) => {
  return <button>{state}</button>
}
const Ex2FlowReactStateDemo = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  // 함수 정의
  const increment = () => {
    setNumber1((prev) => prev + 2);
    setNumber2((prev) => prev + 3);
  }
  return (
    <div>
      <p>Ex2FlowReactStateDemo</p>
      {/* Child :내부 컴포넌트 */}
      <Child state={number1} />
      <Child state={number2} />
      <button onClick={increment}> Change </button>
    </div>
    
  )
}

export default Ex2FlowReactStateDemo