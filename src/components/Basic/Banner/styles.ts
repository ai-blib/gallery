import styled from "styled-components";

export namespace BannerStyle {
    export const BannerWrap = styled.div<{ src?: string }>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 286px;
        margin-top: 16px;
        background: ${({ src, theme }) =>
            !src
                    ? theme.whiteBg
                    : `url(${src})`} center center no-repeat;
        background-size: cover;
        border-radius: 20px;
        position: relative;
         ${({ src }) =>
             src &&
             `.btn-up{
                      display:none;
                    }`}
         &:hover{
            ${({ src }) =>
                src &&
                `
                    .btn-up{
                      display:flex;
                    }
                 `}
        .skeleton{
          position: absolute;
          z-index: 10;
        }
    `;
    export const ButtonWrap = styled.div`
        /* justify-self: center; */
    `;
    export const AvatarWrap = styled.div<{ hover: boolean }>`
        position: absolute;
        transform: translate(0, 120px);
        display: flex;
        align-items: center;
        justify-content: center;
        ${({ hover }) =>
            hover &&
            `.btn-logo{
            display: none;
          }`}
        &:hover {
            .btn-logo {
                display: flex;
            }
        }
    `;
    export const SaveWrap = styled.div`
        width: auto;
        margin: 0 auto;
    `;
    // export const ImgWrap = styled("div")``;
}
