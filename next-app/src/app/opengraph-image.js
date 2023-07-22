import { ImageResponse } from 'next/server'
import { OgImage } from 'shared/assets/images'
 
export const runtime = 'edge'
 
export const alt = 'Antonio Vidakovic'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <Image src={OgImage.src} alt="Antonio Vidakovic" width={OgImage.width} height={OgImage.height} />
    ),
    {
      ...size,
    }
  )
}