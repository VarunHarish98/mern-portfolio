import React, { useState } from 'react'
import { Form, Modal, message } from 'antd'
import AdminButton from './AdminButton'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'

const AdminEducation = () => {
    const { portfolioData } = useSelector(store => store.root)
    const { education } = portfolioData
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            console.log(values)
            const resp = await axios.post(`${serverAPIURI}/api/v1/portfolio/add-education`, {
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
            <div className='justify-end flex flex-row sm:flex-col sm:w-full'>
                <button onClick={() => setShowModal(true)} className='bg-blue-500 text-white px-7 py-3 m-2 border-1 rounded-lg'>Add Education</button>
            </div>
            <div className='grid grid-cols-4 rounded-lg gap-5 sm:grid-cols-1'>
                {education.map((edu, index) => (
                    <div key={index} className='border-2 px-2 py-2 flex flex-col'>
                        <div className='text-3xl sm:text-2xl font-semibold shadow'>{edu.title}</div>
                        <div className='text-lg'>Year - {edu.year}</div>
                        <div> <span className='font-semibold'>Degree - </span>{edu.degree}</div>
                        <div> <span className='font-semibold'>Image - </span>{edu.image}</div>
                        <div> <span className='font-semibold'>Major - </span>{edu.major}</div>
                        <div> <span className='font-semibold'>Courses - </span>{edu.courses}</div>
                        <div className='flex justify-end'>
                            <button className='bg-red-500 text-white px-7 py-3 m-2 border-1 rounded-lg'>Edit</button>
                            <button className='bg-black text-white px-5 py-3 m-2 border-1 rounded-lg'>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal open={showModal} onCancel={() => setShowModal(false)} footer={false} title='Education'>
                <Form onFinish={onFinish} layout="vertical">
                    <Form.Item name="title" label="Title">
                        <input placeholder='Title' />
                    </Form.Item>
                    <Form.Item name="year" label="Year">
                        <input placeholder='Year' />
                    </Form.Item>
                    <Form.Item name="degree" label="Degree">
                        <input placeholder='Degree' />
                    </Form.Item>
                    <Form.Item name="image" label="Image Url">
                        <input placeholder='Image Url' />
                    </Form.Item>
                    <Form.Item name="major" label="Major">
                        <input placeholder='Major' />
                    </Form.Item>
                    <Form.Item name="courses" label="Courses">
                        <input placeholder='Courses' />
                    </Form.Item>
                    <AdminButton />
                </Form>
            </Modal>
        </div>
    )
}

export default AdminEducation
