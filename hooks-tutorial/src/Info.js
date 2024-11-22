import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // useEffect()함수에 두번째 인자값에 따라 실행결과가 달라지는것을 확인 하므로 주석처리
  // useEffect(() => {
  //   // useEffect React Hook은 랜더링 이후에 실행되는 작업을 주로 설정한다.
  //   console.log('랜더링이 완료되었습니다')

  //   // console.log 창에서 첫 렌더링에만 출력이 되고 이후에는 출력이 안되게 하기 전 코드
  //   // console.log({
  //   //   name,
  //   //   nickname
  //   // });
  // }, []);
  // // useEffect 함수 두번째 배열에 빈배열([]) 를 넣어준다면 처음 렌더링될 때만 실행된다.

  // useEffet 함수에 두번째 인자값에 name인자값을 넣어보자
  // name값(input)이 변경될때마다 실행
  useEffect(() => {
    console.log(name);
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <label for="name">이름 : </label>
        <input name="name" id="name" value={name} onChange={onChangeName} placeholder="이름을 입력하세요!" />
        <label for="nickname">별명 : </label>
        <input name="nickname" id="nickname" value={nickname} onChange={onChangeNickname} placeholder="별명을 입력하세요!" />
      </div>
      <div>
        <b>이름 : </b>{name}
        <b>별명 : </b>{nickname}
      </div>
    </div>
  )
};

export default Info;