import React from 'react'
import { Button, Form } from 'antd';
import AdminButton from './AdminButton';

const AdminIntroduction = () => {
    return (
        <div>
            <Form>
                <Form.Item name="welcomeText">
                    <label>Welcome Text</label>
                    <input placeholder='Welcome Text' />
                </Form.Item>
                <Form.Item name="firstName">
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Item>
                <Form.Item name="middleName">
                    <label>Middle Name</label>
                    <input placeholder='Middle Name' />
                </Form.Item>
                <Form.Item name="lastName">
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Item>
                <Form.Item name="introduction">
                    <label>Introduction</label>
                    <input placeholder='Introduction' />
                </Form.Item>
                <Form.Item name="description">
                    <label>Description</label>
                    <textarea placeholder='Description' />
                </Form.Item>
                <AdminButton/>
            </Form>
        </div>
    )
}

export default AdminIntroduction