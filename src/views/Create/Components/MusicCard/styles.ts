import styled, {keyframes} from "styled-components";

export namespace MusicCard {
    export const Card = styled('div')`
      width: 337px;
      height: fit-content;
      padding: 20px;
      margin-top: 75px;
      min-height: initial;
      max-width: 400px;
      background: #eef3f7;
      box-shadow: 0px 15px 35px -5px rgb(50 88 130 / 32%);
      border-radius: 15px;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: translateY(-5px);
      }
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
      width: 100%;
      padding: 16px 0;

      .heart {
        display: inline-block;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
        filter: drop-shadow(0 11px 6px rgba(172, 184, 204, 0.45));
        color: #FFFFFF;
        position: relative;
        z-index: 10;
        font-size: 75px;

      }

      .link {
        display: inline-block;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
        filter: drop-shadow(0 11px 6px rgba(172, 184, 204, 0.45));
        color: #acb8cc;
        width: 26px;
        position: relative;
        z-index: 10;
      }

    `
    export const Progress = styled('div')`
      width: 100%;
      margin-top: -15px;
    `
    export const ProgressContent = styled('div')`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `
    export const CoverAlbum = styled('div')<{ src?: string }>`
      background: transparent;
      background: url(${({src}) => src || "/assets/cd.png"});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 12;
      box-shadow: 0px 15px 35px -5px rgb(50 88 130 / 32%);
    `

    export const Cover = styled('img')`
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 0;
    `
    export const AlbumPlayer = styled('img')`
      width: auto;
      position: absolute;
      height: 91px;
      right: -21px;
      top: -2px;
      transition: all 0.3s;
      transform-origin: top right;
      transform: rotate(-9deg);
      z-index: 12;
    `
    const rotate = keyframes`
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    `;
    export const CoverWrap = styled('div')`
      width: auto;
      height: auto;
      border-radius: 50%;
      position: relative;

    `
    export const CoverImg = styled('div')<{ src?: string }>`
      background: url(${({src}) => src});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      //opacity: 0.7;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      position: relative;
      left: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        ${CoverAlbum} {
          animation: ${rotate} 2s linear infinite;
        }

        ${AlbumPlayer} {
          transform: rotate(10deg);
        }
      }

      .player {
        position: relative;
        display: inline-block;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
        filter: drop-shadow(0 11px 6px rgba(172, 184, 204, 0.45));
        color: #fff;
        z-index: 10;
        cursor: pointer;
      }

      &:before {
        content: "";
        background: inherit;
        width: 100%;
        height: 100%;
        box-shadow: 0px 10px 40px 0px rgb(76 70 124 / 50%);
        display: block;
        z-index: 1;
        position: absolute;
        top: 30px;
        transform: scale(0.9);
        filter: blur(10px);
        opacity: 0.9;
        border-radius: 15px;
      }

      &:after {
        content: "";
        background: inherit;
        width: 100%;
        height: 100%;
        box-shadow: 0px 10px 40px 0px rgb(76 70 124 / 50%);
        display: block;
        z-index: 2;
        position: absolute;
        border-radius: 15px;

      }
    `
    export const Items = styled('div')`
      display: flex;
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
      z-index: 11;

      &:hover {
        .heart {
          color: #007FFF;
        }
      }

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
    export const CardBg = styled('div')<{ src: string }>`
      width: 100%;
      height: 100%;
      position: absolute;
      background: url(${({src}) => src}) no-repeat center;
      background-size: 100%;
      left: 0;
      top: 0;
      //z-index: -1;
      -webkit-filter: blur(20px);
      filter: blur(20px);
    `
    export const AlbumInfo = styled('div')`
      padding-top: 20px;
      color: #71829e;
      flex: 1;
      user-select: none;
      font-family: "Bitter", serif;
      transition: all;
    `
    export const AlbumName = styled('div')`
      font-size: 18px;
      margin-bottom: 9px;
    `
    export const AlbumTrack = styled('div')`
      font-size: 18px;
      min-height: 50px;
    `
    export const ProgressBar = styled('div')`
      height: 6px;
      width: 100%;
      cursor: pointer;
      background-color: #d0d8e6;
      display: inline-block;
      border-radius: 10px;
    `
    export const ProgressTime = styled('div')`
      margin-top: 2px;
      color: #71829e;
      font-weight: 700;
      font-size: 16px;
      opacity: 0.7;
    `
    export const MusicCollection = styled('div')`
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 12;
    `
    export const PriceWrap = styled('div')`
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;
    `
    export const Per = styled('div')`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      color: rgba(0, 0, 0, 0.6);
    `
    export const PerNumber = styled('div')`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      line-height: 160%;
      text-align: right;
      color: rgba(0, 0, 0, 0.88);
    `
}
