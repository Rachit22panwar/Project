import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const AdminDashboard = () => {
  return (
    <Layout>
      <div className='contain-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminMenu />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard