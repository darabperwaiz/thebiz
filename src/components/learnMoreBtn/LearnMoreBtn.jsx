// import { FaArrowRightLong } from "react-icons/fa6"
// import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"
import style from './learnmoreBTN.module.css'
import Link from "next/link"


export const LearnMoreBtn = ({text, url, color}) => {
    return (
        <>
        <Link className={style.link} style={{color: `${color}`, textDecoration: "none"}} href={url}>{text} <FaArrowRightLong /> </Link>
        </>
    )
}