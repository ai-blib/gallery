import styled from "styled-components";
export namespace CollectionBannerStyles {
    export const CollectionBannerWrap = styled.div<{ src?: string }>`
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 286px;
      margin-top: 16px;
      background: ${({ src, theme }) =>
                !src ? theme.grayBackground : `url(${src})`}
            center center no-repeat;
        background-size: cover;
        border-radius: 20px;
        .skeleton {
            position: absolute;
            z-index: 10;
        }
    `;
    export const AvatarWrap = styled.div`
      position: relative;
      margin-left: 224px;
      transform: translate(0, 120px);
    `;
}
