import {useRef} from 'react'

function UseRefExample1() {
    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = e => {
        e.preventDefault()
        console.log(inputRef.current.value)
        inputRef.current.value='Come again'
        inputRef.current.style.background='red'
        paraRef.current.innerText='Thank you'
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" ref={inputRef} className='form-control mb-2' id='name' />
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>

        <p onClick={() => inputRef.current.focus()} ref={paraRef}></p>
    </div>

  )
}

export default UseRefExample1