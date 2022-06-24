import styled from "styled-components";
export namespace ActivityStyles {

    export const Wrap = styled('div')<{isPadding:boolean|undefined}>`
                      width: 100%;
                      height: 100%;
                     ${({isPadding}) => !isPadding && `padding: 0 50px`} ;
`
 export const MainTitle = styled('h5')`
                    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                    font-style: normal;
                    font-weight: 900;
                    font-size: 48px;
                    line-height: 160%;
                    /* identical to box height, or 77px */
                    
                    
                    /* Text/main */
                    
                    color: rgba(0, 0, 0, 0.88);
                    padding: 50px 0;
`
}
