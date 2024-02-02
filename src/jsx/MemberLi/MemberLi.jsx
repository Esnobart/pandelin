import css from "./MemberLi.module.css"
import icon from "../../img/member.png"

export const MemberLi = ({ member: { name, role } }) => {
    return (
        <div className={css.memberContainer}>
            <img src={icon} className={css.image}></img>
            <h1 className={css.name}>{name}</h1>
            <p className={css.role}>{role}</p>
        </div>
    )
}