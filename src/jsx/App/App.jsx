import { Member } from "../Member/Member"
import Scroll from "../Scroll/Scroll"
import Team from "../../Team.json"

function App() {
  return (
    <div>
      <Member members={Team} />
      <Scroll />
    </div>
  )
}

export default App
