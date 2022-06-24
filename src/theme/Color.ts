
export const defaultThem = {
    buttonColor: "linear-gradient(108.08deg, #3D52F4 0%, #192985 100%)",
    bodyBackground: "#ffffff",
    mainBackground: "#007FFF",

    gradientBgColor: "linear-gradient(315deg, #0059B3 0%, #007FFF 100%)",

    subBackground: ' #ECEFF1', // son bg

    grayBackground: "#EFEFEF",
    grayButton: "#C4C4C4",
    grayFont: "#696969",
    //basic
    fontcolor: "#000000",
    spanColor: "#888E8F",
    borderColor: "#EFEFEF",
    mainColor: "#007FFF",
    //
    whiteBg: '#fff',
    tabBorderColor: "#C9C9C9",

    selectGradient: "linear-gradient(90deg, #FF0000 41.67%, #FF8080 100%) 1",
    buttonBg: 'linear-gradient(315deg, #0059B3 0%, #007FFF 100%)',

    lightGradientColor: 'linear-gradient(to right, #007FFF, #0059B2)',
    //card
    cardBorder: "rgb(229, 232, 235)",

    //placeHolder
    grayColor: "#696969",
    //
    imgUploadBorder: "#000000",

    whiteFont: 'white',
    hover_shadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
};
export const SIZE = {
    // card size
    cardWidth: 480,
    cardHeight: 115,
};
export const Theme: any =()=>( { ...defaultThem, ...SIZE });
