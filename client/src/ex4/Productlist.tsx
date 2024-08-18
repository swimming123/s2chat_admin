import React, { useEffect, useState } from 'react'

interface ProductType{
    id:number;
    name:string;
    context:string;
    price:number;
    createdAt:Date; // 생성 날짜
    updatedAt:Date; // 수정 날짜
    discount:number; // 할인율 (소수점 포함 가능)
    rating:number;   // 평점 (소수점 포함 가능)
}

const ProductList = () => {
    const[products,setProducts] = useState<ProductType[]>([]);
    const[loading,setLoading] = useState<boolean>(false);
    useEffect(() => {

        const fetchUserData = async () => {
            setLoading(true);
            // 예외 문법 try ~ catch ~ finally
            try{
                const response = await fetch('http://192.168.0.45/admin/product');
                const data = await response.json();
                // ajax로 받아온 데이터 중에 날짜만 타입을 변경해서 다시 수정한다.
                // 별도의 ProductType의 구현 object를 사용
                console.log("Data =>",data);
                const productData : ProductType = {
                    ...data,
                    createdAt: new Date(data.createdAt),
                    updatedAt: new Date(data.updatedAt),
                }
                // 변경된 자바스크립트 Object인 productData를 state에 저장
                // 타입에 맞게 배열로 만들어서 저장한다.
            setProducts([productData]);
            }catch(error){
                console.log(`에러가 났음${error}`)
            }finally{
                setLoading(false);
                console.log("products===============================");
                // 무조건 실행이 되기 때문에 데이터가 로드가되면 
                console.log(products);
            }
        };
        fetchUserData(); // 함수호출!!
        // const arr = [1,2,3,4,5,6,7];
        // console.log(typeof(arr));
        // // 전개연산자 ...
        // const newArr = [...arr,8,9,10]; // 배열의 끝에 8,9,10을 추가
        // console.log(newArr); // [1,2,3,4,5,6,7,8,9,10]
        // const newArr2 = [0,...arr]; // 배열의 앞에 0을 추가
        // console.log(newArr2);
        // // map => for문 없이 배열을 순회하면서 적용
        // console.log(newArr.map(item => item.toString()));
        // console.log(newArr2.map((x)=> x * 2)); // for문 없이 연산
        
    }, []);
    if(loading){
        return <div>Loding...</div>
    }
  return (
    <div>
        <h1>ProductList</h1>
        <h2>배열의 요소를 사용</h2>
        {products.length > 0 ? (
            <>
                <p>{products[0].id}</p>
                <p>{products[0].name}</p>
                <p>{products[0].context}</p>
            </>
        ):(<p>데이터가존재하지않음</p>)}
        <h2>map 사용</h2>
        {products.map(product => (
            // linked list 개념
            <div key={product.id}> 
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.context}</p>
            <p>Created At: {product.createdAt.toLocaleDateString()}</p>
            <p>Updated At: {product.updatedAt.toLocaleDateString()}</p>
            <p>Discount: {product.discount.toFixed(2)}%</p>
            <p>Rating: {product.rating.toFixed(2)} 점</p>
        </div>
        ))}
    </div>
  )
}

export default ProductList
