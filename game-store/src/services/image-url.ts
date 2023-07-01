import noImage from '../assets/no-image-placeholder.webp'

// function for getting a cropped image from the URL
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  // parameter adding point   
  const target = 'media/'
  // index of this portion: https://media.rawg.io/media/   
  const index = url.indexOf(target) + target.length

  // https://media.rawg.io/media/crop/600/400/games/456/456dea5e1c7e3cd07060c14e96612001.jpg
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedImageUrl