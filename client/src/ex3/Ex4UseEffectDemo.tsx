import React, { useEffect, useState } from 'react'

// jsonObject를 받아오기 위한 typescript의 interface 선언

interface Company{
    name : string;
    catchPhrase : string;
    bs  :string;
}
interface UserData{
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company : Company;
}
const Ex4_UseEffectDemo = () => {
    // userData 상태의 타입을 UserData | null로 명시
    const [userData,setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await response.json();
            setUserData(data);
            setLoading(false);
        };
        
    }, []); // [] : 마운트 시 한번만 실행
    if(loading){
        return <div>Loding...</div>
    }
  return (
    <div>
        <h1>Ex4_UseEffectDemo</h1>
        {userData && (
            <>
                <p>name : {userData.name}</p>
                <p>username : {userData.username}</p>
                <p>email : {userData.email}</p>
                <p>phone : {userData.phone}</p>
                <p>website : {userData.website}</p>
                <p>company : {userData.company.name}</p>
                <p>company : {userData.company.catchPhrase}</p>
                <p>company : {userData.company.bs}</p>
            </>
        )}
    </div>
  )
}

export default Ex4_UseEffectDemo