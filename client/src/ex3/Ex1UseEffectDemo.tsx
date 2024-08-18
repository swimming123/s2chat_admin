import React, { useState } from 'react'

const Ex1UseEffectDemo = () => {
    // 서버로부터 response 받을 때 데이터의 타입은 object이다.
    // 초기화 null
    const [data, setData] = useState(null);
    // 서버로부터 response 받을 때 데이터는 data.message => 문자열이다..
    // 초기화 ''
    const [message, setMessage] = useState('');

    // met : 함수만들기 - axios 설치 안했음, fetch함수로 받기
    /*
    {
        "msg": "안녕하세요 스프링 부트와 React 입니다."
    }
    */
    const fetchData = () => {
        fetch('http://192.168.0.45/admin/hello')
            .then(response => response.json()) // json 타입을 자바스크립트 data로 변환
            .then(data => setMessage(data.msg)) // 받은 data.msg를 useState훅에 저장
            .catch(error => console.error('Error fetching data : ', error)); 
      };
  return (
    <div>
        <h1>Ex1UseEffectDemo</h1>
        <button onClick={fetchData}>메세지 받기</button>
        <div>{message ? message : '아직 메시지를 받지 못함!'}</div>
    </div>
  )
}

export default Ex1UseEffectDemo