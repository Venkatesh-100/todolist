import React,{useState,useEffect} from "react";
import { Box,Typography,InputBase,Button,Modal, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import '../App.css'
import axios from "axios";

const DOMAIN = "http://localhost:5000";

const Create = () => {
    const [title, setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [startDate , setStartDate] = useState(null);
    const [endDate , setEndDate] = useState(null);
    const [priority,setPriority] = useState(false);

    const [openCreate,setOpenCreate] = useState(false);

    const clear =() => {
        setTitle("");
        setDescription("");
        setStartDate(null);
        setEndDate(null);
        setPriority(false);
        setOpenCreate(false);
    }

    const handleSubmit =() => {
        const new_todo = {
            title: title,
            description: description,
            startDate: startDate,
            endDate: endDate,
            priority: priority,
        }    
        console.log(new_todo)
        axios.post(`${DOMAIN}` , new_todo)
            .then(resp => {
                window.alert("saved");
                clear();
                window.location.href="/"
            })
            .catch(err => {
                window.alert("some error happened");
            })
        setTitle("");
    }
    
const createBox = ( 
    <Box style={style}>
        <Typography variant="h5" style={{textDecoration: 'underline',marginBottom: '10px'}}>Add new Item into list</Typography>
        <FormGroup>
            <InputBase 
                placeholder="Enter the task here"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                style={inputs}
            />
            <InputBase 
                placeholder="description"
                value={description}
                margin
                onChange={(e)=>setDescription(e.target.value)}
                style={inputs}
            />
            
            <Box display='flex' >
                <Box marginTop='auto' marginBottom='auto' marginRight='10px'>
                    <Typography variant="h8">Start Date</Typography>
                </Box>
                <InputBase 
                value={startDate}
                type='date'
                onChange={(e)=>setStartDate(e.target.value)}
            />
            </Box>
            <Box display='flex'>
                <Box marginTop='auto' marginBottom='auto' marginRight='16px'>
                    <Typography  variant="h8">End Date</Typography>
                </Box>
                <InputBase 
                    value={endDate}
                    type='date'
                    onChange={(e)=>setEndDate(e.target.value)}
                />
            </Box>
            <FormControlLabel label='Make Priority' control={<Checkbox style={{color: '#2f2f2f'}} onChange={()=>setPriority(!priority)}/>}/>
            
            <Button 
                size="medium" 
                onClick={handleSubmit}
                style={{backgroundColor: '#c620a7',color: '#fff',width: '100%'}}
            >Add new Task</Button>
        </FormGroup>
    </Box>
);
    return(
        <div>
            <Box>
                <Button onClick={() => setOpenCreate(true)} 
                style={{backgroundColor: '#7ab530',color: '#fff',width: '100px'}}
                >Create </Button>
            </Box>
            <Modal
            open ={openCreate}
            onClose={() => setOpenCreate(false)}
            >
                {createBox}
            </Modal>
        </div>
    )
}

const inputs = {
    backgroundColor: '#2f2f2f',
    color: '#ddd',
    padding: '5px',
    borderRadius: '5px',
    margin: '5px 0px 5px 0px',
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '3px',
    boxShadow: 25,
    textAlign: 'center',
    color: '#2f2f2f',
    padding: '2rem 4rem 2rem 4rem',
  
};
 
export default Create;