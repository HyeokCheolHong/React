// 2024-11-20 Functional Components 작성

import { useState } from 'react';
// Functional Components 에서는 자신의 자손의 속성값을 변경할 때 사용하는 useState를 사용한다

const EventPractice4 = () => {
  const [username, setUsername] = useState('');
  // 배열 구조 분해 할당
  // username은 상태속성(변수) setUsername은 상태속성값을 변경하는 setter()메서드 즉 함수이다.
  // username 초기값을 ''으로 할당
  // react Hook useState를 사용한 구조분해 할당인 비구조화 문법이다.

  const [address, setAddress] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  // setter()함수를 호출하면서 username 상태 속성값을 변경한다.
  // e.tartget.value는 입력필드값을 가져온다.
  const onChangeAddress = (e) => setAddress(e.target.value);
  const onClick = () => {
    alert("사용자 명은 : " + username + ", 주소는 : " + address);
    setUsername('');
    setAddress('');
    // 각 상태속성(변수) 초기화
  };

  const keyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
      // Enter키를 눌렀을 때 onClick()함수 호출
    }
  }

  return (
    <div>
      <h1>Functional Component Event Practice</h1>
      <input type="text" name='username' value={username} onChange={onChangeUsername} placeholder="사용자명 입력" />&nbsp;&nbsp;
      <input type="text" name='address' value={address} onChange={onChangeAddress} onKeyDown={keyPress} placeholder="주소 입력" />&nbsp;&nbsp;
      <button type="button" onClick={onClick}>Submit</button>
    </div>
  );

}

export default EventPractice4;

