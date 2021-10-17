import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { useState } from "react";

const App = () => {
  const [username, setUserName] = useState("");
  return (
    <div>
      <label>
        username
        <input value={username} onChange={(e)=>setUserName(e.target.value)}/>
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/users/${username}`}>
        <a>검색하기</a>
      </Link>
    </div>
  )
}

export default App;