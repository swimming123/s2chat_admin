import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GalleryList from "./components/GalleryList";
import GalleryForm from "./components/GalleryForm";
import Footer from "./Footer";
import Header from "./Header";


function App(){
    // 컴포넌트 결합
    return (
        <Router>
            <Header />
            {/* 라우터 목록, 이동할 컴포넌트 명시 */}
            <Routes>
                <Route path="/board" element={<div>게시판 컴포넌트</div>}/>
                <Route path="/signup" element={<div>회원가입 컴포넌트</div>}/>
                <Route path="/login" element={<div>로그인 컴포넌트</div>}/>
                <Route path="/products" element={<div>상품 컴포넌트</div>}/>
                <Route path="/gallary" element={<GalleryList />} />
                <Route path="/gallary/new" element={<GalleryForm />} />
            </Routes>
            <Footer />
        </Router>
    )
}
export default App;