import React, { useState } from 'react'
import { Form, Modal, message } from 'antd'
import AdminButton from './AdminButton'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'

const AdminExperience = () => {
    const { portfolioData } = useSelector(store => store.root)
    const experience = portfolioData?.exp
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            console.log(values)
            const resp = await axios.post('/api/v1/portfolio/add-experience', {
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
        <div className='sm:flex sm:flex-col'>
            <div className='justify-end flex flex-row sm:flex-col sm:w-full'>
                <button onClick={() => setShowModal(true)} className='bg-blue-500 text-white px-7 py-3 m-2 border-1 rounded-lg'>Add Experience</button>
            </div>
            <div className='grid grid-cols-4 rounded-lg gap-5 sm:grid-cols-1'>
                {experience.map((exp, index) => (
                    <div key={index} className='border-2 px-2 py-2 flex flex-col'>
                        <div className='text-3xl font-semibold shadow'>{exp.company}</div>
                        <div className='text-lg'>Period - {exp.period}</div>
                        <div> <span className='font-semibold'>Role - </span>{exp.role}</div>
                        <div> <span className='font-semibold'>Description - </span>{exp.description}</div>
                        <div className='flex justify-end'>
                            <button className='bg-red-500 text-white px-7 py-3 m-2 border-1 rounded-lg'>Edit</button>
                            <button className='bg-black text-white px-5 py-3 m-2 border-1 rounded-lg'>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal open={showModal} onCancel={() => setShowModal(false)} footer={false} title='Experience' >
                <Form onFinish={onFinish} layout='vertical'>
                    <Form.Item name="period" label="Period">
                        <input placeholder='Period' />
                    </Form.Item>
                    <Form.Item name="company" label="Company">
                        <input placeholder='Company' />
                    </Form.Item>
                    <Form.Item name="role" label="Role">
                        <input placeholder='Role' />
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

export default AdminExperience