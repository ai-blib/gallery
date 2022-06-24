import styled from "styled-components";

export namespace IntroduceStyles {
            export const Wrap=styled('ul')`
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-around;
              margin-top: 40px;

            `
    export const Item=styled('li')`
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
`
    export const Icon = styled('div')`
                        width: 198px;
                        height: 198px;
                        /* 透明back-w */
                        
                        //background: rgba(255, 255, 255, 0.5);
                        /* Grey/3 */
                        
                        box-sizing: border-box;
                        /* black drop + blur */
                        
                        //box-shadow: 0px 0px 16px -6px rgba(82, 82, 82, 0.14), 0px 0px 24px -4px rgba(82, 82, 82, 0.12);
                        //backdrop-filter: blur(16px);
                        /* Note: backdrop-filter has minimal browser support */
                        
                        border-radius: 16.2295px;
                        img{
                           width: 100%;
                           height: 100%;
                        }

`

    export const Title = styled('span')`
      margin-top: 40px;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 160%;
      color: rgba(0, 0, 0, 0.88);
      margin-bottom: 10px;

    `
    export const SunTitle = styled('p')`
      width: 232px;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      text-align: center;

      /* Text/secondary */

      color: rgba(0, 0, 0, 0.6);

`
}

