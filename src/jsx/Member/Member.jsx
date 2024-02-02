import { MemberLi } from "../MemberLi/MemberLi"
import css from "./Member.module.css"

export const Member = ({ members }) => {
    return (
        <ul className={css.teamList}>
            {members.map(member => (
                <li className={css.teamLi} key={member.id}>
                    <MemberLi member={member} />
                </li>
            ))}
        </ul>
    )
}