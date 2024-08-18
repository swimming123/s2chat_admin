import React, { useEffect, useState } from 'react'
// 요점 : handle Click 이벤트가 발생할 때 로그르 보면 전, 후에 state값이 반영이 안됨을 확인하고
// 한꺼번에 랜더링 되는 브라우저의 증가값을 확ㅇ니한다.
const Ex3BatchUpdateExample = () => {
    const [state1, setState1] = useState(0);
    const [state2, setState2] = useState(0);
    // met
    // handleClick 함수에서 setState1과 setState2를 호출하지만, 호출 즉시 상태가 업데이트 되지 않는다.
    const handleClick = () => {
        // setState1과 setState2를 호출하여 상태를 각각 1씩 증가
        console.log('Before setState1 : ', state1);
        setState1(state1 + 1);
        console.log('after setState : ', state1);

        console.log('Before setState1 : ', state2);
        setState2(state2 + 1);
        console.log('after setState : ', state2);
    }
    // 컴포넌트가 랜더링 될 때마다 console.log('Rendering...')호출
    console.log('Rendering...')

    // uef : useEffect(() => {}, []);
    // 랜더링이 발생한 후 useEffect 훅이 호출되고, 이때 업데이트된 상태값 반영
    // useEffect 훅을 사용하여 상태가 실제로 업데이트 된 시점을 확인할 수 있다.
    // useEffect(() => {}, [ 감지할 값 자리 | 여기가 비어있으면 초기에만 활성화된다. => 리스트 같은 페이지에서 axios로 불러올때? ]);
    useEffect(() => {
        console.log("state1 값 업데이트", state1);
    }, [state1]);
    useEffect(() => {
        console.log("state2 값 업데이트",state2);
    }, [state2]);
  return (
    <div>
        <h1>Ex3BatchUpdateExample</h1>
        <p>State 1 : { state1 }</p>
        <p>State 2 : { state2 }</p>
        <button onClick={handleClick}>Update States</button>
    </div>
    // Rendering... // 첫페이지
    // Ex3BatchUpdateExample.tsx:27 state1 값 업데이트 0
    // Ex3BatchUpdateExample.tsx:30 state2 값 업데이트 0
    // Ex3BatchUpdateExample.tsx:11 Before setState1 :  0
    // Ex3BatchUpdateExample.tsx:13 after setState :  0
    // Ex3BatchUpdateExample.tsx:15 Before setState1 :  0
    // Ex3BatchUpdateExample.tsx:17 after setState :  0
    
    // 버튼 1번
    // Ex3BatchUpdateExample.tsx:20 Rendering... 
    // Ex3BatchUpdateExample.tsx:27 state1 값 업데이트 1
    // Ex3BatchUpdateExample.tsx:30 state2 값 업데이트 1

    // 버튼 2번
    // Before setState1 :  1
    // Ex3BatchUpdateExample.tsx:13 after setState :  1
    // Ex3BatchUpdateExample.tsx:15 Before setState1 :  1
    // Ex3BatchUpdateExample.tsx:17 after setState :  1
    // Ex3BatchUpdateExample.tsx:20 Rendering...
    // Ex3BatchUpdateExample.tsx:27 state1 값 업데이트 2
    // Ex3BatchUpdateExample.tsx:30 state2 값 업데이트 2    
  )
}

export default Ex3BatchUpdateExample