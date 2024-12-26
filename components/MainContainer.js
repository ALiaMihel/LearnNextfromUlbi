import A from '../components/A.js'
import Head from 'next/head.js'//это надо для
//создания тэга <head> и потом можно добавлять
//в него мета-тэги

const MainContainer = ({ children, keywords, title }) => {
    return (
        <>
            <Head>
                <meta keywords={'ulbiTV next.js '+keywords} />
                <title>{title}</title>
                <link rel='shortcut icon' href='/img/t.ico'/>
            </Head>

            <nav className='navbar'>
            {/* <Link  href='/' className='lnk'>Main__Page</Link>
            <Link legacyBehavior={true} href='users'><a className='lnk' >Users__Page</a></Link> */}
            <A href={'/'} text='HOME__PAGE'/>
            <A href={'/users'} text='USER_PAGE'/>
            </nav>

            <div>
                {children}
            </div>


            {/* <style jsx>
                {`  
                    .navbar{
                    // margin:0 auto;
                    display:flex;
                    justify-content:center;
                    font-size:24px;
                    gap:50px;
                    // width:80%;
                    border-radius:10px;
                    background:gray;
                    color:red;
                    }
                    .lnk{
                        text-decoration:none;
                        color:yellow;
                        text-shadow:0 0 10px orange;
                        transition:0.5s all linear;
                        &:hover{
                            font-size:32px;
                            transition:0.5s all linear;
                            position:relative;
                        }
                    }
                    // .navbar{
                    //     a{
                    //     text-decoration:none;
                    //     color:green;
                    //     };
                    // }
                `}
            </style> */}
        </>
    )
}

export default MainContainer