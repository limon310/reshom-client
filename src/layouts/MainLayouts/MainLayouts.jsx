import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayouts = () => {
    return (
        <div className='bg-base-200'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-60px)]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayouts;