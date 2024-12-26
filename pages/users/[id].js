import { useRouter } from 'next/router'
import style from '../../styles/user.module.scss'
import MainContainer from '../../components/MainContainer'
import Link from 'next/link'

export default function User({user}) {
    const {query} = useRouter()

    return (
        <MainContainer title={user.name} keywords={user.name}>
            <h2 className={style.user}>
                ...User have ID:<span>{query.id}</span>
            </h2>
            <Link className={style.usname} href={''}>User name: {user.name}</Link>
        </MainContainer>
    )
}

//получаем уже конкретного пользователя
export async function getServerSideProps({params}) {//деструктуризация чтобы получить поле params из context,и у него получить id
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    console.log(user)
    return {
        props:{user},
    }
}
//для динамических маршрутов надо использовать
//ф-цию "getServerSideProps" или "getStaticPaths"
//"getServerSideProps"-параметром принимает context