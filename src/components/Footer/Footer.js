/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import footerStyle from "../../assets/jss/material-kit-react/components/footerStyle"
//import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(footerStyle);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
              >
                GIỚI THIỆU
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
              >
                LIÊN HỆ
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
              >
                HỖ TRỢ
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , bản quyền{" "}
          <FavoriteIcon/> thuộc{" "}
          <a
            href="#"
            className={aClasses}
            target="_blank"
          >
            Team Dragon
          </a>{" "}        
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
