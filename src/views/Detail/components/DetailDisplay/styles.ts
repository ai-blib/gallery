import styled from "styled-components";

export namespace DetailInfoStyles {
     export const DetailList = styled('ul')`
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                  flex-direction: row;
                  margin-top: 20px;
`
    export const Item = styled('li')`
                  display: flex;
                  flex-direction: column;
`
    export const Title = styled('div')`
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


`
    export const TitleContent = styled('div')`
                   font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 160%;
                    /* or 22px */
                    
                    
                    /* Text/main */
                    
                    color: rgba(0, 0, 0, 0.88);

`

}
