import React from 'react'

const Quote = ({quote}) => {
  return (
    <div>
      <p>{quote.quote}<br/>
      <span>-{quote.author}</span>
      </p>
    </div>
  )
}

export default Quote