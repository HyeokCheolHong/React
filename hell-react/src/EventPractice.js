import { Component } from "react";

// 2024-11-19 작성
class EventPractice extends Component {
  state = {
    message: ''
  } // message 초기값 설정
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="message" placeholder="입력하세요!" value={this.state.message} onChange={
          (e) => {
            // console.log(e);
            // 문제) text input 입력필드에 입력한값을 웹브라우저 F12 개발 툴 콘솔 탭에 출력되게 해보자
            // console.log(e.target.value);
            // 객체(e) 의 target.value 는 입력필드값을 가져온다.

            // input value초기값에 e.target.value의 값이 들어가도록 지정
            this.setState({
              // message 상태속성값 변경, 클래스형 컴포넌트 방법에서는 setState()를 통해서 자기자신 상태속성값을 변경
              message: e.target.value
            })
          }
        } /> &nbsp;&nbsp;
        {/* 2024-11-20 Button 추가 코드 */}
        <button type="button" onClick={
          () => {
            alert(this.state.message);
            // 경고창에 현재 상태 메시지 출력
            this.setState({
              // 상태속성값 지정
              message: '' // 상태 속성값 초기화
            })
          }
        }>확인</button>
      </div>
    );
  }
}

export default EventPractice;