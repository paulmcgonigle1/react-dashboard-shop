import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <div>
            <div className="bg-sky-200">sidebar</div>
            <div className="bg-teal-200">header</div>
            <div>{<Outlet />}</div>
            <div className="bg-blue-100">footer</div>
        </div>
    )
}
