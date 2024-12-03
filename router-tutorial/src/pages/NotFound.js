import React from 'react';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
        position: "absolute",
        width: '100%',
        height: '100%',
      }}>
      해당 경로에 파일이 없습니다. 404 NotFound 에러 입니다.
    </div>
  );
};

export default NotFound;