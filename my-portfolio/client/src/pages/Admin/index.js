import React from 'react'
import Header from '../../Components/Header'
import { Tabs } from "antd";
import AdminAbout from './AdminAbout';
import AdminExperience from './AdminExperience';
import AdminIntroduction from './AdminIntroduction';
import AdminProjects from './AdminProjects';
import AdminEducation from './AdminEducation';
import AdminContact from './AdminContact';
import AdminOthers from './AdminOthers';

const Admin = () => {
    return (
        <div>
            <Header />
            <Tabs className='p-4'
                defaultActiveKey="1"
                items={[
                    {
                        label: 'Introduction',
                        key: '1',
                        children: <AdminIntroduction />
                    },
                    {
                        label: 'About',
                        key: '2',
                        children: <AdminAbout />
                    },
                    {
                        label: 'Experience',
                        key: '3',
                        children: <AdminExperience />
                    },
                    {
                        label: 'Projects',
                        key: '4',
                        children: <AdminProjects />
                    },
                    {
                        label: 'Education',
                        key: '5',
                        children: <AdminEducation />
                    },
                    {
                        label: 'Contact',
                        key: '6',
                        children: <AdminContact />
                    },
                    {
                        label: 'Others',
                        key: '7',
                        children: <AdminOthers />
                    }
                ]}
            />
        </div>
    )
}

export default Admin