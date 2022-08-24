import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

const buttonsData = [
    {
        id: '1',
        title: 'All',
    },
    {
        id: '2',
        title: 'Incompleted',
    },
    {
      id: '6',
      title: 'Completed',
    },
    {
        id: '3',
        title: 'Prioritized',
    },
    {
        id: '5',
        title: 'upcoming',
    },
    {
        id: '4',
        title: 'today'
    },
    {
        id: '6',
        title: 'expired',
    },
];

const CustomButton = ({list,item,setList}) => {
    return(
        <Box>
            <Button onClick={() => setList(item.title)}>
                {
                    list === item.title ? 
                    <Typography style={clickedBtn}>{item.title}</Typography>
                    : <Typography style={btn}>{item.title}</Typography>
                }
            </Button>
        </Box>
    )
}

const SortButtons = ({setList,list}) => {
    return (  
        <div>
        <ScrollMenu >
            <Box display='flex' >
                {
                    buttonsData.map(item => 
                        
                            <CustomButton 
                            item={item}
                            key={item.id}
                            setList={setList}
                            list={list}
                            />
                    )
                }
            </Box>
        </ScrollMenu>
        </div>
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
    margin: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textTransform: 'uppercase',
    borderRadius: 15,
    backgroundColor: '#7ab530',
    borderWidth: 1,
}
 
export default SortButtons;