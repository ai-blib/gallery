import styled from 'styled-components';

export namespace UploadfileStyles {
    export const Wrap = styled('div')`
      width: 100%;
      height: 100%;
      cursor: pointer;

      .filepond--root, .filepond--drop-label {
        //background: #ECEFF1;
        border: dashed 1px #000000;
        color: black;
        border-radius: 20px;
        cursor: pointer;
        background: #E3EDF7;
        box-shadow: 4px 2px 8px 0px #5f9de77a inset, -4px -2px 8px 0px #ffffff;
        border-color: #7E97B8;
      }

      label {
        cursor: pointer;
      }

      .filepond--credits {
        display: none;
      }
    `

}
