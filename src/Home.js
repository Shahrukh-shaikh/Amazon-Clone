import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                className="Home__image"
                 src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/Events/Holiday/Gateway/US-EN_100220_3monthsfree_ACQ_GW_Hero_D_1500x600_CV59._CB403490035_.jpg" alt="Sorry couldn't load it"
                 />
               <div className="home__row">
                     <Product 
                        id="465783425"
                        title="Samsung SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black"
                        price = {14500}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UL480_FMwebp_QL65_.jpg"  />
                      <Product
                        id="465784536"
                        title="Smart WiFi Light Bulb, LED RGBCW Color Changing, Compatible with Alexa and Google Home Assistant, No Hub Required, A19 E26 Multicolor LUMIMAN 2 Pack"
                        price={69}
                        rating= {4}
                        image= "https://images-na.ssl-images-amazon.com/images/I/41dwKQqWiQL.jpg" />
                 </div>

                 <div className="home__row">
                 <Product 
                    id="465783428"
                    title ="PICTEK RGB Gaming Keyboard USB Wired Keyboard, Crater Architecture Backlit Computer Keyboard with 8 Independent Multimedia Keys, 25 Keys Anti-ghosting, Splash-Proof, Ideal for PC/Mac Game, Black"
                    price = {652}
                    rating ={4}
                    image ="https://m.media-amazon.com/images/I/71b-7QJEgbL._AC_UL480_FMwebp_QL65_.jpg"
                     />
                     <Product
                      id="462437594"
                      title ="LETSCOM Smart Watch, GPS Running Watch Fitness Trackers with Heart Rate Monitor Step Counter Sleep Monitor, IP68 Waterproof Digital Watch Activity Tracker Compatible with iPhone Android Phones"
                      price = {2899}
                      rating ={4}
                      image ="https://m.media-amazon.com/images/I/71+kxwGAvJL._AC_UL480_FMwebp_QL65_.jpg" />
                      <Product
                      id="463429154"
                      title= "Toshiba (HDTB420XK3AA) Canvio Basics 2TB Portable External Hard Drive USB 3.0, Black"
                      price= {6345}
                      rating= {4}
                      image= "https://m.media-amazon.com/images/I/910A6B1Sa4L._AC_UL480_FMwebp_QL65_.jpg"/>
                   
                 </div>

                 <div className="home__row">
                 <Product 
                    id="465723154"
                    title = "ASUS ROG Gaming Phone 3-6.59” FHD+ 2340x1080 HDR 144Hz Display - 6000mAh Battery - 64MP/13MP/5MP Triple Camera with 24MP Front Camera - 512GB Storage - 5G LTE Unlocked Dual SIM Cell Phone (12GB)"
                    price = {16400}
                    rating ={4}
                    image ="https://m.media-amazon.com/images/I/812-Lob-xlL._AC_UY327_FMwebp_QL65_.jpg" />
                     <Product
                     id="465231067"
                     title ="PUMA Men's Roma Basic Sneaker"
                     price = {1250}
                     rating ={4}
                     image = "https://m.media-amazon.com/images/I/71JXiqWc4ML._AC_UL480_FMwebp_QL65_.jpg"/>  
                      <Product 
                      id="4657453729"
                      title ="Cricut EasyPress 2 - Heat Press Machine For T Shirts and HTV Vinyl Projects, Mint, 9"
                      price = {1890}
                      rating = {4}
                      image = "https://m.media-amazon.com/images/I/615v7zgMQ1L._AC_UL480_FMwebp_QL65_.jpg" />
                      </div>
                  <div className="home__row">
                 <Product
                 id="483420671"
                 title = "TCL 32 3-Series 720p ROKU Smart TV - 32S335"
                 price = {21450}
                 rating ={4}
                 image ="https://m.media-amazon.com/images/I/61ficuy07aL._AC_UL480_FMwebp_QL65_.jpg" />
                   
                   </div>
            </div>
            
           </div>
            

            
        
    );
}

export default Home;
