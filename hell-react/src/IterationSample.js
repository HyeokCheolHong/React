// 2024-11-21 함수컴포넌트로 Iterator 사용 작성

const IterationSample = () => {

  // 화면에 보여지는 렌더링 코드 (JSX)

  // 목록들을 하나씩 li태그로 하나씩 생성한 코드
  // return (
  //   <ul>
  //     <li>눈사람</li>
  //     <li>얼음</li>
  //     <li>눈</li>
  //     <li>바람</li>
  //   </ul>
  // )

  // 배열을 활용하여 목록을 생성한 코드
  const names = ['눈사람2', '얼음2', '눈2', '바람2']
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  // 배열 객체 하위의 map()함수를 사용해서 배열원소값과 키값을 활용하여 JSX코드인 <li>..</li>를 생성한 배열 nameList를 반환
  return (
    <ul>
      {nameList}
    </ul>
  )
};

export default IterationSample;