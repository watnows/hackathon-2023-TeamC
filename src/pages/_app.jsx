import { AppProps } from "next/app";

import 'modern-css-reset/dist/reset.min.css'
import { Component } from "react";

function MyApp({Component,pageProps}){
    return <Component {...pageProps}/>
}

export default MyApp;