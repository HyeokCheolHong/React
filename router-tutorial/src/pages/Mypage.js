// 2024-12-03 MyPage 생성

import React from 'react';
import { Navigate } from 'react-router-dom';

const Mypage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
    // isLoggedIn이 false일 경우 "/login" 페이지로 리다이렉트한다.
    // replace={true}는 현재 페이지를 히스토리에 남기지 않는다.
  }

  return (
    <div>
      마이 페이지
    </div>
  );
};

export default Mypage;