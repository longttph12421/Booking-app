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
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
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
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="#"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <TwitterIcon className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="#"
            target="_blank"
            className={classes.navLink}
          >
            <FacebookIcon className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="#"
            target="_blank"
            className={classes.navLink}
          >
            <InstagramIcon className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
