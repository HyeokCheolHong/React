// 2024-11-27 styled-components를 활용
import styled, { css } from "styled-components";

const Box = styled.div`background: ${props => props.color || 'blue'};
  /* props 로 넣어준 값을 직접 전달해 줄 수 있다.
 background속성값에 props를 조회해서 props.color의 값을 사용하게 함. color값이 주어지지 않았을 때는 기본값 blue를 배경색으로 사용 */
  padding: 1rem;
  display: flex;

  // ??
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    /* 반응형 웹디에 해당하는 미디어 쿼리이다. */
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background:white;
  color:black;
  border-radius:14px;
  padding:0.5rem;
  display:flex;
  align-items: center;
  box-sizing:border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 문자를 사용해서 sass와 마찬가지로 함께 css가 적용 */
  &:hover{
    background: rgba(255,255,255,0.9); // rgba(red, green, blue, opacity(투명도))
  }

  // 다음 코드는 inverted 값이 true인 경우 조건부 랜더링(&&)에 의해서 특정 스타일이 적용부여 된다.
  ${props =>
    props.inverted &&
    // inverted가 true인 경우에만 css가 적용
    css`
      background:none;
      border:2px solid white;
      color:white;
      &:hover{
        background:white;
        color:black;
      }
  `}
  /* & + button : 현재 요소의 다음 형제 요소 중에서 태그 이름이 button인 요소를 선택한다.
  해당 요소에 왼쪽마진 여백을 추가하여 확인해보자 */
  & + button{
    margin-left:10rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    {/* color속성값이 black이 Box props의 인자값으로 전달된다. */}
    <Button>안녕하세요!</Button>
    <Button inverted={true}>테두리만 그린다.</Button>
  </Box>
);

export default StyledComponent;