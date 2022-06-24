import styled from "styled-components";

export namespace CollectionListStyles {

   export  const List = styled('ul')`
                  height: 576px;
                  width: 100%;
                  background: rgba(255, 255, 255, 0.4);
                  box-shadow: 0px 0px 16px -6px rgba(82, 82, 82, 0.14), 0px 0px 44px -4px rgba(82, 82, 82, 0.12);
                  backdrop-filter: blur(16px);
                  /* Note: backdrop-filter has minimal browser support */
                  border-radius: 20px;
`
    export const Item = styled('li')`
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  padding-left: 62px;
                  padding-right: 31px;
                  padding-top: 19px;
`
    export const Index = styled('span')`
                  font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 160%;
                    /* identical to box height, or 26px */
                    
                    text-align: center;
                    
                    /* Text/main */
                    
                    color: rgba(0, 0, 0, 0.88);
                    margin-right: 62px;

`
    export const CollectionIcon = styled('div')`
                  background: #C4C4C4;
                  width: 32px;
                  height: 32px;
                  border-radius: 50%;
                  margin-right: 16px;
`
    export const CollectionName = styled('span')`
                  font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 160%;
                    /* identical to box height, or 26px */
                    
                    text-align: center;
                    
                    /* Text/main */
                    
                    color: rgba(0, 0, 0, 0.88);

`
    export const RowHeader= styled('span')`
                    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                    font-style: normal;
                    font-weight: 600;
                    font-size: 10px;
                    line-height: 160%;
                    /* identical to box height, or 16px */
                    
                    text-align: center;
                    
                    /* Grey/4 */
                    
                    color: #696969;

`
    export const RowValue = styled('span')`
                    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 160%;
                    /* or 22px */
                    
                    display: flex;
                    align-items: center;
                    
                    /* Text/main */
                    
                    color: rgba(0, 0, 0, 0.88);

`
    export const TokenIcon = styled('img')`
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    margin-right: 5px;
`
  export const TokenUp = styled('span')`
                    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 160%;
                    /* or 22px */
                    
                    display: flex;
                    align-items: center;
                    
                    /* Success/main */
                    
                    color: #4CAF50;

`
}

