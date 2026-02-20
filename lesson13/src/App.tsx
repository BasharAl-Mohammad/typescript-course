import { useState, useEffect, useCallback, type MouseEvent, type KeyboardEvent, useMemo, useRef  } from "react"

interface User {
  id: number,
  username: string,
}
type fibFunc = (n: number) => number
const fib: fibFunc = (n) => {
  if(n<2) return n
  return fib(n-1) + fib(n-2)
}

const myNum: number = 5



function App() {

  const [count,setCount] = useState<number>(0);
  const [users,setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null!);

  // if(!inputRef.current)
  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect (() => {
    console.log("Mounting")
    console.log("Users: ", users)

    return () => console.log("unmounting")
  }, [users])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent): void => setCount(prev => prev + 1 ), [])

  const result = useMemo<number>(() => fib(myNum),[myNum])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input type="text" name="" id="" ref={inputRef} />
    </div>
  )
}

export default App
