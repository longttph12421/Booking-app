import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Tại sao nên lựa chọn chúng tôi?</h2>
          <h5 className={classes.description}>
            Phòng khám mắt Mĩ Đình đã được nhiều tổ chức có uy tín trong và
            ngoài nước đánh giá cao và lựa chọn làm đối tác lâu dài bởi chất
            lượng sản phẩm và phong cách làm việc chuyên nghiệp của đội ngũ nhân
            viên. Với hơn 1000 khách hàng hài lòng về chúng tôi, Phòng khám mắt
            Mĩ Đình tự tin mang lại thành quả tốt đẹp cho đối tác của mình. Với
            chuyên môn và kinh nghiệm đang có, Phòng khám mắt Mĩ Đình mong mỏi
            và tự tin trở thành sự lựa chọn của Quý khách hàng.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Tư vấn miễn phí"
              description="Đội ngũ Tư vấn bằng cách đưa ra các gói dịch vụ phù hợp, tư vấn tận tình, cặn kẽ những gì khách hàng cần và sử dụng một quy trình nghiệp vụ đã được tối ưu hóa."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Dịch vụ nhanh chóng"
              description="Toàn bộ đội ngũ nhân viên của chúng tôi thấu hiểu một điều rằng thành công của chúng tôi nằm trong những giá trị mà chúng tôi đem lại cho khách hàng. Chính vì lẽ đó chúng tôi luôn cam kết mang lại cho khách hàng những giá trị nhiều hơn sự mong đợi."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Bảo mật thông tin"
              description="Chúng tôi sử dụng hệ thống cải tiến tối ưu, đưa vào quản lí thông tin khách hàng luôn luôn cam kết bảo mật thông tin khách hàng một cách tuyệt đối."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
