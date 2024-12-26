import Link from 'next/link'
import style from '../styles/bigtext.module.css'

const Bt = ({href}) => {
    return (
        <div className={style.btc}>
            <h1>
                <Link target='blank' href={href}>BIG-TEXT</Link>
            </h1>
        </div>
    )
}

export default Bt