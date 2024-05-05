import React from 'react'
import { Button, Form } from 'antd';
import AdminButton from './AdminButton';

const AdminOthers = () => {
    return (
        <div>
            <Form>
                <Form.Item name="linkedinUrl">
                    <label>LinkedIn URL</label>
                    <input placeholder='First Description' />
                </Form.Item>
                <Form.Item name="githubUrl">
                    <label>Github Url</label>
                    <input placeholder='Last Description' />
                </Form.Item>
                <Form.Item name="email">
                    <label>Email</label>
                    <input placeholder='Email' />
                </Form.Item>
                <Form.Item name="resumeUrl">
                    <label>Resume URL</label>
                    <input placeholder='Resume URL' />
                </Form.Item>
                <AdminButton/>
            </Form>
        </div>
    )
}

export default AdminOthers