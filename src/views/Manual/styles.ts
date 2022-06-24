import styled from "styled-components";
export namespace ManualStyles {
    export const ManualWrap = styled.div`
        width: 100%;
        padding: 0 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    export const BannerWrap = styled.div`
        width: 100%;
        height: 240px;
        background: linear-gradient(
            180deg,
            rgba(196, 225, 255, 0.2) 0%,
            rgba(196, 225, 255, 0.41) 51.56%,
            rgba(196, 225, 255, 0.2) 100%
        );
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    `;
    export const Box = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    `;
    export const RowWrap = styled.div`
        display: flex;
        gap: 40px;
    `;
    export const CardWrap = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 160%;
        color: rgba(0, 0, 0, 0.88);
        width: 400px;
        height: 80px;
        border: 1px solid #c9c9c9;
        box-sizing: border-box;
        border-radius: 20px;
        &:hover {
            box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
            transition: all 0.1s ease 0s;
        }
        cursor: pointer;
    `;
    export const InputWrap = styled.div`
        display: flex;
        width: 600px;
    `;
    export const IconWrap = styled.div`
        position: absolute;
        left: 60px;
        top: 33px;
        z-index: 999;
    `;
    export const IconWrapEnd = styled.div`
        align-self: end;
        position: absolute;
        z-index: 999;
        top: 74px;
    `;
    export const CircleIconWrap = styled.div`
        align-self: end;
        position: absolute;
    `;
}
