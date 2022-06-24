import styled from "styled-components";

export namespace CollectionCardStyles {
    export const CollectionCard = styled.div`
        width: 280px;
        height: 248px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(255, 255, 255, 0.5);
        /* Grey/3 */

        border: 1px solid #d3d3d3;
        box-sizing: border-box;
        /* blur */

        backdrop-filter: blur(40px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 20px;

        padding: 12px;
        &:hover {
            box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
            transition: all 0.1s ease 0s;
        }
        cursor: pointer;
    `;
    export const CollectionBackground = styled.div<{ cover?: string }>`
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        width: 256px;
        height: 98px;
        background: ${({ cover }) =>
                cover ? `url(${cover}) ` : `url("../../../assets/stone.jpg")`}
            no-repeat center;
        background-size: cover;
        border-radius: 10px;
    `;
    export const AvatarWrap = styled.div<{ src: string }>`
        width: 70px;
        height: 76px;
        border: 4px solid #ffffff;
        border-radius: 50%;
        background: url(${({ src }) => src}) center center no-repeat;
        background-size: 100% 100%;
        position: absolute;
        transform: translate(0, 19px);
    `;
    export const TitleWrap = styled.div`
        font-weight: bold;
        font-size: 20px;
        line-height: 160%;
        /* identical to box height, or 32px */

        /* Text/main */

        color: rgba(0, 0, 0, 0.88);
    `;

    export const TabWrap = styled.div`
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    `;
    export const ColumnWrap = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;
    export const VolumeTitleWrap = styled.div`
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */

        text-align: center;

        /* Text/secondary */

        color: rgba(0, 0, 0, 0.6);
    `;
    export const VolumeWrap = styled.div`
        font-weight: bold;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */

        text-align: center;

        /* Text/main */

        color: rgba(0, 0, 0, 0.88);
    `;
}
