import React from 'react'
import { Form, message } from 'antd'
import AdminButton from './AdminButton'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'

const AdminAbout = () => {
    const {portfolioData} = useSelector(store => store.root)
    const dispatch = useDispatch()

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            const tempSkills = values?.skills?.split(',')
            values.skills = tempSkills
            console.log(tempSkills)
            const resp = await axios.post('/api/v1/portfolio/update-about', {
                ...values, _id: portfolioData.about._id
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