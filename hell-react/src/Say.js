import { useState } from 'react';
// 리액트 16.8 이전 버전에서는 함수 컴포넌트가 사용이 불가능 했다.
// 하지만 16.8 이후부터는 userState라는 함수 즉 리액트 훅(Hook)가 추가됨으로써
// 해당 함수를 사용하여 함수 컴포넌트에서도 state 상태 속성값을 다룰수 있게 되었다.

// 2024-11-19 버튼 클릭시 글자색상 변경 코드
const Say = () => {
  const [message, setMessage] = useState('');
  // 함수 인자값에는 초기값 설정, 배열 구조 분해 할당
  // 첫번째 message 는 현재 상태 속성을 의미
  // 두번째 setMessage 는 상태 속성을 업데이트할 때 사용하는 함수 (setter()함수와 동일)

  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히가세요');

  const [color, setColor] = useState('red');
  // useState() Hook을 사용하여 color 상태 속성을 다룰 수 있음
  // color 초기값으로 red 색상 지정

  return (
    <div>
      <button type='button' onClick={onClickEnter}>입장</button>&nbsp;&nbsp;
      <button type='button' onClick={onClickLeave}>퇴장</button>
      <hr />
      <h1 style={{ color }}>{message}</h1>
      <button type='button' style={{ color: 'gold' }} onClick={() => setColor('gold')}>골드색 변경</button>&nbsp;&nbsp;
      <button type='button' style={{ color: 'orange' }} onClick={() => setColor('orange')}>주황색 변경</button>&nbsp;&nbsp;
      <button type='button' style={{ color: 'blue' }} onClick={() => setColor('blue')}>파란색 변경</button>
    </div>
  )
};

// // 2024-11-19 버튼 클릭시 Click Event 발생 코드
// const Say = () => {
//   const [message, setMessage] = useState('');
//   // 함수 인자값에는 초기값 설정, 배열 구조 분해 할당
//   // 첫번째 message 는 현재 상태 속성을 의미
//   // 두번째 setMessage 는 상태 속성을 업데이트할 때 사용하는 함수 (setter()함수와 동일)

//   const onClickEnter = () => setMessage('안녕하세요');
//   const onClickLeave = () => setMessage('안녕히가세요');

//   return (
//     <div>
//       <button type='button' onClick={onClickEnter}>입장</button>&nbsp;&nbsp;
//       <button type='button' onClick={onClickLeave}>퇴장</button>
//       <hr />
//       <h1>{message}</h1>
//     </div>
//   )
// };

export default Say;