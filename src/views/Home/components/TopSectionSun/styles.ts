import styled from "styled-components";

export namespace TopSectionStyles {
    export const Top = styled('div')`
              width: 100%;
              height: auto;
              display: flex;
              flex-direction: row;
`
    export const MainTitle = styled('div')`
                font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                font-style: normal;
                font-weight: 900;
                font-size: 72px;
                line-height: 140%;
                display: flex;
                align-items: center;
                color: rgba(0, 0, 0, 0.88);
`
    export const SubTitle = styled('div')`
                font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 160%;
                /* identical to box height, or 29px */
                
                display: flex;
                align-items: center;
                
                /* Grey/4 */
                
                color: #696969;
`
    export const Card = styled('div')`

                    position: relative;
                    width: 280px;
                    height: 420px;
                     background: rgba(255, 255, 255, 0.3);
                    /* Grey/3 */
                    border: 1px solid #C9C9C9;
                    box-sizing: border-box;
                    box-shadow: 0px 0px 16px -6px rgba(82, 82, 82, 0.14), 0px 0px 44px -4px rgba(82, 82, 82, 0.12);
                    backdrop-filter: blur(16px);
                    /* Note: backdrop-filter has minimal browser support */
                    border-radius: 20px;
                    padding: 10px;
                    cursor: pointer;
                     transition: all 1s;

                    .inner{
                       border-radius: 12px;
                       width: 100%;
                       height: 100%;
                    }
                    margin-right: 5px;
                    &:hover{
                    transform: translateY(-10px);
                }
                    
`
    export const subCardWrap = styled('ul')`
                  flex: 1;
                  height: 400px;
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;

                  
`
    export const SubCard = styled('li')`
                  cursor: pointer;
                  position: relative;
                  width: 200px;
                  height: 200px;
                  margin: 5px;
                background: rgba(255, 255, 255, 0.4);
                /* Grey/3 */
                transition: all 1s;
                border: 1px solid #C9C9C9;
                box-sizing: border-box;
                border-radius: 20px;
                padding: 10px;
                .inner{
                   width: 100%;
                   height: 100%;
                   border-radius: 12px;

                }
                &:hover{
                    transform: translateY(-10px);
                }
`
    export const Name = styled('div')`
        
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                padding-top: 10px;
                padding-left: 20px;
                font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 160%;
                /* or 38px */
                    background:
                 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)';
                color: #FFFFFF;
`
    export const SubCardExplore = styled('li')`
                  cursor: pointer;
                  position: relative;
                  width: 200px;
                  height: 200px;
                  margin: 5px;
               background: linear-gradient(180deg, #0059B3 0%, #007FFF 100%);;
               border-radius: 20px;
                .explore{
                    position:absolute ;
                    left: 10px;
                    bottom: 10px;
                    top: initial;
                 }
                 transition: all 1s;
                 &:hover{
                    transform: translateY(-10px);
                }
`
    export const ArrowWrap = styled('div')`
                 position: absolute;
                 top: 10px;
                 right: 10px;
                
`
    export const Button = styled('div')`
                width: 180px;
                height: 72px;
                left: 144px;
                top: 494px;
                /* Grey/0 */
                border: 1px solid #FFFFFF;
                box-sizing: border-box;
                border-radius: 20px;
                font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 160%;
                /* or 38px */
                
                display: flex;
                align-items: center;
                justify-content: center;
                
                /* Text/main */
              
                color: rgba(0, 0, 0, 0.88);
                 margin-top: 54px;
                 transition: all 0.1s;
                 cursor: pointer;
                 &:hover{
                     background: linear-gradient(96.34deg, #FF0000 0%, #FF006F 100%);
                     color: white;
                     border: 0;
                 }
`
    export const ExploreBtn = styled(Button)`
                background: linear-gradient(180deg, #0059B3 0%, #007FFF 100%);;
                color: white;
                margin-left: 10px;
                border: 0;
                &:hover{
                    opacity: 0.6;   
                 }
`
    export const WelcomeWrap = styled('div')`
                padding: 15px;
                width: 544px;
                height: 420px;
                background: #ffffff;
                border: 1px solid #EFEFEF;
                box-sizing: border-box;
                border-radius: 20px;
`
    export const LogoIcon = styled('img')`
                width: 100%;
                
`
    export const WelcomeTitle = styled('span')`

                  font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 36px;
                    line-height: 140%;
                    /* or 50px */
                    
                    display: flex;
                    align-items: center;
                     justify-content: center;
                    /* Text/main */
                    
                    color: rgba(0, 0, 0, 0.88);
                    
                    flex-grow: 0;
                    margin: 36px 0px;

`
    export const WelcomeDot = styled('span')`
                    color: #FF0000;
                    display: contents;
`
    export const Line = styled('div')`
                    width: 129px;
                    height: 12px;
                    left: 145px;
                    background: linear-gradient(90.5deg, #FF0000 0%, #FF006F 100%);
                    flex: none;
                    order: 1;
                    flex-grow: 0;
                    margin: 0px 12px;
`
}

