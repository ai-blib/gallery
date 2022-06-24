import styled, {css, keyframes} from "styled-components";

export namespace PlayerCardStyles {
    export const Wrap = styled('div')`
      position: absolute;
      padding: 20px;
      min-height: 200px;
      width: 550px;
      background: #eef3f7;
      box-shadow: 0px 15px 35px -5px rgb(50 88 130 / 32%);
      border-radius: 15px;
      transition: all 0.3s ease-in-out;
      right: 40px;
      bottom: 80px;

      .more {
        display: inline-block;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
        filter: drop-shadow(0 11px 6px rgba(172, 184, 204, 0.45));
        background: white;
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
    export const CardTop = styled('div')`
      width: 100%;
      height: auto;
      display: flex;
      position: relative;
    `
    const rotate = keyframes`
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    `;
    const animation = props =>
        css`
          ${rotate} 2s infinite alternate;
        `
    export const CoverWrap = styled('div')`

      width: 150px;
      height: 150px;
      border-radius: 50%;
      position: relative;

    `
    export const CoverImg = styled('div')<{ playing?: boolean }>`
      background: transparent;
      background: url(${() => "/assets/cd.png"});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      position: relative;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
      animation: ${({playing}) => playing && rotate} 2s linear infinite;
      //box-shadow: 0px 15px 35px -5px rgb(50 88 130 / 32%);
    `
    export const Cover = styled('img')`
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 0;
    `
    export const AlbumPlayer = styled('img')<{ playing: boolean }>`
      width: auto;
      position: absolute;
      height: 100px;
      right: -10px;
      top: -5px;
      transform-origin: right top;
      transform: rotate(-20deg);
      z-index: 100;
      transition: all 0.3s;
      ${({playing}) => playing && `transform: rotate(10deg);`}
    `
    export const PlayerControls = styled('div')`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      width: 100%;
      padding: 16px 0;

      //.heart-player {
      //  display: inline-block;
      //  stroke-width: 0;
      //  stroke: currentColor;
      //  fill: currentColor;
      //  filter: drop-shadow(0 11px 6px rgba(172, 184, 204, 0.45));
      //  color: white;
      //  width: 26px;
      //  position: relative;
      //  z-index: 10;
      //}

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

      .heart-player {
        display: inline-block;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
        filter: drop-shadow(0 11px 6px rgba(172, 184, 204, 0.45));
        color: white;
        width: 59px;
        position: relative;
        z-index: 10;
      }

      &:hover {
        .heart-player {
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
    export const IconWrap = styled('div')`
      display: none;

      .heart-to {
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
        filter: drop-shadow(0 11px 6px rgba(172, 184, 204, 0.45));
        color: red;
        width: 60px;
        z-index: 10000;
        cursor: pointer;
      }

    `
    export const Name = styled('div')`
      color: white;
      font-size: 16px;
    `
    export const SubName = styled('div')`
      color: #ccc;
    `
    export const TitleWrap = styled('div')`
      width: 100%;
      display: flex;
      align-items: center;
      //justify-content: center;
      flex-direction: column;
      padding-top: 20px;
      position: relative;
    `
    export const HeartWrap = styled('div')`
      position: absolute;
      right: -10px;
      top: -30px;
    `
    export const Pointer = styled('div')`
      width: 7px;
      height: 7px;
      background: #fff;
      border-radius: 50%;
      opacity: 0;
    `
    export const Progress = styled('div')`
      background: rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 5px;
      -webkit-box-shadow: 0 1px 2px rgb(0 0 0 / 50%) inset;
      box-shadow: 0 1px 2px rgb(0 0 0 / 50%) inset;
      overflow: hidden;
      border-radius: 2px;
      position: relative;
      cursor: pointer;
      display: flex;

      &:hover {
        ${Pointer} {
          opacity: 1;
        }
      }

    `
    export const Bar = styled('div')<{ width: string }>`
      width: ${({width}) => width || 0};
      height: 100%;
      border-radius: 2px;
      background: linear-gradient(315deg, #0059B3 0%, #007FFF 100%);
    `

    export const Time = styled('div')`
      font-size: 12px;
      color: #fff;
      margin: 5px;
      padding: 0px 3px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 5px;
    `
}

