import { Form } from 'antd'
import React from 'react'
import AdminButton from './AdminButton'
import { useSelector } from 'react-redux'

const AdminEducation = () => {
    const {portfolioData} = useSelector(store => store.root)

    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <div>
            <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData?.education[0]}>
                <Form.Item name="title" label="Title">
                    <input placeholder='Title' />
                </Form.Item>
                <Form.Item name="year" label="Year">
                    <input placeholder='Year' />
                </Form.Item>
                <Form.Item name="degree" label="Degree">
                    <input placeholder='Degree' />
                </Form.Item>
                <Form.Item name="image" label="Image Url">
                    <input placeholder='Image Url' />
                </Form.Item>
                <Form.Item name="major" label="Major">
                    <input placeholder='Major' />
                </Form.Item>
                <Form.Item name="courses" label="Courses">
                    <input placeholder='Courses' />
                </Form.Item>
                <AdminButton />
            </Form>
        </div>
    )
}

export default AdminEducation