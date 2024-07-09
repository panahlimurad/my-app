import FooterAdmin from '@/components/AdminComponents/FooterAdmin/FooterAdmin'
import HeaderAdmin from '@/components/AdminComponents/HeaderAdmin/HeaderAdmin'
import React from 'react'

const Adminlayout = ({children}) => {
  return (
    <div>
        <HeaderAdmin/>
        {children}
        <FooterAdmin/>
    </div>
  )
}

export default Adminlayout