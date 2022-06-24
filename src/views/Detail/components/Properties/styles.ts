import styled from "styled-components";

export namespace PropertiesStyles {
      export const List = styled('ul')`
                    width: 450px;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    flex-wrap: wrap;
`
    export const Item = styled('li')`
                    width: 124px;
                    height: 106px;
                    border: 1px solid #C9C9C9;
                    box-sizing: border-box;
                    border-radius: 12px;
                    display: flex;
                    align-items: flex-start;
                    flex-direction: column;
                    padding: 10px;
                    margin: 5px;
                    position: relative;
                    
`
  export const MainTitle =styled('h5')`
                    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 160%;
                    /* or 22px */
                    
                    display: flex;
                    align-items: center;
                    
                    /* Grey/4 */
                    
                    color: #696969;
                    margin-bottom: 10px;
`
    export const SubTitle = styled('h5')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      display: flex;
      align-items: center;
      text-align: center;
      color: ${({theme}) => theme.mainColor};
    `
    export const ContextTitle =styled('h5')`
                    margin-top: 20px;
                    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 160%;
                    /* identical to box height, or 26px */
                                      
                    /* Grey/10 */
                    
                    color: #000000;
`
}
