import React from 'react'
import { Link } from 'react-router-dom'

const GalleryList = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">갤러리 리스트</h1>
      <Link className="btn btn-primary mb-4" to="/gallery/new">등록</Link>
      
      <div className="row">

        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">갤러리 제목</h5>
              <p className="card-text">갤러리 설명</p>
            </div>
          </div>
        </div>
       
      </div>
      
    </div>
  )
}

export default GalleryList