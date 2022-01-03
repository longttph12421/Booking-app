// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import Slide from "@material-ui/core/Slide";
// import IconButton from "@material-ui/core/IconButton";
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogActions from "@material-ui/core/DialogActions";
// // @material-ui/icons
// import Close from "@material-ui/icons/Close";
// // core components
// import GridContainer from "../Grid/GridContainer";
// import GridItem from "../Grid/GridItem";
// import Button from "../CustomButtons/Button";
// import { closeModal } from "../../redux/reducer/UiSlider";
// import javascriptStyles from "../../assets/jss/material-kit-react/views/componentsSections/javascriptStyles";
// import { useState } from "react";

// const useStyles = makeStyles(javascriptStyles);

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });

// Transition.displayName = "Transition";
// const CustomModal = ({ title, modalBody, onSubmit }) => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const classicModal = useSelector((state) => state.UI.modal);

//   const onClose = () => {
//     dispatch(closeModal());
//   };

//   return (
//     <GridContainer xs={12} sm={12}>
//       <GridItem xs={12} sm={12} md={6} lg={4}>
//         <Dialog
//           classes={{
//             root: classes.center,
//             paper: classes.modal,
//           }}
//           fullWidth={true}
//           maxWidth="sm" 
//           open={classicModal}
//           TransitionComponent={Transition}
//           keepMounted
//           onClose={onClose}
//           aria-labelledby="classic-modal-slide-title"
//           aria-describedby="classic-modal-slide-description"
//         >
//           <DialogTitle
//             id="classic-modal-slide-title"
//             disableTypography
//             className={classes.modalHeader}
//           >
//             <IconButton
//               className={classes.modalCloseButton}
//               key="close"
//               aria-label="Close"
//               color="inherit"
//               onClick={onClose}
//             >
//               <Close className={classes.modalClose} />
//             </IconButton>
//             <h4 className={classes.modalTitle}>{title}</h4>
//           </DialogTitle>
//           <DialogContent
//             id="classic-modal-slide-description"
//             className={classes.modalBody}
//           >
//             {modalBody}
//           </DialogContent>
//           <DialogActions className={classes.modalFooter}>
//             <Button color="transparent" simple  onClick={onSubmit}>
//               Submit
//             </Button>
//             <Button onClick={onClose} color="danger" simple>
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </GridItem>
//     </GridContainer>
//   );
// };
// export default CustomModal;
