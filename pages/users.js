import Link from "next/link"
import { useState } from 'react'
import MainContainer from "../components/MainContainer"


const Users = ({users}) => {
    // const [users, setState] = useState([
    //     {id:1,name:'Pedro'},
    //     {id:2,name:'Ivan'},
    //     {id:3,name:'Hulio'},
    //     {id:4,name:'Gansales'},
    // ])

    return (
        <MainContainer title={"Users"} keywords={'USERS'}>
            
            <h1 className="titletext">LIst of Users</h1>
            <ul className="listusers">
                {
                    users.map(user =>
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                {user.name}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </MainContainer>
    )
}
export default Users

//так делать запрос на сервер
export async function getStaticProps(contexst) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()
//получаем массив пользователей
    return {
        props:{users},//will be passed to the page component as props
    }//     его ^^^ надо передать аргументом
}//     в ф-цию Users