import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

const accessKey = process.env.UNSPLASH_ACCESS_KEY


export const getStaticProps = async (context) => {
  const photos = await fetch(`https://api.unsplash.com/users/he_mangd/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=30`).then(r => r.json())
  return { props: { photos } }
}

export default function Album({ photos }) {
  return (
    <Box className="box" sx={{ width: 800, overflowY: 'scroll' }}>
    <ImageList variant="masonry" cols={3} gap={8}>
    {photos.map((photo) => (
    <ImageListItem key={photo.urls.raw}>
      <img
        src={`${photo.urls.raw}?w=164&fit=crop&auto=format`}
        srcSet={`${photo.urls.raw}dpr=2 2x`}
        loading="lazy"
        sx={{ margin: 25}}
      />
    </ImageListItem>
      ))}
    </ImageList>
    </Box>
  );
}