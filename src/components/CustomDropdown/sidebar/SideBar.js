import React from "react";
import sidebar_items from '../../../assets/routerAdmin/router_admin.json';
import {Link} from "react-router-dom";
import '../../../theme/sidebar.css'
import logo from '../../../assets/img/apple-icon.png'

const SidebarItem = props => {
    const active = props.active ? 'active' : ''
    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const SideBar = props => {
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname);

        return (
            <div className='sidebar'>
                <div className="sidebar__logo">
                    <img src={logo} alt="company logo" />
                </div>
                {
                    sidebar_items.map((item, index) => (
                        <Link to={item.route} key={index}>
                            <SidebarItem
                                title={item.display_name}
                                icon={item.icon}
                                active={index === activeItem}
                            />

                        </Link>
                    ))
                }
            </div>
        );


}
export default SideBar;