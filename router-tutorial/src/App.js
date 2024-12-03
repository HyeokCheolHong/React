// 2024-12-02 React Router Component 연습 코드
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';

// 2024-12-03 공통페이지 Layout 코드완료후 임포트
import Layout from "./Layout";
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Mypage from './pages/Mypage';


// 2024-12-03 공통페이지 Layout 작성후 
const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        {/* profiles/사용자명 인 경로로 지정 */}
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path='/mypage' element={<Mypage />} />

      <Route path='*' element={<NotFound />} />
      {/* 
        path에 '*'를 설정하면 모든 라우팅 주소에 대해 이 컴포넌트가 적용된다.
        하지만, '*' 라우트는 다른 라우트보다 하단에 위치해야 하며,
        상단에 위치한 라우트가 모두 처리되지 않은 경우에만 적용된다.
      */}
    </Routes>
  );
};


// 2024-12-03 공통페이지 Layout 작성후 주석처리
// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/profiles/:username" element={<Profile />} />
//       {/* profiles/사용자명 인 경로로 지정 */}
//       <Route path="/articles" element={<Articles />}>
//         <Route path=":id" element={<Article />} />
//       </Route>
//     </Routes>
//   );
// };

export default App;