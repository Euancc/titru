import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import '../css/gallery.css'

export default function Gallery() {
  const images = [
    {
      original: '/images/1000021135-01.jpeg',
      thumbnail: '/images/1000021135-01.jpeg',
      alt: 'Image of 1000021135-01.jpeg',
    },
    {
      original: '/images/20230308_165100 (2).jpg',
      thumbnail: '/images/20230308_165100 (2).jpg',
      alt: 'Image of 20230308_165100 (2).jpg',
    },
    {
      original: '/images/20230308_165127 (2).jpg',
      thumbnail: '/images/20230308_165127 (2).jpg',
      alt: 'Image of 20230308_165127 (2).jpg',
    },
    {
      original: '/images/20230313_173601.jpg',
      thumbnail: '/images/20230313_173601.jpg',
      alt: 'Image of 20230313_173601.jpg',
    },
    {
      original: '/images/20230314_140618.jpg',
      thumbnail: '/images/20230314_140618.jpg',
      alt: 'Image of 20230314_140618.jpg',
    },
    {
      original: '/images/20230315_094623.jpg',
      thumbnail: '/images/20230315_094623.jpg',
      alt: 'Image of 20230315_094623.jpg',
    },
    {
      original: '/images/20230409_173645.jpg',
      thumbnail: '/images/20230409_173645.jpg',
      alt: 'Image of 20230409_173645.jpg',
    },
    {
      original: '/images/20230409_182236.jpg',
      thumbnail: '/images/20230409_182236.jpg',
      alt: 'Image of 20230409_182236.jpg',
    },
    {
      original: '/images/20230409_182302.jpg',
      thumbnail: '/images/20230409_182302.jpg',
      alt: 'Image of 20230409_182302.jpg',
    },
    {
      original: '/images/20230418_154951.jpg',
      thumbnail: '/images/20230418_154951.jpg',
      alt: 'Image of 20230418_154951.jpg',
    },
    {
      original: '/images/20230419_104259 (1).jpg',
      thumbnail: '/images/20230419_104259 (1).jpg',
      alt: 'Image of 20230419_104259 (1).jpg',
    },
    {
      original: '/images/20230419_114350.jpg',
      thumbnail: '/images/20230419_114350.jpg',
      alt: 'Image of 20230419_114350.jpg',
    },
    {
      original: '/images/20230419_145421.jpg',
      thumbnail: '/images/20230419_145421.jpg',
      alt: 'Image of 20230419_145421.jpg',
    },
    {
      original: '/images/20230420_110121.jpg',
      thumbnail: '/images/20230420_110121.jpg',
      alt: 'Image of 20230420_110121.jpg',
    },
    {
      original: '/images/20230420_121248.jpg',
      thumbnail: '/images/20230420_121248.jpg',
      alt: 'Image of 20230420_121248.jpg',
    },
    {
      original: '/images/20230509_171819.jpg',
      thumbnail: '/images/20230509_171819.jpg',
      alt: 'Image of 20230509_171819.jpg',
    },
    {
      original: '/images/20230510_112527 (1).jpg',
      thumbnail: '/images/20230510_112527 (1).jpg',
      alt: 'Image of 20230510_112527 (1).jpg',
    },
    {
      original: '/images/20230510_112919.jpg',
      thumbnail: '/images/20230510_112919.jpg',
      alt: 'Image of 20230510_112919.jpg',
    },
    {
      original: '/images/20230510_120124.jpg',
      thumbnail: '/images/20230510_120124.jpg',
      alt: 'Image of 20230510_120124.jpg',
    },
    {
      original: '/images/20230511_131907.jpg',
      thumbnail: '/images/20230511_131907.jpg',
      alt: 'Image of 20230511_131907.jpg',
    },
    {
      original: '/images/20230511_133259.jpg',
      thumbnail: '/images/20230511_133259.jpg',
      alt: 'Image of 20230511_133259.jpg',
    },
    {
      original: '/images/20230513_134921.jpg',
      thumbnail: '/images/20230513_134921.jpg',
      alt: 'Image of 20230513_134921.jpg',
    },
    {
      original: '/images/20230520_163319 (1).jpg',
      thumbnail: '/images/20230520_163319 (1).jpg',
      alt: 'Image of 20230520_163319 (1).jpg',
    },
    {
      original: '/images/20230520_181735.jpg',
      thumbnail: '/images/20230520_181735.jpg',
      alt: 'Image of 20230520_181735.jpg',
    },
    {
      original: '/images/20230523_161325.jpg',
      thumbnail: '/images/20230523_161325.jpg',
      alt: 'Image of 20230523_161325.jpg',
    },
    {
      original: '/images/20230523_183432.jpg',
      thumbnail: '/images/20230523_183432.jpg',
      alt: 'Image of 20230523_183432.jpg',
    },
    {
      original: '/images/20230523_191758.jpg',
      thumbnail: '/images/20230523_191758.jpg',
      alt: 'Image of 20230523_191758.jpg',
    },
    {
      original: '/images/20230528_181211.jpg',
      thumbnail: '/images/20230528_181211.jpg',
      alt: 'Image of 20230528_181211.jpg',
    },
    {
      original: '/images/20230714_132121.jpg',
      thumbnail: '/images/20230714_132121.jpg',
      alt: 'Image of 20230714_132121.jpg',
    },
    {
      original: '/images/20230730_133249.jpg',
      thumbnail: '/images/20230730_133249.jpg',
      alt: 'Image of 20230730_133249.jpg',
    },
    {
      original: '/images/20230730_133736.jpg',
      thumbnail: '/images/20230730_133736.jpg',
      alt: 'Image of 20230730_133736.jpg',
    },
    {
      original: '/images/20230730_140325.jpg',
      thumbnail: '/images/20230730_140325.jpg',
      alt: 'Image of 20230730_140325.jpg',
    },
    {
      original: '/images/20230828_175655 (1).jpg',
      thumbnail: '/images/20230828_175655 (1).jpg',
      alt: 'Image of 20230828_175655 (1).jpg',
    },
    {
      original: '/images/20230901_182355.jpg',
      thumbnail: '/images/20230901_182355.jpg',
      alt: 'Image of 20230901_182355.jpg',
    },
    {
      original: '/images/20230904_131946.jpg',
      thumbnail: '/images/20230904_131946.jpg',
      alt: 'Image of 20230904_131946.jpg',
    },
    {
      original: '/images/20230905_162610-01.jpg',
      thumbnail: '/images/20230905_162610-01.jpg',
      alt: 'Image of 20230905_162610-01.jpg',
    },
    {
      original: '/images/20230909_151029.jpg',
      thumbnail: '/images/20230909_151029.jpg',
      alt: 'Image of 20230909_151029.jpg',
    },
    {
      original: '/images/20230909_161329 (2).jpg',
      thumbnail: '/images/20230909_161329 (2).jpg',
      alt: 'Image of 20230909_161329 (2).jpg',
    },
    {
      original: '/images/20230909_165232.jpg',
      thumbnail: '/images/20230909_165232.jpg',
      alt: 'Image of 20230909_165232.jpg',
    },
    {
      original: '/images/20230910_092150.jpg',
      thumbnail: '/images/20230910_092150.jpg',
      alt: 'Image of 20230910_092150.jpg',
    },
    {
      original: '/images/20230910_104122.jpg',
      thumbnail: '/images/20230910_104122.jpg',
      alt: 'Image of 20230910_104122.jpg',
    },
    {
      original: '/images/20230921_125053.jpg',
      thumbnail: '/images/20230921_125053.jpg',
      alt: 'Image of 20230921_125053.jpg',
    },
    {
      original: '/images/20230929_104748.jpg',
      thumbnail: '/images/20230929_104748.jpg',
      alt: 'Image of 20230929_104748.jpg',
    },
    {
      original: '/images/20231015_175537.jpg',
      thumbnail: '/images/20231015_175537.jpg',
      alt: 'Image of 20231015_175537.jpg',
    },
    {
      original: '/images/20231016_174904.jpg',
      thumbnail: '/images/20231016_174904.jpg',
      alt: 'Image of 20231016_174904.jpg',
    },
    {
      original: '/images/20231026_145721.jpg',
      thumbnail: '/images/20231026_145721.jpg',
      alt: 'Image of 20231026_145721.jpg',
    },
    {
      original: '/images/20231029_114459.jpg',
      thumbnail: '/images/20231029_114459.jpg',
      alt: 'Image of 20231029_114459.jpg',
    },
    {
      original: '/images/20231030_182249 (1).jpg',
      thumbnail: '/images/20231030_182249 (1).jpg',
      alt: 'Image of 20231030_182249 (1).jpg',
    },
    {
      original: '/images/20231112_130622 (1).jpg',
      thumbnail: '/images/20231112_130622 (1).jpg',
      alt: 'Image of 20231112_130622 (1).jpg',
    },
    {
      original: '/images/DJI_0001.jpg',
      thumbnail: '/images/DJI_0001.jpg',
      alt: 'Image of DJI_0001.jpg',
    },
    {
      original: '/images/DJI_0006.jpg',
      thumbnail: '/images/DJI_0006.jpg',
      alt: 'Image of DJI_0006.jpg',
    },
    {
      original: '/images/DJI_0012.jpg',
      thumbnail: '/images/DJI_0012.jpg',
      alt: 'Image of DJI_0012.jpg',
    },
    {
      original: '/images/DJI_0013.jpg',
      thumbnail: '/images/DJI_0013.jpg',
      alt: 'Image of DJI_0013.jpg',
    },
    {
      original: '/images/DJI_0987.jpg',
      thumbnail: '/images/DJI_0987.jpg',
      alt: 'Image of DJI_0987.jpg',
    },
    {
      original: '/images/DJI_0988-Pano-Edit (1).jpg',
      thumbnail: '/images/DJI_0988-Pano-Edit (1).jpg',
      alt: 'Image of DJI_0988-Pano-Edit (1).jpg',
    },
    {
      original: '/images/DJI_0989.jpg',
      thumbnail: '/images/DJI_0989.jpg',
      alt: 'Image of DJI_0989.jpg',
    },
    {
      original: '/images/DJI_0993.jpg',
      thumbnail: '/images/DJI_0993.jpg',
      alt: 'Image of DJI_0993.jpg',
    },
    {
      original: '/images/DJI_0996.jpg',
      thumbnail: '/images/DJI_0996.jpg',
      alt: 'Image of DJI_0996.jpg',
    },
    {
      original: '/images/DJI_0998.jpg',
      thumbnail: '/images/DJI_0998.jpg',
      alt: 'Image of DJI_0998.jpg',
    },
    {
      original: '/images/DSC_7881.jpg',
      thumbnail: '/images/DSC_7881.jpg',
      alt: 'Image of DSC_7881.jpg',
    },
    {
      original: '/images/DSC_8005.jpg',
      thumbnail: '/images/DSC_8005.jpg',
      alt: 'Image of DSC_8005.jpg',
    },
    {
      original: '/images/DSC_8011.jpg',
      thumbnail: '/images/DSC_8011.jpg',
      alt: 'Image of DSC_8011.jpg',
    },
    {
      original: '/images/DSC_8014.jpg',
      thumbnail: '/images/DSC_8014.jpg',
      alt: 'Image of DSC_8014.jpg',
    },
    {
      original: '/images/DSC_8026.jpg',
      thumbnail: '/images/DSC_8026.jpg',
      alt: 'Image of DSC_8026.jpg',
    },
    {
      original: '/images/DSC_8029.jpg',
      thumbnail: '/images/DSC_8029.jpg',
      alt: 'Image of DSC_8029.jpg',
    },
    {
      original: '/images/Titiru From above copy.jpg',
      thumbnail: '/images/Titiru From above copy.jpg',
      alt: 'Image of Titiru From above copy.jpg',
    },
    {
      original: '/images/Tittru-hero.jpg',
      thumbnail: '/images/Tittru-hero.jpg',
      alt: 'Image of Tittru-hero.jpg',
    },
    {
      original: '/images/_GLT6532.jpg',
      thumbnail: '/images/_GLT6532.jpg',
      alt: 'Image of _GLT6532.jpg',
    },
    {
      original: '/images/_GLT6654.jpg',
      thumbnail: '/images/_GLT6654.jpg',
      alt: 'Image of _GLT6654.jpg',
    },
    {
      original: '/images/_GLT6661.jpg',
      thumbnail: '/images/_GLT6661.jpg',
      alt: 'Image of _GLT6661.jpg',
    },
    {
      original: '/images/org_23f99caf0c67db40_1693379122000.jpg',
      thumbnail: '/images/org_23f99caf0c67db40_1693379122000.jpg',
      alt: 'Image of org_23f99caf0c67db40_1693379122000.jpg',
    },
    {
      original: '/images/org_560854c18c7bd6e2_1698710212000.jpg',
      thumbnail: '/images/org_560854c18c7bd6e2_1698710212000.jpg',
      alt: 'Image of org_560854c18c7bd6e2_1698710212000.jpg',
    },
    {
      original: '/images/org_6d668ff940dbcff1_1694672790000.jpg',
      thumbnail: '/images/org_6d668ff940dbcff1_1694672790000.jpg',
      alt: 'Image of org_6d668ff940dbcff1_1694672790000.jpg',
    },
    {
      original: '/images/org_99ba447ac2ad7fa4_1696993420000.jpg',
      thumbnail: '/images/org_99ba447ac2ad7fa4_1696993420000.jpg',
      alt: 'Image of org_99ba447ac2ad7fa4_1696993420000.jpg',
    },
    {
      original: '/images/org_ce810f65b58fd6eb_1692775166000 (1).jpg',
      thumbnail: '/images/org_ce810f65b58fd6eb_1692775166000 (1).jpg',
      alt: 'Image of org_ce810f65b58fd6eb_1692775166000 (1).jpg',
    },
    {
      original: '/images/org_dc6185a28e3cdd52_1694672732000.jpg',
      thumbnail: '/images/org_dc6185a28e3cdd52_1694672732000.jpg',
      alt: 'Image of org_dc6185a28e3cdd52_1694672732000.jpg',
    },
    {
      original: '/images/org_f0663240b27651a2_1694672592000.jpg',
      thumbnail: '/images/org_f0663240b27651a2_1694672592000.jpg',
      alt: 'Image of org_f0663240b27651a2_1694672592000.jpg',
    },
    {
      original: '/images/titiru-coral.jpg',
      thumbnail: '/images/titiru-coral.jpg',
      alt: 'Image of titiru-coral.jpg',
    },
    {
      original: '/images/titiru-dinner.jpg',
      thumbnail: '/images/titiru-dinner.jpg',
      alt: 'Image of titiru-dinner.jpg',
    },
    {
      original: '/images/village-people.jpg',
      thumbnail: '/images/village-people.jpg',
      alt: 'Image of village-people.jpg',
    },
  ]

  return (
    <section id="gallery">
      <div className="gallery">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </div>
    </section>
  )
}
