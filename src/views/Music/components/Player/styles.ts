import styled from "styled-components";

export namespace PlayerStyles {
    export const Mask = styled('div')`
      width: 100vw;
      height: 100vh;
      position: fixed;
      background: transparent;
      z-index: 12;
    `
    export const Wrap = styled('div')`

      //background: linear-gradient(315deg, #0059B3 0%, #007FFF 100%);
      position: fixed;
      right: 30px;
      bottom: 60px;
      z-index: 110;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      /* Primary/Main */
      //background: url("/assets/rock.gif") center center no-repeat;
      //background: #007FFF;
      /* Mui-Dropdown-1 */
      transition: left 3s linear, top 3s ease-in-out;
      box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12);
      border-radius: 50%;
      cursor: pointer;

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
    export const PlayerControls = styled('div')`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      padding-left: 0;
      width: 100%;
      padding: 16px 0;

      .heart {
        display: inline-block;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
        filter: drop-shadow(0 11px 6px rgba(172, 184, 204, 0.45));
        color: white;
        width: 26px;
        position: relative;
        z-index: 10;
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
    export const PlayerGif = styled('img')`
      width: 60px;
      height: 60px;
      border-radius: 50%;
      position: relative;
      z-index: 10;
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
    export const PlayerWrap = styled('div')<{ visible }>`
      width: auto;
      height: auto;
      display: ${({visible}) => visible ? 'flex' : 'none'};
    `

}
