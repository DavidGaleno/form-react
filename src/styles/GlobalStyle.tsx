import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Barlow', sans-serif;
    color:#333
    }
    p{
        color:#777;
    }
    body{
        background-color:#f9fafc
    }
    html,body{
        font-size:62.5%;
    }   
`