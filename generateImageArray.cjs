const fs = require('fs')
const path = require('path')

const directoryPath = path.join(__dirname, 'public/images')

const baseUrl = '/images/'

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err)
  }

  const images = files.map((file) => ({
    original: `${baseUrl}${file}`,
    thumbnail: `${baseUrl}${file}`,
    alt: `Image of ${file}`,
  }))

  console.log(JSON.stringify(images, null, 2))
})
