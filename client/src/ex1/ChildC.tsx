//rafce
import React from 'react'
// 컴포넌트가 받을 props의 타입을 정의한다.
interface ChildCProps {
    //propA는 필수 속성으로 , 만약 필수 속성이 아니면 ? 를 주면된다.
    propA: string;
    //propB와 propC는 선택적 속성
    propB?: string; 
    propC?: string; 
}
// React.FC(function component) 리액트에서 함수형 컴포넌트를 정의할 때 사용되는 문법
// 생략할 때도 있음
// 인터페이스는 ChildCProps를 구현하는 함수형 컴포넌트를 만든다고 할 수 있다.
const ChildC: React.FC<ChildCProps> = (props) => {
  const { propA, propB, propC,} = props;
  return (
    <div>
      {/* Boot에서 데이터를 받아와 모달로 띄울때 이 코드를 사용함 */}
      {/* 필수 속성인 경우 아래처럼 출력*/}
      <p>Prop A : {propA}</p>
      {/* propA가 있으면 출력 : 선택속성인 경우 아래처럼 출력*/}
      {/* propA && <p>Prop A : {propA}</p>*/}
      {propB && <p>Prop B : {propB}</p>} 
      {propC && <p>Prop C : {propC}</p>}
    </div>
  )
}
export default ChildC