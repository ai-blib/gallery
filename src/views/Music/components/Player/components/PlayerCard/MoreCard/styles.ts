import styled, {css, keyframes} from "styled-components";

export namespace MoreCardStyles {
    export const Wrap = styled('div')`
      width: 100%;
      height: 200px;
      position: relative;
      z-index: 100;
      border-radius: 12px;
      background: rgba(0, 0, 0, 0.4);

    `
    export const List = styled('ul')`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      overflow-y: auto;
    `
    export const MusicItem = styled('li')`
      width: 100%;
      height: 76px;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      padding: 8px;
      box-sizing: border-box;
      background: rgba(238, 243, 247, 0.4);
      border-radius: 12px;
      position: relative;
      margin-bottom: 10px;
    `
    export const CardLogo = styled('img')`
      width: 60px;
      height: 60px;
      border-radius: 12px;
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
      position: relative;
    `
}
