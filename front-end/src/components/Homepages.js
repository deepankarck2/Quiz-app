import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import homepage1 from './img/homepage1.png';
import homepage2 from './img/homepage2.png';
import Footer from "./Footer";

export default function Homepages(){
    return(
        <>
          <Navbar />  
          <div class="container mx-auto mt-10 overflow-hidden">
            <div class="flex justify-center items-center">
                <div class="bg-white">
                    <div class="grid grid-cols-8 gap-10">
                        <div class="col-span-1 sm:col-span-1"></div>
                        <div class="col-span-4 sm:col-span-3 border rounded-lg shadow-lg">
                                <Card class="h-full" sx={{ maxWidth: 345}} >
                                    <div class="text-center rounded-t-lg bg-gray-300">
                                        <CardHeader
                                            title="Take a quiz"
                                        />
                                    </div>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={homepage1}
                                        alt=""
                                    />
                                    <div class="rounded-b-lg bg-gray-300">
                                        <CardActions>
                                            <Button size="small"><Link to="/take">Are you ready to take a quiz? If you are hop in and test your skills! </Link></Button>
                                        </CardActions>
                                    </div>
                                </Card>
                        </div>
                        <div class="col-span-4 sm:col-span-3 border rounded-lg shadow-lg">
                            <Card class="h-full" sx={{ maxWidth: 345 }}>
                                <div class="text-center rounded-t-lg bg-gray-300">
                                    <CardHeader
                                        title="Take random quiz"
                                    />
                                </div>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={homepage2}
                                    alt=""
                                />
                                <div class="rounded-b-lg bg-gray-300">
                                    <CardActions>
                                        <Button size="small">If you are feeling nice today why not take a random quiz! Test your knowledge on various feilds.</Button>
                                    </CardActions>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
