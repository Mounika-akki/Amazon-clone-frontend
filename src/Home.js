import "./Home.css";
import React from "react";
import Product from "./Product.js";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          controls={false}
          indicators
          interval={2500}
          pause={false}
          className="carousal__main"
        >
          <Carousel.Item>
            <img
              className="d-block w-100 home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="home__row">
          <Product
            id="101"
            title="RiShail Artoholic - Disguise Original Handmade Abstract Canvas Painting"
            price={48988}
            rating={5}
            image="https://m.media-amazon.com/images/I/919t9+TPYPL._AC_UL480_QL65_.jpg"
          />
          <Product
            id="102"
            title="HP 15 Intel Pentium Gold 6405U"
            price={27390}
            rating={4}
            image="https://m.media-amazon.com/images/I/71FB8qoB78L._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="103"
            title="Echo Dot (3rd Gen)-Smart speaker with Alexa"
            price={3499}
            rating={5}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="104"
            title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue"
            price={139817}
            rating={4}
            image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="105"
            title="MevoFit Race Dive Smartwatch: Fitness Smartwatch and Activity Tracker for Men & Women"
            price={2849}
            rating={5}
            image="https://m.media-amazon.com/images/I/41iUM4xE6hL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="106"
            title="Samsung CJ89 43 Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA), Black"
            price={58430}
            rating={4}
            image="https://m.media-amazon.com/images/I/81v90JtbImL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="107"
            title="Butterfly Smart Mixer Grinder, 750W, 4 Jars (Grey)"
            price={2799}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71%2BcDVETcIL._SL1500_.jpg"
          />
          <Product
            id="108"
            title="Eureka Forbes AquaSure from Aquaguard Amaze RO+UV+MTDS 7L Water Purifier"
            price={9299}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51XK4ldf9sL._SL1100_.jpg"
          />
          <Product
            id="109"
            title="Pigeon by Stovekraft Cruise 1800-Watt Induction Cooktop (Black)"
            price={1349}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51StjXBvJBL._SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="110"
            title="AmazonBasics 51 cm Navy Blue Hardsided Cabin Trolley"
            price={2899}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81CZ%2BFolUGL._SL1500_.jpg"
          />
          <Product
            id="111"
            title="AmazonBasics Memory Foam Travel Neck Pillow, Black"
            price={599}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81NWlTk5euL._SL1500_.jpg"
          />
          <Product
            id="112"
            title="Puma Men's Shoe"
            price={2079}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/714VvXKAfDL._UL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="113"
            title="Boltt Fire-Boltt Xplode 1500 Portable Bluetooth Outdoor Speaker, IPX7 Waterproof & Weatherproof with Enhanced Bass (Green)"
            price={1599}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71GQzpXgfRL._SL1500_.jpg"
          />
          <Product
            id="114"
            title="Fire-Boltt Blast 1400 Over-Ear Bluetooth Wireless Headphones with 25H Playtime, Thumping Bass, Lightweight Foldable Compact Design with Google/Siri Voice Assistance"
            price={2999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/711DagBh%2BSL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
