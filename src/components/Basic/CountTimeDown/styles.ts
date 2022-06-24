import styled from "styled-components";

export const DateWrap = styled('ul')`
  width: auto;
  display: flex;
  justify-content: center;
`
export const DateItem = styled('li')`
  display: flex;
  flex-direction: column;
`;
export const DateSapn = styled('span')`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 160%;
  /* identical to box height, or 16px */

  display: flex;
  align-items: center;
  justify-content: center;
`
export const DateContainer = styled('div')`
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #0059B3 0%, #007FFF 100%);
  color: ${({theme}) => theme.whiteFont};
  border-radius: 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 160%;

`
export const Inv = styled('div')`
  height: 40px;
  font-weight: 900;
  font-size: 16px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Completionist = styled('div')`
  margin-top: 10px;
  min-width: 120px;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  background: ${({theme}) => theme.lightGradientColor};
  color: white;
  cursor: pointer;
`
