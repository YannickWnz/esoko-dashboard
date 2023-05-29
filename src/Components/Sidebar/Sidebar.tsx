import './sidebar.scss'
import {Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <h1>Dashboard</h1>
                <div className="sidebar-links-container">
                    <Link to='/'>Overview</Link>
                    <Link to='/organizations'>Organizations</Link>
                </div>
            </div>
        </div>
    )
}