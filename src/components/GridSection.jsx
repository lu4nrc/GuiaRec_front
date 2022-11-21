import React from 'react'

const GridSection = (props) => {
  return (
        <div className='mx-3 lg:mx-8'>
    <div className='grid lg:grid-rows-2 lg:grid-flow-col gap-4'>
        {props.children}
        </div>
    </div>
  )
}

export default GridSection