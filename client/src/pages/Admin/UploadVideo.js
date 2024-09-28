import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'

const UploadVideo = () => {
    return (
        <div>
      <Header title={"Upload-video"}/>
      <div className='contain-fluid m-3 p-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu />
                    </div>
                    <div className='col-md-9'>
                        <h1>Upload Video</h1>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
    )
}

export default UploadVideo