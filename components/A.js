import Link from "next/link";
import style from '../styles/A.module.css'

export default function A({ text, href }) {
    return (
        <Link className={style.lnk} href={href}>{text}</Link>
    )
}