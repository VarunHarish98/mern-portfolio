import React from 'react'

const Button = ({title, type, padding, margin, height, color, border, others}) => {
  return (
    <div className='flex'>
        {console.log(margin, padding, others)}
        <button className={`${margin} ${padding} ${height} ${color} ${type} ${border} ${others} cursor-default`}>{title}</button>
    </div>
  )
}

export default Button