const fs = require('fs')
const request = require('request')
const axios = require('axios')

const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*);<\/script>/)

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
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

const rmDirectory = (dir) => {
  fs.rmdir(dir, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }

    console.log(`${dir} is deleted!`);
  })
}

const createDirectory = (dir) => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
}

let images
(async () => {
  try {
    // delete instagram recursively
    const dir = "./src/assets/instagram"
    
    rmDirectory(dir)

    createDirectory(dir)
    
    images = await fetchInstagramPhotos('https://www.instagram.com/305media.tv/')
    console.log(images)
    images.forEach((image, index) => {
      download(image.thumbnailUrl, `${dir}/305-media-tv-instagram-${index + 1}.jpg`, () => {
        console.log(`File ${index + 1} added succesfully ✅`)
      })
    })
  } catch (e) {
    console.error('Fetching Instagram photos failed', e)
  }
})()
