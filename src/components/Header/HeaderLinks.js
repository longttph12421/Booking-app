/*eslint-disable*/
import React, { useEffect } from "react";
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
import * as toast from "../../common/toastHelper";
// @material-ui/icons
import { Apps } from "@material-ui/icons";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import HistoryIcon from "@material-ui/icons/History";
// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";
import Muted from "../../components/Typography/Muted";
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("userLogin"));
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  useEffect(() => {
    if (user == null || user == "undefined") {
      setAuth(false);
    }
    if (user != null || user != undefined) {
      setAuth(true);
    }
    console.log(user);
  }, []);

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
        {auth === true ? (
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
              <span className={classes.text}>TÀI KHOẢN</span>
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
                  <Muted variant="inherit">TÀI KHOẢN</Muted>
                </MenuItem>
              </Link>
              <Link to="/history" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <ListItemIcon>
                    <HistoryIcon fontSize="small" />
                  </ListItemIcon>
                  <Muted variant="inherit">LỊCH SỬ KHÁM</Muted>
                </MenuItem>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <ListItemIcon>
                    <LockOpenIcon fontSize="small" />
                  </ListItemIcon>
                  <Muted variant="inherit">ĐĂNG NHẬP</Muted>
                </MenuItem>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <MenuItem
                  onClick={() => {
                    toast.toastSuccess("Bạn đã đăng xuất thành công...");
                    localStorage.removeItem("userLogin");
                    localStorage.removeItem("TokenLogin");
                  }}
                >
                  <ListItemIcon>
                    <LockIcon fontSize="small" />
                  </ListItemIcon>
                  <Muted variant="inherit">ĐĂNG XUẤT</Muted>
                </MenuItem>
              </Link>
            </Menu>
          </>
        ) : (
          <Button href="/login" color="transparent" className={classes.navLink}>
            <LockOpenIcon fontSize="small" className={classes.socialIcons} />
            <span className={classes.text}>ĐĂNG NHẬP</span>
          </Button>
        )}
      </ListItem>
    </List>
  );
}
