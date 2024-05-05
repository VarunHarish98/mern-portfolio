import React from 'react'
import { Button, Form } from 'antd';
import AdminButton from './AdminButton';
const AdminExperience = () => {
    return (
        <div>
            <Form>
                <Form.Item name="period">
                    <label>Period</label>
                    <input placeholder='Period' />
                </Form.Item>
                <Form.Item name="company">
                    <label>Company</label>
                    <input placeholder='Company' />
                </Form.Item>
                <Form.Item name="role">
                    <label>Role</label>
                    <input placeholder='Role' />
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

export default AdminExperience