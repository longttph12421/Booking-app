import styles from "../../../assets/jss/material-kit-react/views/components.js";
import { CssBaseline } from "@material-ui/core";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
//import ProductSlider from "./ProductSlider";
import SliderDoctor from "./SliderDoctor";
import TipSlider from "./TipSlider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

function Index() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem md={12} className={"mt-5 " + classes.textCenter}>
        <h2>BÁC SĨ NỔI BẬT TUẦN QUA</h2>
        <SliderDoctor />
      </GridItem>
      <CssBaseline />
      {/* <GridItem md={12} className={"mt-5 " + classes.textCenter}>
        <h2>SẢN PHẨM BÁN CHẠY</h2>
        <ProductSlider />
      </GridItem> */}

      <GridItem md={12} className={"mt-5 " + classes.textCenter}>
        <h2>CẨM NANG</h2>
        <TipSlider />
      </GridItem>
    </GridContainer>
  );
}
export default Index;
