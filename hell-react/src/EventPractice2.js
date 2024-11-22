// 2024-11-20 작성

import { Component } from "react";

class EventPractice2 extends Component {
  state = {
    // 상태 속성 정의
    message: ''
    // 상태 속성 초기화
  };

  /* 2024-11-20 작성 화살표 함수로 변경하여 코드를 쉽게 작성함으로 주석처리
  constructor(props) {
    super(props);
    // 부모의 constructor()(생성자) 함수 호출
    // constructor() 함수를 사용하여 this.state를 초기화
    
    this.handleChange = this.handleChange.bind(this);
    // handleChange() 함수를 this context(this)로 바인드
    this.handleClick = this.handleClick.bind(this);
    // handleClick() 함수를 this context(this)로 바인드
  };
  
  // 변경 이벤트 발생시 실행시킬 이벤트 핸들러
  handleChange(e) {
    this.setState({
      message: e.target.value // e.target.value값 출력
    })
  };
      
  // 클릭 이벤트 발생시 실행시킬 이벤트 핸들러
  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '', //속성 초기화
    });
  };
      여기까지 화살표 함수로 인한 주석처리 문*/

  // 2024-11-20 화살표 함수를 사용하여 바인딩 함수를 만들면 코드가 간결해짐
  handleChange = (e) => {
    this.setState({
      message: e.target.value
    });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="message" placeholder="주소 입력" value={this.state.message} onChange={this.handleChange} />&nbsp;
        <input type="button" value="확인" onClick={this.handleClick} />
      </div>
    )
  }
}

export default EventPractice2

