import React from 'react'
import { Button, Form } from 'antd';
import AdminButton from './AdminButton';
import { useSelector } from 'react-redux';

const AdminAbout = () => {
    const {portfolioData} = useSelector(store => store.root)

    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <div>
            <Form layout="vertical" onFinish={onFinish} initialValues={portfolioData?.about}>
                <Form.Item name="url" label="URL" >
                    <input placeholder='URL' />
                </Form.Item>
                <Form.Item name="techVerbiage" label="Verbiage">
                    <input placeholder='Verbiage for Tech skills' />
                </Form.Item>
                <Form.Item name="description_first" label="First Description">
                    <textarea placeholder='First Description' />
                </Form.Item>
                <Form.Item name="description_last" label="Last Description">
                    <textarea placeholder='Last Description' />
                </Form.Item>
                <Form.Item name="skills" label="Introduction">
                    <textarea placeholder='Skills' />
                </Form.Item>
                <AdminButton/>
            </Form>
        </div>
    )
}

export default AdminAbout