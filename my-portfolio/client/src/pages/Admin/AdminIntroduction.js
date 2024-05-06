import React from 'react'
import { Button, Form } from 'antd';
import AdminButton from './AdminButton';
import { useSelector } from 'react-redux';

const AdminIntroduction = () => {
    const { portfolioData } = useSelector(store => store.root)

    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <div>
            <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData?.intros}>
                <Form.Item name="welcomeText" label="Welcome Text">
                    <input placeholder='Welcome Text' />
                </Form.Item>
                <Form.Item name="firstName" label="First Name">
                    <input placeholder='First Name' />
                </Form.Item>
                <Form.Item name="middleName" label="Middle Name">
                    <input placeholder='Middle Name' />
                </Form.Item>
                <Form.Item name="lastName" label="Last Name">
                    <input placeholder='Last Name' />
                </Form.Item>
                <Form.Item name="introduction" label="Introduction">
                    <input placeholder='Introduction' />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <textarea placeholder='Description' />
                </Form.Item>
                <AdminButton />
            </Form>
        </div>
    )
}

export default AdminIntroduction