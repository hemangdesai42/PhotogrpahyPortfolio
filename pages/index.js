import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
// import BasicModal from "../components/modal";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const accessKey = process.env.UNSPLASH_ACCESS_KEY


export const getStaticProps = async (context) => {
  const photos = await fetch(`https://api.unsplash.com/users/he_mangd/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=30&stats=true`).then(r => r.json())
  return { props: { photos } }
}

export default function Album({ photos }) {
  console.log(photos)
  return (
    <div>
    <Box className="box" sx={{ width: 800, overflowY: 'scroll', border: '1px solid grey' }}>
    <ListSubheader component="div">My Photographs</ListSubheader>
    <ImageList variant="masonry" cols={3} gap={8}>
    {photos.map((photo) => (
    <ImageListItem key={photo.urls.raw}>
      <img
        src={`${photo.urls.raw}?w=164&fit=crop&auto=format`}
        srcSet={`${photo.urls.raw}dpr=2 2x`}
        loading="lazy"
        sx={{ margin: 25}}
        // className="photo"
      />
       <ImageListItemBar
            title={"Downloads: " + photo.statistics.downloads.total}
            subtitle={"Views: " + photo.statistics.views.total}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${photo.statistics.downloads.total}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
    </ImageListItem>
      ))}
    </ImageList>
    </Box>
    </div>
  );
}