// 2024-11-20 render()함수를 사용하여 Scroll Box를 

import { Component } from "react";

class ScrollBox extends Component {

  scrollToBottom = () => {
    // 컴포넌트에서 수직 스크롤바를 맨 아래쪽으로 바로 내리는 메서드
    const { scrollHeight, clientHeight } = this.box;
    // scrollHeight = this.box.scrollHeight;
    // -> scrollHeight : 스크롤이 있는 div박스 안의 높이(600px) 즉 전체 높이
    // clientHeight = this.box.clientHeight;
    // -> clientHeight : 스크롤이 있는 박스 높이(300px) 즉 사용자에게 보여지는 높이

    this.box.scrollTop = scrollHeight - clientHeight;
    // scrollHeight - clientHeight : div박스안의 contentHeight(600px) - div박스안의 clientHeight(300px)
    // -> 300px : scrollTop : 사용자가 div 박스를 스크롤할 때, div 박스의 top 위치
    // 
  };

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle = {
      width: '100%',
      height: '600px',
      background: 'linear-gradient(white, black)'
    };

    return (
      <div style={style} ref={(ref) => { this.box = ref }}>
        <div style={innerStyle}>

        </div>
      </div>
    )
  }
}

export default ScrollBox

