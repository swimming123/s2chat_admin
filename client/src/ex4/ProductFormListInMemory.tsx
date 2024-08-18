import axios from 'axios';
import React, { useState } from 'react'

  interface ProductFormData{
    name:string;
    context:string;
    price:number;
    discount:number; // 할인율 (소수점 포함 가능)
    rating:number;   // 평점 (소수점 포함 가능)
  }
const ProductFormListInMemory = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    context: "",
    price: 0,
    discount: 0,  
    rating: 0,  
  });
  // handleChange 함수 입력폼이 변경 될 때마다 (변경 이벤트) => React.ChangeEvent<HTMLInputElement>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("target name : ", e.target.name, "target value : ", e.target.value);
    const {name, value} = e.target;
    setFormData({
      ...formData, // 기존 폼 데이터를 전개연산자로 배열에 복사
      [name] : value, // 초기화된 state에서 키값을 찾아서 값을 input에 입력한 값으로 변경
    }
    )};
  // handleSubmit 함수는 전송 => React.FormEvent<HTMLFormElement>
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("폼전송~!");
    try {
      const response = await axios.post('http://192.168.0.45/admin/product', formData);
      console.log("서버응답", response.data);
    } catch (error) {
      console.error('전송오류', error)
      
    }
  }
  
  return (
    <div>
      <h1>ProductFormListInMemory</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="상품 이름"
          onChange={handleChange}
        />
        <input
          type="text"
          name="context"
          placeholder="상품 설명"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="상품 가격"
          onChange={handleChange}
        />
        <input
          type="number"
          name="discount"
          placeholder="상품 세일가"
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="상품 평점"
          onChange={handleChange}
        />
        <input type="submit" value="상품등록" />
      </form>
    </div>
  )
}
export default ProductFormListInMemory