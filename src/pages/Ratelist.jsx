import React from 'react'

function Ratelist({ratelist}) {
  return (
    <div>
      {ratelist.std} {ratelist.sellRate} {ratelist.source} {ratelist.lastModifiedDate} {ratelist.prop} {ratelist.buyRate}
    </div>
  )
}

export default Ratelist