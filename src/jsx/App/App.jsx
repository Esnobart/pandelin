import { Member } from "../Member/Member"
import Team from "../../Team.json"

function App() {
  return (
    <div>
      <Member members={Team} />
    </div>
  )
}

export default App
