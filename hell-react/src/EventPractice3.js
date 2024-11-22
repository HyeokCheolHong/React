//2024-11-20 작성 input이 여러개인 경우

import { Component } from "react";

class EventPractice3 extends Component {
  state = {
    username: '',
    message: ''
  }; // 속성 정의와 초기화

  handleChange = (e) => {
    this.setState({
      // Functional Component 인 경우
      // console.log(e.target.name);
      [e.target.name]: e.target.value
      // 입력필드가 여러개인 경우
      // e.target.name : 각 input 값의 name 파라미터 값을 지칭
      // e.target.value : input 값을 가져올때는 value 파라미터 값을 사용한다.
      // 즉 e.target.name 을 key값으로 e.target.value 값을 가져온다고 생각하면 된다.
    });
  };

  handleClick = () => {
    alert(this.state.username + ' : ' + this.state.message);
    this.setState({
      // 각 상태 속성값 초기화
      username: '',
      message: ''
    });
  };

  // 사용자 정의 함수 지정
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // 사용자가 결정한 '키'가 Enter 키라면
      this.handleClick();
      // handleClick 함수 메서드 호출
    };
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="사용자명 입력해주세요" /><br />
        {/* <input type="text" name="message" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress} placeholder="내용을 입력하세요!" />&nbsp;&nbsp; */}
        <input type="text" name="message" value={this.state.message} onChange={this.handleChange} onKeyDown={this.handleKeyPress} placeholder="내용을 입력하세요!" />&nbsp;&nbsp;
        {/* onKeypress가 deprecated가 되었으므로 onKeyDown 및 onKeyUp 사용 */}

        <button type="button" onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice3;