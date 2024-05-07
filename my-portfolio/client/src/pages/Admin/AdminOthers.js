import React from 'react'
import { Form, message } from 'antd'
import AdminButton from './AdminButton'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'
import { serverAPIURI } from '../../utils/constants'


const AdminOthers = () => {
    const { portfolioData } = useSelector(store => store.root)

    const dispatch = useDispatch()
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            const resp = await axios.post(`${serverAPIURI}/api/v1/portfolio/update-others`, {
                ...values, _id: portfolioData.others._id
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
            <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData?.others}>
                <Form.Item name="linkedinUrl" label="LinkedIn URL">
                    <input placeholder='First Description' />
                </Form.Item>
                <Form.Item name="githubUrl" label="Github Url">
                    <input placeholder='Last Description' />
                </Form.Item>
                <Form.Item name="email" label="Email">
                    <input placeholder='Email' />
                </Form.Item>
                <Form.Item name="resumeUrl" label="Resume URL">
                    <input placeholder='Resume URL' />
                </Form.Item>
                <AdminButton />
            </Form>
        </div>
    )
}

export default AdminOthers
