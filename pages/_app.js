import '../styles/global.css'

// export default function RootLayout({ children }) {
//     return (
//     <html lang="en">
//         <body>{children}</body>
//     </html>
//     )
// }

// This default export is required in a new `pages/_app.js` file
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
//этот файл специально для подключения глобальных стилей

//будь внимателен СЛЕДИ ЗА ПУТЯМИ
//ЕСЛИ global.css в корне то надо .. две точки 
//если в тойже папке то . одна точка
//КОРРЕКТНО ПИШИ ПУТИ!!!!