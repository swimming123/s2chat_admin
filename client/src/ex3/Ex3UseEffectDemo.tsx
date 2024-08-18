import React, { useEffect, useState } from 'react'

const Ex3UseEffectDemo = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `you clicked ${count} times`
    }, []);
  return (
    <div>
        <div>Ex3UseEffectDemo</div>
        <p>You clicked 화면 (count) times</p>
        <button onClick={() => setCount(count+1)}>clicked</button>
    </div>
  )
}

export default Ex3UseEffectDemo