import React from 'react'
import { Link } from "react-router-dom";


export const MainComponents = () => {
    return (
        <>

            <header className='topBar'>
                <h1>This is header</h1>
            </header>

            <aside className="leftSidebar">
                <ul>
                    <li className='menu_itme'>
                        <Link className='menu_link' to="/ForgotPassword" relative="path">Dashboard</Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}


