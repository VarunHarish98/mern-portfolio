import React from 'react'
import { Form } from 'antd'
import AdminButton from './AdminButton'
import { useSelector } from 'react-redux'
// import store from '../../redux/store'

const AdminProjects = () => {
    const {portfolioData} = useSelector(store => store.root)
    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <div>
            <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData?.project[0]}>
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
        </div>
    )
}

export default AdminProjects