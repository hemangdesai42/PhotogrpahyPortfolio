// import { type NextRequest } from 'next/server';

// export default async function handler(req: NextRequest) {
//   const accessToken = process.env.UNSPLASH_ACCESS_KEY;
//   const response = await fetch(
//     `https://api.unsplash.com/users/he_mangd/photos?client_id=${accessToken}`,
//     {
//       method: 'GET'
//     }
//   );

//   const unsplashdata = await response.json();

//   return res.status(200).json({
//     photos: unsplashdata.photos
//   })
// }
