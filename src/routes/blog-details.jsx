import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Header from "./header";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
// import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function BlogDetails() {

const [data,setData]=useState([]);
const  params = useParams();
const  page = params.page || 1 ;

    useEffect(()=>{
        const data = axios.get("https://jsonplaceholder.typicode.com/todos/"+page,{
            params:{
                page:page
            }
            })
            .then((resp)=>{
            setData(resp.data);
            })
            .catch(()=>{
            });
    },[]);

        console.log(data);
        
    // return (
    //     <Container maxWidth="xl">
    //         <Box sx={{width: '100%'}}>
    //             <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 3}}>
    //                 <Grid item md={8} xs={12}>
    //                     <Item>{data.map((item, index) => (
    //                         <Card sx={{minWidth: 275,m:2}} classes={{margin:'10px'}}>
    //                             <CardContent key={item.id}>
    //                                 <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
    //                                     {item.title}
    //                                 </Typography>
    //                                 <Typography variant="h5" component="div">
    //                                     {item.title}
    //                                 </Typography>
    //                             </CardContent>
    //                             <CardActions>
    //                                 {/*<Button component={Link} to={'/blog/'+(item.id)} size="small">Read More</Button>*/}
    //                                 <ListItem button component={Link} to={'/blog/show/'+(item.id)} className='btn' size="lg">Read More </ListItem>
    //                             </CardActions>
    //                         </Card>
    //                     ))}
    //                     </Item>
    //
    //                 </Grid>
    //                 <Grid item md={4} xs={12}>
    //                     <Item>Side Bar Text</Item>
    //                 </Grid>
    //             </Grid>
    //         </Box>
    //     </Container>
    //
    // );

    // return (
    //
    // );
}