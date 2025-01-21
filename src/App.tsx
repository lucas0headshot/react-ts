import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>contagem: {count}</button>
    </div>
  )
}

export default App
