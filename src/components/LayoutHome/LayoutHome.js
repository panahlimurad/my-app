import React from 'react'
import FooterAdmin from '../AdminComponents/FooterAdmin/FooterAdmin'
import HeaderAdmin from '../AdminComponents/HeaderAdmin/HeaderAdmin'

const LayoutHome = ({children}) => {
  return (
    <div>
        <HeaderAdmin/>
        {children}
        <FooterAdmin/>
    </div>
  )
}

export default LayoutHome