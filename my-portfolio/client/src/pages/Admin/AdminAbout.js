import React from 'react'
import { Button, Form } from 'antd';
import AdminButton from './AdminButton';

const AdminAbout = () => {
    return (
        <div>
            <Form>
                <Form.Item name="url">
                    <label>URL</label>
                    <input placeholder='URL' />
                </Form.Item>
                <Form.Item name="techVerbiage">
                    <label>Verbiage</label>
                    <input placeholder='Verbiage for Tech skills' />
                </Form.Item>
                <Form.Item name="description_first">
                    <label>First Description</label>
                    <textarea placeholder='First Description' />
                </Form.Item>
                <Form.Item name="description_last">
                    <label>Last Description</label>
                    <textarea placeholder='Last Description' />
                </Form.Item>
                <Form.Item name="skills">
                    <label>Introduction</label>
                    <textarea placeholder='Skills' />
                </Form.Item>
                <AdminButton/>
            </Form>
        </div>
    )
}

export default AdminAbout