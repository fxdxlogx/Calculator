import React from 'react'

function result_display({evalValue,expression}) {
  let toPrint = expression ? expression : evalValue ;



  return (
    <div>
        <div className="result_box">
            {toPrint}
        </div>
    </div>
  )
}

export default result_display