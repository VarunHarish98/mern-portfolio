import { Form } from 'antd'
import React from 'react'
import AdminButton from './AdminButton'

const AdminEducation = () => {
    return (
        <div>
            <Form>
                <Form.Item name="title">
                    <label>Title</label>
                    <input placeholder='Title' />
                </Form.Item>
                <Form.Item name="year">
                    <label>Year</label>
                    <input placeholder='Year' />
                </Form.Item>
                <Form.Item name="degree">
                    <label>Degree</label>
                    <input placeholder='Degree' />
                </Form.Item>
                <Form.Item name="image">
                    <label>Image Url</label>
                    <input placeholder='Image Url' />
                </Form.Item>
                <Form.Item name="major">
                    <label>Major</label>
                    <input placeholder='Major' />
                </Form.Item>
                <Form.Item name="courses">
                    <label>Courses</label>
                    <input placeholder='Courses' />
                </Form.Item>
                <AdminButton/>
            </Form>
        </div>
    )
}

export default AdminEducation