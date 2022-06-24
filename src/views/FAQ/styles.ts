import styled from "styled-components";
export namespace FAQStyles {
    export const FAQWrap = styled.div`
        width: 100%;
        padding: 0 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    export const BannerWrap = styled.div`
        width: 100%;
        height: 111px;
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
        justify-content: center;
        position: relative;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 160%;
        /* identical to box height, or 58px */

        /* Text/main */

        color: rgba(0, 0, 0, 0.88);
    `;
    export const Question = styled.div<{ checked: boolean }>`
        background: #eceff1;
        /* Neutral/5 */
        width: 100%;
        height: 47px;
        border: 1px solid #d9d9d9;
        ${({ checked }) => (checked ? "border-bottom: none;" : "")}
        ${({ checked }) =>
            checked ? "border-radius: 8px 8px 0 0;" : " border-radius: 8px;"}
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 160%;
        /* or 26px */

        display: flex;
        align-items: center;
        padding: 0 18px;

        /* Character/Primary .85 */

        color: rgba(0, 0, 0, 0.85);
        /* &:hover {
            box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
            transition: all 0.1s ease 0s;
        } */
        cursor: pointer;
    `;
    export const Answer = styled.div`
        width: 100%;
        padding: 15px;
        background: #ffffff;
        border-bottom: 1px solid #d9d9d9;
        border-left: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;
        border-radius: 0 0 8px 8px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */

        /* Text/secondary */

        color: rgba(0, 0, 0, 0.6);
    `;
    export const CircleIconWrap = styled.div`
        align-self: end;
        position: absolute;
        top: 1px;
    `;
    export const HalfIconWrap = styled.div`
        align-self: start;
        position: absolute;
        left: 27px;
        top: 31px;
    `;
    export const EndIconWrap = styled.div`
        align-self: end;
        position: absolute;
        top: 69px;
    `;
}
