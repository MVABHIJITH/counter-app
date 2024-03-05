import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <h2 className=' text-center mt-5 fw-bolder'>COUNTER APP</h2>

      <div style={{ height: "80vh" }} className='d-flex justify-content-center'>
        <Counter />
      </div>
    </>
  )
}

export default App
