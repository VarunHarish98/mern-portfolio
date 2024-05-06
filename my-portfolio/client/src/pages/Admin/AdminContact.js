import { Form } from 'antd'
import React from 'react'
import AdminButton from './AdminButton'
import { useSelector } from 'react-redux'

const AdminContact = () => {
    const { portfolioData } = useSelector(store => store.root)

    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <div>
            <Form layout="vertical" onFinish={onFinish} initialValues={portfolioData?.contact}>
                <Form.Item name="name" label="Name">
                    <input placeholder='Name' />
                </Form.Item>
                <Form.Item name="age" label="Age">
                    <input placeholder='Age' />
                </Form.Item>
                <Form.Item name="gender" label="Gender">
                    <input placeholder='Gender' />
                </Form.Item>
                <Form.Item name="email" label="Email">
                    <input placeholder='Email' />
                </Form.Item>
                <Form.Item name="phone" label="Phone">
                    <input placeholder='Phone' />
                </Form.Item>
                <Form.Item name="city" label="City">
                    <input placeholder='City' />
                </Form.Item>
                <AdminButton />
            </Form>
        </div>
    )
}

export default AdminContact