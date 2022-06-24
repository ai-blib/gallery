import styled from "styled-components";

export const InputWrap = styled.div`
    width: 100%;
    height: 42px;
    background: #efefef;
    /* blur */
    background: #f9f9f9;
    opacity: 0.7;
    /* 40 blur */

    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border: 1px solid transparent;
    &:hover {
        border: 1px solid #0059b3;
    }
`;
export const InnerInput = styled.input`
    background: transparent;
    outline: none;
    width: 100%;
    height: 100%;
    border: 0;
    flex: 1;
    text-indent: 5px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #f6fcfd;
    caret-color: #ffffff;
    &::-webkit-input-placeholder {
        /* WebKit browsers */
        font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 160%;
        /* or 19px */
        /* identical to box height */

        color: rgba(105, 105, 105, 0.6);
    }
    &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 160%;
        /* or 19px */
        color: rgba(105, 105, 105, 0.6);
    }
    &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 160%;
        /* or 19px */
        color: rgba(105, 105, 105, 0.6);
    }
    &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 160%;
        /* or 19px */
        color: rgba(105, 105, 105, 0.6);
    }
`;
