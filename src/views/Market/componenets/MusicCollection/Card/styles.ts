import styled from "styled-components";

export namespace MusicCard {
    export const Card = styled('div')`
      width: 337px;
      padding: 20px;
      margin-top: 75px;
      min-height: initial;
      padding-bottom: 30px;
      max-width: 400px;
      background: #eef3f7;
      box-shadow: 0px 15px 35px -5px rgb(50 88 130 / 32%);
      border-radius: 15px;
      cursor: pointer;
    `
    export const PlayerContent = styled('div')`
      display: flex;
      align-items: flex-start;
      position: relative;
      z-index: 4;
      flex-wrap: wrap;
    `
    export const PlayerCover = styled('div')`
      margin-top: -70px;
      margin-bottom: 25px;
      width: 290px;
      height: 230px;
      margin-left: auto;
      margin-right: auto;
      flex-shrink: 0;
      position: relative;
      border-radius: 15px;
      z-index: 1;
    `
    export const PlayerControls = styled('div')`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      padding-left: 0;
      //width: 100%;
      .icon {
        display: inline-block;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
        filter: drop-shadow(0 11px 6px rgba(172, 184, 204, 0.45));
        color: #fff;
        width: 60px;
    `
    export const Progress = styled('div')`
      width: 100%;
      margin-top: -15px;
    `
    export const ProgressContent = styled('div')`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `
    export const CoverImg = styled('div')<{ src?: string }>`
      background: transparent;
      background: url(${({src}) => src || "/assets/cd.png"});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      //box-shadow: 0px 15px 35px -5px rgb(50 88 130 / 32%);
    `

    export const Cover = styled('img')`
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 0;
    `
    export const AlbumPlayer = styled('img')`
      width: auto;
      position: absolute;
      height: 160px;
      right: 36px;
      top: 25px;
      transform: rotate(50deg);
    `
    export const Items = styled('div')`
      font-size: 26px;
      padding: 5px;
      margin-right: 10px;
      color: #acb8cc;
      cursor: pointer;
      width: 40px;
      height: 40px;
      margin-bottom: 0;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.3s ease-in-out;

      &:hover::before {
        opacity: 1;
        transform: scale(1.3);
      }

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #fff;
        transform: scale(0.5);
        opacity: 0;
        box-shadow: 0px 5px 10px 0px rgb(76 70 124 / 20%);
        transition: all 0.3s ease-in-out;
        transition: all 0.4s cubic-bezier(0.35, 0.57, 0.13, 0.88);
      }
    `
    export const AlbumInfo = styled('div')`
      color: #71829e;
      flex: 1;
      user-select: none;
      font-family: "Bitter", serif;
      align-items: center;
      justify-content: center;
    `
    export const AlbumName = styled('div')`
      font-size: 18px;
      margin-bottom: 9px;
      text-align: center;
    `
    export const AlbumTrack = styled('div')`
      font-size: 18px;
      min-height: 50px;
      text-align: center;
    `
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
