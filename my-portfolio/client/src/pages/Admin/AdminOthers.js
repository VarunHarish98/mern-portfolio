import React from 'react'
import { Button, Form } from 'antd';
import AdminButton from './AdminButton';
import { useSelector } from 'react-redux';

const AdminOthers = () => {
    const {portfolioData} = useSelector(store => store.root)

    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <div>
            <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData?.others}>
                <Form.Item name="linkedinUrl" label="LinkedIn URL">
                    <input placeholder='First Description' />
                </Form.Item>
                <Form.Item name="githubUrl" label="Github Url">
                    <input placeholder='Last Description' />
                </Form.Item>
                <Form.Item name="email" label="Email">
                    <input placeholder='Email' />
                </Form.Item>
                <Form.Item name="resumeUrl" label="Resume URL">
                    <input placeholder='Resume URL' />
                </Form.Item>
                <AdminButton />
            </Form>
        </div>
    )
}

export default AdminOthers