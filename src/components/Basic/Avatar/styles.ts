import styled from "styled-components";
export namespace AvatarStyles {
    export const AvatarWrap = styled.div<{ size: number,src?:string }>`
      width: ${({size}) => size}px;
      height: ${({size}) => size}px;
      border: 4px solid #ffffff;
      border-radius: 50%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background: #FFFFFF ${({src}) => src ? `url(${src})` : `url(../../../assets/checker.png)`};
      background-size: contain;
    `;
}
