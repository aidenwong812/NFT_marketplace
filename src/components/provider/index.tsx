"use client"
import React from 'react';
import SettingModalProvider from '@/context/communitysetting';

const Provider = ({children}:{children: React.ReactNode}) => {
    return (
        <SettingModalProvider>{children}</SettingModalProvider>
    )
}

export default Provider;