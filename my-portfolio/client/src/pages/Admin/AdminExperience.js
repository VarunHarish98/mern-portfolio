import React from 'react'
import { Button, Form } from 'antd';
import AdminButton from './AdminButton';
import { useSelector } from 'react-redux';
const AdminExperience = () => {
    const {portfolioData} = useSelector(store => store.root)

    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <div>
            <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData?.exp[0]}>
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
        </div>
    )
}

export default AdminExperience