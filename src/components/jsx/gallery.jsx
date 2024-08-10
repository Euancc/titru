import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import '../css/gallery.css'

export default function Gallery() {
  const images = [
    {
      "original": "/images/20230308_165127 (2).webp",
      "thumbnail": "/images/20230308_165127 (2).webp",
      "alt": "Image of 20230308_165127 (2).webp"
    },
    {
      "original": "/images/20230409_173645.webp",
      "thumbnail": "/images/20230409_173645.webp",
      "alt": "Image of 20230409_173645.webp"
    },
    {
      "original": "/images/20230409_182236.webp",
      "thumbnail": "/images/20230409_182236.webp",
      "alt": "Image of 20230409_182236.webp"
    },
    {
      "original": "/images/20230419_104259 (1).webp",
      "thumbnail": "/images/20230419_104259 (1).webp",
      "alt": "Image of 20230419_104259 (1).webp"
    },
    {
      "original": "/images/20230419_114350.webp",
      "thumbnail": "/images/20230419_114350.webp",
      "alt": "Image of 20230419_114350.webp"
    },
    {
      "original": "/images/20230419_145421.webp",
      "thumbnail": "/images/20230419_145421.webp",
      "alt": "Image of 20230419_145421.webp"
    },
    {
      "original": "/images/20230510_112527 (1).webp",
      "thumbnail": "/images/20230510_112527 (1).webp",
      "alt": "Image of 20230510_112527 (1).webp"
    },
    {
      "original": "/images/20230730_133249.webp",
      "thumbnail": "/images/20230730_133249.webp",
      "alt": "Image of 20230730_133249.webp"
    },
    {
      "original": "/images/20230910_092150.webp",
      "thumbnail": "/images/20230910_092150.webp",
      "alt": "Image of 20230910_092150.webp"
    },
    {
      "original": "/images/20230929_104748.webp",
      "thumbnail": "/images/20230929_104748.webp",
      "alt": "Image of 20230929_104748.webp"
    },
    {
      "original": "/images/20231015_175537.webp",
      "thumbnail": "/images/20231015_175537.webp",
      "alt": "Image of 20231015_175537.webp"
    },
    {
      "original": "/images/20231026_145721.webp",
      "thumbnail": "/images/20231026_145721.webp",
      "alt": "Image of 20231026_145721.webp"
    },
    {
      "original": "/images/DJI_0001.webp",
      "thumbnail": "/images/DJI_0001.webp",
      "alt": "Image of DJI_0001.webp"
    },
    {
      "original": "/images/DJI_0006.webp",
      "thumbnail": "/images/DJI_0006.webp",
      "alt": "Image of DJI_0006.webp"
    },
    {
      "original": "/images/DJI_0012.webp",
      "thumbnail": "/images/DJI_0012.webp",
      "alt": "Image of DJI_0012.webp"
    },
    {
      "original": "/images/DJI_0013.webp",
      "thumbnail": "/images/DJI_0013.webp",
      "alt": "Image of DJI_0013.webp"
    },
    {
      "original": "/images/_GLT6654.webp",
      "thumbnail": "/images/_GLT6654.webp",
      "alt": "Image of _GLT6654.webp"
    },
    {
      "original": "/images/_GLT6661.webp",
      "thumbnail": "/images/_GLT6661.webp",
      "alt": "Image of _GLT6661.webp"
    },
    {
      "original": "/images/org_99ba447ac2ad7fa4_1696993420000.webp",
      "thumbnail": "/images/org_99ba447ac2ad7fa4_1696993420000.webp",
      "alt": "Image of org_99ba447ac2ad7fa4_1696993420000.webp"
    },
    {
      "original": "/images/village-people.webp",
      "thumbnail": "/images/village-people.webp",
      "alt": "Image of village-people.webp"
    },
  ]

  // const renderImage = (item) => {
  //   return (
  //     <div>
  //       <img
  //         src={item.original}
  //         alt={item.alt}
  //         loading="lazy" // Keeps lazy loading enabled
  //       />
  //     </div>
  //   );
  // };


  return (
    <section id="gallery">
      <div className="gallery">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          lazyLoad={true}
            // renderItem={renderImage}
        />
      </div>
    </section>
  )
}
