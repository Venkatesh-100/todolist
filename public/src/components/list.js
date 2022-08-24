import React,{useState,useEffect} from "react";
import { Box,Button,Container,Grid,Typography } from "@mui/material";
import Card from "./card";
import axios from "axios";
import SortButtons from "./sortButtons";
import moment from "moment"

const DOMAIN = "http://localhost:5000";

const List = () => {
    const [list,setList] = useState("All");
    const [data,setData] = useState([]);

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    const currDate = moment(date).add(10, 'days').calendar();


    useEffect(() => {
        axios.get(`${DOMAIN}`)
            .then((resp) => {
                setData(resp.data);
                console.log(resp.data);
            }) 
            .catch((err) => {
                console.log(err);
            });
    },[])

    var num = 1;

    return ( 
        <Box marginTop='1rem'>
            <Typography variant="h6" paddingLeft='3rem'>Added tasks in to-do list</Typography>
            <Box paddingLeft='3rem' >
                <SortButtons list={list} setList={setList}/>
            </Box>
            <Box  sx={{ flexGrow: 1 ,marginTop: '2rem'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                    {data.map(cardData => {
                        if(list === "All")
                            return  (
                                <Grid item  xs={1} sm={4} md={4}>
                                    <Box display='flex'>
                                        <Typography padding='20px'>{num > 0 ? num++ : 0}.</Typography>
                                        <Card cardData={cardData} key={cardData._id}/>
                                    </Box>
                                </Grid>
                            )
                        if(list === "Incompleted" && cardData.status === false)
                            return  (
                                <Grid item  xs={1} sm={4} md={4}>
                                    <Box display='flex'>
                                        <Typography padding='20px'>{num > 0 ? num++ : 0}.</Typography>
                                        <Card cardData={cardData} key={cardData._id}/>
                                    </Box>
                                </Grid>
                            )
                        if(list === "Completed" && cardData.status === true)
                            return  (
                                <Grid item  xs={1} sm={4} md={4}>
                                    <Box display='flex'>
                                        <Typography padding='20px'>{num > 0 ? num++ : 0}.</Typography>
                                        <Card cardData={cardData} key={cardData._id}/>
                                    </Box>
                                </Grid>
                            )
                        if(list === "Prioritized" && cardData.priority === true)
                            return  (
                                <Grid item  xs={1} sm={4} md={4}>
                                    <Box display='flex'>
                                        <Typography padding='20px'>{num > 0 ? num++ : 0}.</Typography>
                                        <Card cardData={cardData} key={cardData._id}/>
                                    </Box>
                                </Grid>
                            )
                        if(list === "Dates")
                            return  (
                                <Grid item  xs={1} sm={4} md={4}>
                                    <Box display='flex'>
                                        <Typography padding='20px'>{num > 0 ? num++ : 0}.</Typography>
                                        <Card cardData={cardData} key={cardData._id}/>
                                    </Box>
                                </Grid>
                            )
                        if(list === "upcoming" && moment(cardData.startDate).add(10, 'days').calendar() > currDate)
                            return  (
                                <Grid item  xs={1} sm={4} md={4}>
                                    <Box display='flex'>
                                        <Typography padding='20px'>{num > 0 ? num++ : 0}.</Typography>
                                        <Card cardData={cardData} key={cardData._id}/>
                                    </Box>
                                </Grid>
                            )
                        if(list === "today" && moment(cardData.startDate).add(10, 'days').calendar() === currDate)
                            return  (
                                <Grid item  xs={1} sm={4} md={4}>
                                    <Box display='flex'>
                                        <Typography padding='20px'>{num > 0 ? num++ : 0}.</Typography>
                                        <Card cardData={cardData} key={cardData._id}/>
                                    </Box>
                                </Grid>
                            )
                        if(list === "expired" && moment(cardData.endDate).add(10, 'days').calendar() < currDate)
                            return  (
                                <Grid item  xs={1} sm={4} md={4}>
                                    <Box display='flex'>
                                        <Typography padding='20px'>{num > 0 ? num++ : 0}.</Typography>
                                        <Card cardData={cardData} key={cardData._id}/>
                                    </Box>
                                </Grid>
                            )
                    }) }
                </Grid>
            </Box>
        </Box>
     );
}

const btn= {
    textAlign:'center',
    alignItems:'center',
    fontSize: 12,
    fontWeight: '600',
    margin: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#c620a7',
    textTransform: 'uppercase',
    borderRadius: 15,
    border: '1px solid #c620a7'
}
const clickedBtn = {
    color: '#fff',
    textAlign:'center',
    alignItems:'center',
    fontSize: 12,
    fontWeight: '600',
    margin: 2,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textTransform: 'uppercase',
    borderRadius: 15,
    backgroundColor: '#c620a7',
    borderWidth: 1,
}
 
export default List;