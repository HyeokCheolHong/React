// 2024-12-02 React Router Component 연습 코드
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      {/* profiles/사용자명 인 경로로 지정 */}
      <Route path="/articles" element={<Articles />} />
      <Route path="/article/:id" element={<Article />} />
    </Routes>
  );
};

export default App;