import React from 'react'

const YesNo = () => {
    const[toggleButton, setToggleButton]=React.useState(true)

    function toggleThis()
    {
        setToggleButton(prev=>!prev)
    }

  return (
    <>
    <h1>Toggle Yes/No Button</h1>
    <button onClick={toggleThis}>{toggleButton? "Yes": "No"}</button>
    </>
  )
}

export default YesNo