import React from 'react'

const Button = ({title, type, padding, margin, height, color, border, others}) => {
  return (
    <div className='flex'>
        <button className={`${margin} ${padding} ${height} ${color} ${type} ${border} ${others}`}>{title}</button>
    </div>
  )
}

export default Button