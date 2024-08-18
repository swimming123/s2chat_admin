



//components/GalleryForm.tsx
import React from 'react'

const GalleryForm = () => {
  return (
    <div className="container mt-4">
    <h1 className="mb-4">갤러리 등록 폼</h1>
    <form >
      <div className="mb-3">
        <label htmlFor="title" className="form-label">제목</label>
        <input type="text" className="form-control" id="title" name="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">설명</label>
        <input type="text" className="form-control" id="description" name="description" />
      </div>
      <div className="mb-3">
        <label htmlFor="writer" className="form-label">작성자</label>
        <input type="text" className="form-control" id="writer" name="writer" />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">이미지 파일</label>
        <input type="file" className="form-control" id="image" name="image"/>
      </div>
      <button type="submit" className="btn btn-primary">등록</button>
    </form>
  </div>
  )
}

export default GalleryForm