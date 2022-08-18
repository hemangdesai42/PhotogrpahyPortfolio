import ReactDOM from "react-dom";
import { useState } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const accessKey = process.env.UNSPLASH_ACCESS_KEY


export const getStaticProps = async (context) => {
  const photos = await fetch(`https://api.unsplash.com/users/he_mangd/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=30`).then(r => r.json())
  return { props: { photos } }
}

export default function Home({ photos }) {


  console.log(photos)
  return (
      <div className="photos__container">
          {photos.map(photo => (
            <div key={photo.urls.raw}>
            <img 
              className="photos" 
              src={photo.urls.raw}>
              </img>
            
            </div>
          ))}
      </div>
  )
}

  