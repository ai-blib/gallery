import styled from "styled-components";

export namespace DetailInfoStyles {
    export const Wrap = styled('div')`
      width: 100%;
      height: 100%;
    `
    export const List = styled('ul')`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `
    export const Item = styled('li')`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 90px;
    `
}