/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
// @material-ui/icons
import { Apps } from "@material-ui/icons";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";
import Muted from "../../components/Typography/Muted";
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="DỊCH VỤ"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/doctor" className={classes.dropdownLink}>
              Đặt lịch khám
            </Link>,
            <Link to="/service" className={classes.dropdownLink}>
              Dịch vụ khám
            </Link>,
            <Link to="/product" className={classes.dropdownLink}>
              Sản phẩm
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/about" color="transparent" className={classes.navLink}>
          <span className={classes.text}>GIỚI THIỆU</span>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/doctor" color="transparent" className={classes.navLink}>
          <span className={classes.text}>ĐẶT LỊCH KHÁM</span>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/contact"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <span className={classes.text}>LIÊN HỆ</span>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        {auth && (
          <>
            <Button
              color="transparent"
              className={classes.navLink}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <AccountCircle className={classes.socialIcons} />
              <span className={classes.text}>MY ACCOUNT</span>
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <ListItemIcon>
                    <AccountCircle fontSize="small" />
                  </ListItemIcon>
                  <Muted variant="inherit">MY PROFILE</Muted>
                </MenuItem>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <ListItemIcon>
                    <LockOpenIcon fontSize="small" />
                  </ListItemIcon>
                  <Muted variant="inherit">LOGIN</Muted>
                </MenuItem>
              </Link>
              <Link to="/logout" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <ListItemIcon>
                    <LockIcon fontSize="small" />
                  </ListItemIcon>
                  <Muted variant="inherit">LOGOUT</Muted>
                </MenuItem>
              </Link>
            </Menu>
          </>
        )}
      </ListItem>
    </List>
  );
}
