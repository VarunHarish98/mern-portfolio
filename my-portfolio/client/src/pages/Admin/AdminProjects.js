import React from 'react'
import { Form } from 'antd'
import AdminButton from './AdminButton'

const AdminProjects = () => {
    return (
        <div>
            <Form>
                <Form.Item name="link">
                    <label>Link</label>
                    <input placeholder='Link' />
                </Form.Item>
                <Form.Item name="image">
                    <label>Image Url</label>
                    <input placeholder='Image Url' />
                </Form.Item>
                <Form.Item name="title">
                    <label>Title</label>
                    <input placeholder='Title' />
                </Form.Item>
                <Form.Item name="technologies">
                    <label>Technologies</label>
                    <input placeholder='Technologies' />
                </Form.Item>
                <Form.Item name="description">
                    <label>Description</label>
                    <textarea placeholder='Description' />
                </Form.Item>
                <AdminButton />
            </Form>
        </div>
    )
}

export default AdminProjects