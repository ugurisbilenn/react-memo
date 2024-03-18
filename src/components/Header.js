import React from 'react'

function Header({number,increment}) {
    console.log("Header Component re-rendered");
  return (
    <div>
       
      Header - {number}

      <br/>
      <button onClick={increment}>Click</button>
    </div>
  )
}

export default React.memo(Header)
