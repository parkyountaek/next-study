import Link from "next/link";

const App = () => {
  return (
    <div>
      <div>
        <h2>Link to 'tomato' Page</h2>
        <Link href="/tomato">
          <a>Move to '/tomato'</a>
        </Link>
      </div>
      <div>
        <h2>Link to 'tomato' Page</h2>
        <Link href="/vegetable/potato">
          <a>Move to '/vegetable/potato'</a>
        </Link>
      </div>
    </div>
  )
}

export default App;