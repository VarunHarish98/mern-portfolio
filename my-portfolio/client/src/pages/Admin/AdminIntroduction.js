import React from 'react'
import { Form, message } from 'antd'
import AdminButton from './AdminButton'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'
import { serverAPIURI } from '../../utils/constants'


const AdminIntroduction = () => {
    const { portfolioData } = useSelector(store => store.root)
    const dispatch = useDispatch()

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            const resp = await axios.post(`${serverAPIURI}/api/v1/portfolio/update-intro`, {
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
            <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData?.intros}>
                <Form.Item name="welcomeText" label="Welcome Text">
                    <input placeholder='Welcome Text' />
                </Form.Item>
                <Form.Item name="firstName" label="First Name">
                    <input placeholder='First Name' />
                </Form.Item>
                <Form.Item name="middleName" label="Middle Name">
                    <input placeholder='Middle Name' />
                </Form.Item>
                <Form.Item name="lastName" label="Last Name">
                    <input placeholder='Last Name' />
                </Form.Item>
                <Form.Item name="introduction" label="Introduction">
                    <input placeholder='Introduction' />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <textarea placeholder='Description' />
                </Form.Item>
                <AdminButton />
            </Form>
        </div>
    )
}

export default AdminIntroduction
