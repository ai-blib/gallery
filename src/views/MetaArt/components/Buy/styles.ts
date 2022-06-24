import styled from "styled-components";

export namespace BuyStyles {
    export const Container = styled('div')`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

    `
    export const Content = styled('section')`
      width: 800px;
      height: 100%;
      padding: 20px;
      background: ${({theme}) => 'rgb(25, 25, 25)'};
      box-sizing: border-box;
    `
    export const GalleryWrap = styled('section')`
      width: 100%;
      height: 100%;
      background: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
    `
    export const List = styled('ul')`
      width: 100%;
      height: 60px;
      display: flex;
    `
    export const Item = styled('li')`
      flex: 1;
      padding: 8px 4px;
      background: rgba(255, 255, 255, 0.09);
      border-radius: 4px;
      transition: all 0.3s ease 0s;
      margin: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    `
    export const Name = styled('div')`
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 160%;
      color: #FFFFFF;

    `
    export const Title = styled('h2')`
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 36px;
      line-height: 260%;
      /* identical to box height, or 58px */
      text-align: left;
      /* Text/main */
      color: white;`
    export const SubTitle = styled(Title)`
      font-size: 20px;

    `
    export const Loading = styled("div")`
      width: 100%;
      height: 100%;
      position: relative;
      background: #030009;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM1IiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDEzNSAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI2ZmZiI+CiAgICA8cmVjdCB5PSIxMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjEyMCIgcng9IjYiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImhlaWdodCIKICAgICAgICAgICAgIGJlZ2luPSIwLjVzIiBkdXI9IjFzIgogICAgICAgICAgICAgdmFsdWVzPSIxMjA7MTEwOzEwMDs5MDs4MDs3MDs2MDs1MDs0MDsxNDA7MTIwIiBjYWxjTW9kZT0ibGluZWFyIgogICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ieSIKICAgICAgICAgICAgIGJlZ2luPSIwLjVzIiBkdXI9IjFzIgogICAgICAgICAgICAgdmFsdWVzPSIxMDsxNTsyMDsyNTszMDszNTs0MDs0NTs1MDswOzEwIiBjYWxjTW9kZT0ibGluZWFyIgogICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSIzMCIgeT0iMTAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxMjAiIHJ4PSI2Ij4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiCiAgICAgICAgICAgICBiZWdpbj0iMC4yNXMiIGR1cj0iMXMiCiAgICAgICAgICAgICB2YWx1ZXM9IjEyMDsxMTA7MTAwOzkwOzgwOzcwOzYwOzUwOzQwOzE0MDsxMjAiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJ5IgogICAgICAgICAgICAgYmVnaW49IjAuMjVzIiBkdXI9IjFzIgogICAgICAgICAgICAgdmFsdWVzPSIxMDsxNTsyMDsyNTszMDszNTs0MDs0NTs1MDswOzEwIiBjYWxjTW9kZT0ibGluZWFyIgogICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSI2MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE0MCIgcng9IjYiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImhlaWdodCIKICAgICAgICAgICAgIGJlZ2luPSIwcyIgZHVyPSIxcyIKICAgICAgICAgICAgIHZhbHVlcz0iMTIwOzExMDsxMDA7OTA7ODA7NzA7NjA7NTA7NDA7MTQwOzEyMCIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InkiCiAgICAgICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMXMiCiAgICAgICAgICAgICB2YWx1ZXM9IjEwOzE1OzIwOzI1OzMwOzM1OzQwOzQ1OzUwOzA7MTAiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9IjkwIiB5PSIxMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjEyMCIgcng9IjYiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImhlaWdodCIKICAgICAgICAgICAgIGJlZ2luPSIwLjI1cyIgZHVyPSIxcyIKICAgICAgICAgICAgIHZhbHVlcz0iMTIwOzExMDsxMDA7OTA7ODA7NzA7NjA7NTA7NDA7MTQwOzEyMCIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InkiCiAgICAgICAgICAgICBiZWdpbj0iMC4yNXMiIGR1cj0iMXMiCiAgICAgICAgICAgICB2YWx1ZXM9IjEwOzE1OzIwOzI1OzMwOzM1OzQwOzQ1OzUwOzA7MTAiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9IjEyMCIgeT0iMTAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxMjAiIHJ4PSI2Ij4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiCiAgICAgICAgICAgICBiZWdpbj0iMC41cyIgZHVyPSIxcyIKICAgICAgICAgICAgIHZhbHVlcz0iMTIwOzExMDsxMDA7OTA7ODA7NzA7NjA7NTA7NDA7MTQwOzEyMCIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InkiCiAgICAgICAgICAgICBiZWdpbj0iMC41cyIgZHVyPSIxcyIKICAgICAgICAgICAgIHZhbHVlcz0iMTA7MTU7MjA7MjU7MzA7MzU7NDA7NDU7NTA7MDsxMCIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9yZWN0Pgo8L3N2Zz4K');
      background-repeat: no-repeat;
      background-position: center 50% !important;
    `
    export const NftDisplay = styled('div')<{ src?: string }>`
      transition: all 0.2s;
      width: 600px;
      min-height: 100px;
      max-width: 100%;
      max-height: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border-radius: 16px;
      overflow: hidden;

      .inner {
             width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            border-radius: initial;
        }
`

}
