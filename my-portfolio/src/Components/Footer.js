import React from 'react'
import { footerContent, headerName } from '../utils/constants'

export const Footer = () => {
    return (
        <footer>
            <div className='flex items-center justify-center '>{footerContent}<br />{headerName}
            </div>
        </footer>
    )
}
