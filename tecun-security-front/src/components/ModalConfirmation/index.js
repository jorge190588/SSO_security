import React, { useEffect } from 'react';
import {Button, 
        Dialog, DialogActions,DialogContent, DialogContentText, DialogTitle, 
        Slide
        } from '@material-ui/core/';
 
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal(props) { 
    let buttonYes = React.createRef();
    useEffect(() => {
        if (buttonYes.current!==null)
            buttonYes.current.focus();
    });

    return (
        <div>
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=>props.closeModal(false)}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
            <DialogTitle id="alert-dialog-slide-title">{"Mensaje de confirmación"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {props.message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={()=>props.closeModal(true)} color="primary" ref={buttonYes}>Si</Button>
                <Button variant="contained" onClick={()=>props.closeModal(false)} color="secondary">No</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}