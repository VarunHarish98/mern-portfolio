import React from 'react'
import { Form, message } from 'antd'
import AdminButton from './AdminButton'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'
import { serverAPIURI } from '../../utils/constants'


const AdminContact = () => {
    const { portfolioData } = useSelector(store => store.root)
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            const resp = await axios.post(`${serverAPIURI}/api/v1/portfolio/update-contact`, {
                ...values, _id: portfolioData.intros._id
            })
            if (resp.data.success)
                message.success("Uploaded Successfully")
            else
                message.error("Failed to update data")
            dispatch(HideLoading())
        } catch (error) {
            dispatch(HideLoading())
            message.error("Failed to update data")
            console.log(error)
        }
    }

    return (
        <div>
            <Form layout="vertical" onFinish={onFinish} initialValues={portfolioData?.contact}>
                <Form.Item name="name" label="Name">
                    <input placeholder='Name' />
                </Form.Item>
                <Form.Item name="age" label="Age">
                    <input placeholder='Age' />
                </Form.Item>
                <Form.Item name="gender" label="Gender">
                    <input placeholder='Gender' />
                </Form.Item>
                <Form.Item name="email" label="Email">
                    <input placeholder='Email' />
                </Form.Item>
                <Form.Item name="phone" label="Phone">
                    <input placeholder='Phone' />
                </Form.Item>
                <Form.Item name="city" label="City">
                    <input placeholder='City' />
                </Form.Item>
                <AdminButton />
            </Form>
        </div>
    )
}

export default AdminContact
