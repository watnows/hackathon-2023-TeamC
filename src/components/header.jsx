// import React, {useEffect} from "react";

// export default function Header() {
//     useEffect(() => {
//         document.title = "シューカツメールつくるくん"
//     }, []);

//     return (
//         <div style={{ width: '100%', height: '13%', float: 'right', background: '#8CD790', border: 'dashed 5px #2e8b57', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//         <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet"></link>
//         <div style={{ color: 'white', fontSize: '4vw', textAlign: 'center', letterSpacing: 8, fontFamily: 'Nico Moji'}}>シューカツメールつくるくん</div>
//         </div>
//     )
// }

import React from "react";
import { Helmet } from "react-helmet";

export default function Header() {
    return (
        <div style={{ width: '100%', height: '13%', float: 'right', background: '#8CD790', border: 'dashed 5px #2e8b57', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Helmet>
                <title>シューカツメールつくるくん</title>
                <meta name="description" content="就職活動時のメールをchatGPTが作成してくれる作業効率化アプリ" />
                <meta name="keywords" content="就活メール, シューカツメール, シューカツメールつくるくん, アプリ, React" />
                <meta http-equiv="Content-Language" content="ja" />
            </Helmet>

            <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet"></link>

            <div style={{ color: 'white', fontSize: '4vw', textAlign: 'center', letterSpacing: 8, fontFamily: 'Nico Moji' }}>シューカツメールつくるくん</div>
        </div>
    );
}
