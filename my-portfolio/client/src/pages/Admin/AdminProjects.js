import React, { useState } from 'react'
import { Form, Modal, message } from 'antd'
import AdminButton from './AdminButton'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'
// import store from '../../redux/store'
import { serverAPIURI } from '../../utils/constants'


const AdminProjects = () => {
    const { portfolioData } = useSelector(store => store.root)
    const projects = portfolioData?.project
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            const {technologies} = values
            const tempTechnologies = technologies?.replaceAll(' ', '')?.split(',')
            values.technologies = tempTechnologies
            console.log(values)
            const resp = await axios.post(`${serverAPIURI}/api/v1/portfolio/add-project`, {
                values
            })
            if (resp.data.success)
                message.success("Uploaded Successfully")
            else
                message.error("Failed to update data")
            dispatch(HideLoading())
        } catch (error) {
            dispatch(HideLoading())
            message.error("Failed to update data")
            console.log(error)
        }
    }
    return (
        <div>
            <div className='justify-end flex flex-row sm:flex-col'>
                <button onClick={() => setShowModal(true)} className='bg-blue-500 text-white px-7 py-3 m-2 border-1 rounded-lg'>Add Projects</button>
            </div>
            <div className='grid grid-cols-4 border-black rounded-lg gap-5 sm:flex-row sm:grid-cols-1'>
                {projects.map((project, index) => (
                    <div key={index} className='border-2 px-2 py-2 flex flex-col'>
                        <div className='text-3xl font-semibold shadow'>{project.title}</div>
                        <div className='text-lg'>Technology - {project.technologies?.join(', ')}</div>
                        <div> <span className='font-semibold'>Website Link - </span>{project.link}</div>
                        <div> <span className='font-semibold'>Image - </span>{project.image}</div>
                        <div><span className='font-semibold'>Description - </span>{project.description}</div>
                        <div className='flex justify-end'>
                            <button className='bg-red-500 text-white px-7 py-3 m-2 border-1 rounded-lg'>Edit</button>
                            <button className='bg-black text-white px-5 py-3 m-2 border-1 rounded-lg'>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal open={showModal} onCancel={() => setShowModal(false)} footer={false} title='Projects'>
                <Form onFinish={onFinish} layout="vertical">
                    <Form.Item name="link" label="Link">
                        <input placeholder='Link' />
                    </Form.Item>
                    <Form.Item name="image" label="Image Url">
                        <input placeholder='Image Url' />
                    </Form.Item>
                    <Form.Item name="title" label="Title">
                        <input placeholder='Title' />
                    </Form.Item>
                    <Form.Item name="technologies" label="Technologies">
                        <input placeholder='Technologies' />
                    </Form.Item>
                    <Form.Item name="description" label="Description">
                        <textarea placeholder='Description' />
                    </Form.Item>
                    <AdminButton />
                </Form>
            </Modal>
        </div>
    )
}

export default AdminProjects
