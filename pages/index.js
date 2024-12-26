// https://youtu.be/Onn38VeEAC8?si=eRvDSzWgxgVhAzlI
import MainContainer from '../components/MainContainer.js'
import Bt from '../components/bigtext.js'
import Head from 'next/head.js'//это надо для
//создания тэга <head> и потом можно добавлять
//в него мета-тэги


const Index = () => {
    return (
        <>//оптимизация для поисковых роботов - основная задача,которую решает NEXT
            <MainContainer title={"Main Page"} keywords={'Main Page'}>
                <h1 className="titletext">Home__Page</h1>
                <Bt href={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.davno.ru%2Fcards%2Fng%2Fnoviy-god-2200.html&psig=AOvVaw0GCwuH2np6nnhMHVQUOH7d&ust=1735101541143000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKC11pnLv4oDFQAAAAAdAAAAABAP'} />
            </MainContainer>
        </>
    )
}
export default Index