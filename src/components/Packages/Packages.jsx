import React, {useEffect} from 'react'
import "./packages.css"
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img (13).jpg'
import img2 from '../../Assets/img(10).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (12).png.webp'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (11).jpg.webp'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'
import img10 from '../../Assets/img (16).jpg'
import img11 from '../../Assets/img (17).jpg'
import img12 from '../../Assets/img (18).jpg'



import Aos from "aos"
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Leh',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '₹30,000',
    description: 'Located in the Ladakh region of Jammu and Kashmir, Leh is known for its stunning scenic locales, Buddhist temples and pristine environment. Due to the strong influence of Tibetan Buddhism, Leh is also known as Little Tibet or the Land of Lamas.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Hornstrandir Nature Reserve',
    location: 'IceLand',
    grade: 'CULTURAL RELAX',
    fees: '₹46,700',
    description: "Hornstrandir Nature Reserve is one of the best places to visit in Iceland. With open areas of lush forests and grasslands, it is home to the rare and elusive species of the Arctic Fox and is perfect for camping. "
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '₹55,000',
    description: "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'. Always interesting to be in this place.  "
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '₹60,223',
    description: 'According to the World Tourism Ranking, 45 million people visit turkey each year, and form that about 2 million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities. '
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'CULTURAL RELAX',
    fees: '₹80,000',
    description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '₹75,440',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food. '
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Plitvice National Park',
    location: 'Central Croatia',
    grade: 'CULTURAL RELAX',
    fees: '₹56,000',
    description: 'Plitvice Lakes is a real jewel in Croatia. The area of Plitvice Lakes National Park covers about sixteen interconnected large lakes, divided into two parts - Gornja jezera (Upper lakes) and Donja Jezera (Lower Lakes), many caves and hundreds of waterfalls.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '₹66,100',
    description: 'An immense mausoleum of white marbel, built-in agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz.'
  },
  {
    id: 9,
    imgSrc: img10,
    destTitle: 'Paris',
    location: 'France',
    grade: 'CULTURAL RELAX',
    fees: '₹70,889',
    description: 'Paris, city and capital of France, situated in the north-central part of the country. People were living on the site of the present-day city, located along the Seine River some 233 miles (375 km) upstream from the river’s mouth on the English Channel (La Manche), by about 7600 BCE.'
  },
  {
    id: 10,
    imgSrc: img11,
    destTitle: 'Amazon Rainforest',
    location: 'South America',
    grade: 'CULTURAL RELAX',
    fees: '₹99,889',
    description: 'The Amazon rainforest, covering much of northwestern Brazil and extending into Colombia, Peru and other South American countries, is the world’s largest tropical rainforest, famed for its biodiversity.'
  },
  {
    id: 11,
    imgSrc: img12,
    destTitle: 'The Balkans',
    location: 'Europe',
    grade: 'CULTURAL RELAX',
    fees: '₹66,889',
    description: 'Located in southeastern Europe, the Balkans is the cheapest region in Europe. Composed of a handful of countries — most of which see very few tourists — it’s an off-the-radar region that’s super affordable while also offering incredible value.'
  },
  {
    id: 12,
    imgSrc: img9,
    destTitle: 'Bali',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '₹54,889',
    description: 'Bali is an indonesian island and one of the best holiday destination in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art and culture, food, temples and beautiful sandy beaches. '
  },
]

export const Packages = () => {

    // use react hooks to add a scroll animation
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
  

  return (
    <section className='packages'>
    <div className='main container section'>

      {/* <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div> */}

      <div className="secContent grid">

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
            return ( 
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>


                </div>

              </div>
            )
          })
        }
        
      </div>


    </div>
    </section>
  )
}

export default Packages;