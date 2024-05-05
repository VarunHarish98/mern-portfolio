import { Form } from 'antd'
import React from 'react'
import AdminButton from './AdminButton'

const AdminContact = () => {
    return (
        <div>
            <Form>
                <Form.Item name="name">
                    <label>Name</label>
                    <input placeholder='Name' />
                </Form.Item>
                <Form.Item name="age">
                    <label>Age</label>
                    <input placeholder='Age' />
                </Form.Item>
                <Form.Item name="gender">
                    <label>Gender</label>
                    <input placeholder='Gender' />
                </Form.Item>
                <Form.Item name="email">
                    <label>Email</label>
                    <input placeholder='Email' />
                </Form.Item>
                <Form.Item name="phone">
                    <label>Phone</label>
                    <input placeholder='Phone' />
                </Form.Item>
                <Form.Item name="city">
                    <label>City</label>
                    <input placeholder='City' />
                </Form.Item>
                <AdminButton/>
            </Form>
        </div>
    )
}

export default AdminContact