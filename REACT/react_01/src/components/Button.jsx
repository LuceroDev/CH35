import '../App.css'

const Button = () => {

    return (
        <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </>
    )
}

export default App
 