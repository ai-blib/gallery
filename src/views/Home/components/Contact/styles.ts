import styled from "styled-components";

export namespace ContactStyles {
            export const Wrap=styled('div')`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              background: rgba(255, 255, 255, 0.6);
              border-radius: 20px;
              overflow: hidden;
            `
           export const CardWrap = styled('div')`
             //background:  url("/assets/ac.png") center center no-repeat;
             background-color: rgba(255, 255, 255, 0.5);
             width: 592px;
             height: 368px;
             background-size: 90%;
             display: flex;
             align-items: center;
             justify-content: center;
             margin-right: 30px;

           `

          export const Card = styled('div')`
                      
                        img{
                         width: 280px;
                         height: 248px;
                        }
                        
`
    export  const MainTitle = styled('h5')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 160%;
      /* or 38px */


      /* Text/main */

      color: rgba(0, 0, 0, 0.88);

`
    export const SubTitle = styled("h5")`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */


      /* Text/secondary */

      color: rgba(0, 0, 0, 0.6);

`
    export const Button = styled('div')`
      width: 136px;
      height: 40px;
      cursor: pointer;
      background: ${({theme}) => theme.buttonBg};
      border-radius: 20px;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */

      display: flex;
      align-items: center;
      justify-content: center;

      /* Grey/0 */
                
                color: #FFFFFF;
                &:hover{
                  opacity: 0.8;
                }

`
}

