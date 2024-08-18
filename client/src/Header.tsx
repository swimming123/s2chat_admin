import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">ICT STUDY</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="navbar-brand" to="/board">게시판</Link>
            </li>
            <li className="nav-item">
                <Link className="navbar-brand" to="/signup">회원가입</Link>
            </li>
            <li className="nav-item">
                <Link className="navbar-brand" to="/login">로그인</Link>
            </li>
            <li className="nav-item">
                <Link className="navbar-brand" to="/products">상품목록</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">갤러리</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header