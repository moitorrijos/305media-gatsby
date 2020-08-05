const fs = require('fs')
const request = require('request')
const axios = require('axios')

const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*);<\/script>/)

const download = (url, path, callback) => {
  request.head(url, (error) => {
    if (error) console.log(error)
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

const fetchInstagramPhotos = async (accountUrl) => {
  const response = await axios.get(accountUrl)
  const json = JSON.parse(response.data.match(instagramRegExp)[1])
  const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 16)
  const photos = edges.map(({ node }) => {
    return {
      thumbnailUrl: node.thumbnail_src,
    }
  })
  return photos
}

let images
(async () => {
  try {
    // delete instagram recursively
    const dir = "./src/assets/instagram"
    
    fs.rmdir(dir, { recursive: true }, (err) => {
      if (err) {
          throw err
      }
      console.log(`${dir} is deleted!`);
      fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) {
          throw err
        }
        console.log(`${dir} is recreated!`)
        
      })
    })
    images = await fetchInstagramPhotos('https://www.instagram.com/305media.tv/')
    images.forEach((image, index) => {
      download(image.thumbnailUrl, `${dir}/305-media-tv-instagram-${index + 1}.jpg`, () => {
        console.log(`File ${index + 1} added succesfully ✅`)
      })
    })
  } catch (e) {
    console.error('Fetching Instagram photos failed', e)
  }
  console.log('Done ✅.')    
})()
