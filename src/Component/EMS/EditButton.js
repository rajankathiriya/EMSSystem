import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function EditButton(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div  >
            <Button variant="outlined" onClick={handleClickOpen}>
                Edit
            </Button>
            <div >
                <Dialog open={open} onClose={handleClose} className='w-100' >
                    <DialogTitle>Edit Form</DialogTitle>
                    <TextField
                        label='Title'
                        variant='filled'
                        // value={props.id.title}
                        // onChange={myHandler}
                        // name='title'
                        className="mx-4" style={{ width: "400px" }}>
                    </TextField><br />
                    <TextField
                        label='Firstname'
                        variant='filled'
                        // onChange={myHandler}
                        // name='firstName'
                        className="mx-4" style={{ width: "400px" }}>
                    </TextField><br />
                    <TextField
                        label='Lastname'
                        variant='filled'
                        // onChange={myHandler}
                        // name='lastName'
                        className="mx-4" style={{ width: "400px" }}>
                    </TextField><br />
                    <TextField
                        label='Email'
                        variant='filled'
                        // onChange={myHandler}
                        // name='email'
                        className="mx-4" style={{ width: "400px" }}
                        type='email'>
                    </TextField><br />
                    <TextField
                        label='Password'
                        variant='filled'
                        // onChange={myHandler}
                        // name='password'
                        className="mx-4" style={{ width: "400px" }}
                        type='password'>
                    </TextField><br />
                    <TextField
                        label='Confirm password'
                        variant='filled'
                        // onChange={myHandler}
                        // name='confirmPassword'
                        className="mx-4" style={{ width: "400px" }}
                        type='password'>
                    </TextField><br />

                    <DialogActions>
                        <Button onClick={handleClose}>Save</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}