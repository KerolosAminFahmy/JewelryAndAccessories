// import { useState } from 'react'

// import { useTranslation, Trans } from 'react-i18next';
// import { useTheme } from '../theme/ThemeProvider';
import HeroSlider from '../components/HeroSlider';
import { SectionHeader } from '../components';
import collection1 from '../assets/collectionV1-img1.webp'
import collection2 from '../assets/collectionV1-img2.webp'
import collection3 from '../assets/collectionV1-img3.webp'
import collection4 from '../assets/collectionV1-img4.webp'
import collection5 from '../assets/collectionV1-img5.webp'
import collection6 from '../assets/collectionV1-img6.webp'

import './home.css'
import CollectionElement from '../components/CollectionElement';
const Home = () => {
  // const [count, setCount] = useState(0)
  // const { t, i18n } = useTranslation();
  // const { theme, toggleTheme } = useTheme();

  // const changeLanguage = () => {
  //   i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  // };
  const collection=[
    {
      imageUrl:collection1,
      alt: "Image NeckLaces",
      label:"NeckLaces"
    },
    {
      imageUrl:collection2,
      alt: "Image Ring",
      label:"Ring"
    }, {
      imageUrl:collection3,
      alt: "Image Bracelets",
      label:"Bracelets"
    }, {
      imageUrl:collection4,
      alt: "Image Earrings",
      label:"Earrings"
    }, {
      imageUrl:collection5,
      alt: "Image Charm & Dangles",
      label:"Charm & Dangles"
    }, {
      imageUrl:collection6,
      alt: "Image NeckLaces",
      label:"NeckLaces"
    }, {
      imageUrl:collection1,
      alt: "Image Gift Ideas",
      label:"Gift Ideas"
    },
  ]
  return (
    <div className="home-page">
      <HeroSlider />
      <section className='collection'>
        <SectionHeader title='Our collection'></SectionHeader>
        {
          collection.map((ele,idx)=>{
            return <CollectionElement key={idx} image={ele.imageUrl} label={ele.label} alt={ele.alt} ></CollectionElement>
        })
        }
       
      </section>
    </div>
  )
}

export default Home; 