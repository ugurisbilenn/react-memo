import React from 'react'

function Header({number,data}) {
    console.log("Header Component re-rendered");
  return (
    <div>
       
      Header - {number}

      <br/>
      {JSON.stringify(data)}
    </div>
  )
}

export default React.memo(Header)
