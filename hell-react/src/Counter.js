import { Component } from "react";

// 생성자가 없는 버전
class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  };// 상태속성값 초기화

  // 생성자를 추가한 버전
  // class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     // 부모의 생성자 호출
  //     this.state = {// 상태 속성 number 초기값 지정
  //       number: 0,
  //       fixedNumber: 0
  //     };
  //   }// 생성자 메서드

  render() {
    const { number, fixedNumber } = this.state;// 상태속성 state number 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값:{fixedNumber}</h2>
        <button
          type="button"
          /* onClick 이벤트 핸들러 (클릭 이벤트가 발생되었을 때 실행할 문장을 지정*/
          onClick={() => {

            // 
            // this.setState({ number: number + 1 })
            // // 클래스 컴포넌트에서는 setState()함수를 사용하여 상태 속성 number값을 1씩 증가하면서 변경시킴

            // // 생성자 없는 버전에서 추가한 Code (number Code가 2개라면 2씩 추가가 되나? [하나씩만 층가])
            // // this.setState({ number: this.state.number + 1 });
            // // 한번 클릭에 2씩 증가하게 바꿔보자
            // this.setState(prevState => {
            //   return {
            //     number: prevState.number + 1,
            //     // prevState는 기존상태를 의미
            //     // number: prevState.number + 1 + 1 // number 위에서 +1 증가된 상태를 받아서 한번 더 +1을 하는 의미 (2개씩 증가)
            //   }
            // });
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            //   // return 없이 실행
            //   // number: prevState.number + 1 + 1 + 1 // number 위에서 +1+1 증가된 상태를 받아서 한번 더 +1을 하는 의미(3개씩 증가)
            // }));

            // console.log(개발자 로그)에 출력해보자
            this.setState(
              {
                number: number + 1
              }, () => {
                console.log("방금 setState가 호출 되었습니다.");
                console.log(this.state);
              }
            );
          }}>+1
        </button> &nbsp;&nbsp;
        <button onClick={() => this.setState({ number: number - 1 })}>-1</button>
      </div>
    );
  }
}

export default Counter;