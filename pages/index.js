import ReactDOM from "react-dom";
import { useState } from 'react';



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

  