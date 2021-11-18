import React,{Component} from "react";
import '../../../theme/topnav.css';
import Dropdown from "../dropdown/DropDown";
import user_image from '../../../assets/img/apple-icon.png';
import { Link } from 'react-router-dom';
import user_menu from '../../../assets/routerAdmin/user_menus.json';

const curr_user = {
    display_name: 'Van Duc',
    image: user_image
}

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu =(item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)
class TopNav extends Component{
    render() {
        return(
            <div className='topnav'>
                <div className="topnav__search">
                    <input type="text" placeholder='Search here...' />
                    <i className='bx bx-search'></i>
                </div>
                <div className="topnav__right">
                    <div className="topnav__right-item">

                        <Dropdown
                            customToggle={() => renderUserToggle(curr_user)}
                            contentData={user_menu}
                            renderItems={(item, index) => renderUserMenu(item, index)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default TopNav;