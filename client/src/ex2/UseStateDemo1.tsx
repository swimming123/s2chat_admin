import React, { useState } from 'react'

const UseStateDemo1 = () => {
    const n = [1, 2, 3];
    console.log(typeof n); // object
    console.log(n);
    // 배열의 값을 따로 상수 / 변수에 저장
    // const fn = n[0];
    // const sn = n[1];
    // const tn = n[2];
    // console.log(fn, sn, tn);
    // // 축약형 문법 **************
    // const [fn, sn, tn] = [1, 2, 3];
    // console.log(fn, sn, tn);
    // jsonObject, Map 방식
    // const {name, age} = {name:'syyoon', age:20};
    // const person = {name:'syyoon', age:20};
    // const name = person.name;
    // const age = person.age;

    // const [필드.setter]
    // useState 훅을 축약형으로 선언
    const [count, setCount] = useState(0);
    console.log("UseState Demo");
    // 함수 정의
    // const 함수이름 => () => {};
    const clickedIncrement = () => {
        setCount(count + 1);
    };
  return (
    <div>
        <h1>UseStatusDemo1</h1>
        <p>현재 카운트 : {count}</p>
        <button onClick={clickedIncrement}>증가시키기</button>
    </div>
  )
}

export default UseStateDemo1
