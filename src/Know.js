import React,{useEffect} from "react";
import Aos from "aos";
import "./App.css";

let Know=()=>{
     useEffect(()=>{
                Aos.init({duration:1000})
              },[]
            );

    return(
        <>
        <div className="about">
        <div className="about-container">
        <header className="about-header">
          <h1>About Us</h1>
          <p>Discover the world's most breathtaking destinations with us!</p>
        </header>
  
        <section className="about-content">
          <h2>Who We Are</h2>
          <p>
            We are passionate travelers who love to explore and share the beauty of nature, history, and culture.
            Our goal is to provide you with the best travel guides, tips, and experiences to make your trips unforgettable.
          </p>
        </section>
  
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            To inspire and help travelers by providing detailed insights about hills, beaches, spiritual places, and adventures.
            Whether you're a solo traveler, a family explorer, or an adventure seeker, we have something for you!
          </p>
        </section>
  
        <section className="categories">
          <h2>What We Cover</h2>
          <ul>
            <li><b><a href="./Hills" style={{color:"black"}}>HILLS:</a></b> Discover breathtaking mountains and scenic hill stations.</li>
            <li><b><a href="./Beaches" style={{color:"black"}}>BEACHES:</a></b> Relax on stunning beaches with crystal-clear waters.</li>
            <li><b><a href="./Splaces" style={{color:"black"}}>SPIRITUAL PLACES:</a></b> Visit sacred and historic spiritual sites.</li>
            <li><b><a href="./Adventures" style={{color:"black"}}>ADVENTURES:</a></b> Experience thrilling activities like trekking, rafting, and paragliding.</li>
          </ul>
        </section><br></br><hr></hr>
        </div>

        <h2 style={{marginLeft:"60px"}}>Some Of The Real Footage Of Our Trips..</h2><br></br><br></br>
            <h1 style={{textAlign:"center"}}>Videos</h1><br></br>
        <div class="row" className="videos">
            <div class="col-2">
            <video autoPlay loop muted playsInline style={{height:"300px",width:"200px"}}><source src="/sunset.mp4" type="video/mp4"/></video>
            </div>
            <div class="col-2">
            <video autoPlay loop muted playsInline style={{height:"300px",width:"200px"}}><source src="/trek2.mp4" type="video/mp4"/></video>
            </div>
            <div class="col-2">
            <video autoPlay loop muted playsInline style={{height:"300px",width:"200px"}}><source src="/toy.mp4" type="video/mp4"/></video>
            </div>
            <div class="col-2">
            <video autoPlay loop muted playsInline style={{height:"300px",width:"200px"}}><source src="/trek.mp4" type="video/mp4"/></video>
            </div>
            <div class="col-2">
            <video autoPlay loop muted playsInline style={{height:"300px",width:"200px"}}><source src="/road.mp4" type="video/mp4"/></video>
            </div>
            <div class="col-2">
            <video autoPlay loop muted playsInline style={{height:"300px",width:"200px"}}><source src="/river.mp4" type="video/mp4"/></video>
            </div>
        </div><br></br><hr></hr>

        <h1 style={{textAlign:"center"}}>Images</h1><br></br>

        <div class="row" className="images">
            <div class="col-3">
                <img src="https://www.freakouts.com/img/gallery/horsley-hills-adventure-activities.jpg" height={"250px"} width={"290px"} style={{textAlign:"center"}} alt=".."></img>
            </div>
            <div class="col-3">
                <img src="https://static.vecteezy.com/system/resources/previews/013/485/777/non_2x/winter-landscape-with-snow-covered-forest-sunny-day-adventure-hiking-deep-in-the-forest-trail-or-pathway-relaxing-scenic-view-seasonal-winter-nature-landscape-frozen-woodland-serene-peacefulness-photo.jpg" height={"250px"} width={"290px"} style={{textAlign:"center"}} alt=".."></img>
            </div>
            <div class="col-3">
                <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2017/01/1079-Spiritual-Tour-through-India.jpg" height={"250px"} width={"290px"} style={{textAlign:"center"}}alt=".."></img>
            </div>
            <div class="col-3">
                <img src="https://www.lordhanuman.org/wp-content/uploads/2024/03/Hanuman-Statue-Jakhu-Shimla-108-Feet-Tall-Hanuman-Statue-%E0%A4%B9%E0%A4%A8%E0%A5%81%E0%A4%AE%E0%A4%BE%E0%A4%A8-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A4%E0%A4%BF%E0%A4%AE%E0%A4%BE-%E0%A4%B6%E0%A4%BF%E0%A4%AE%E0%A4%B2%E0%A4%BE.jpg" height={"250px"} width={"260px"} style={{textAlign:"center"}} alt=".."></img>
            </div>
        </div>
        <div class="row" className="images">
            <div class="col-3">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/509751424.jpg?k=6362db6c6a4fd4d92cd268b9827eda4b567d8748147f5a06046667ac6a19fcd1&o=&hp=1" height={"250px"} width={"290px"} style={{textAlign:"center"}} alt=".."></img>
            </div>
            <div class="col-3">
                <img src="https://tripxl.com/blog/wp-content/uploads/2024/09/Shimla-5.jpg" height={"250px"} width={"290px"} style={{textAlign:"center"}} alt=".."></img>
            </div>
            <div class="col-3">
                <img src="https://www.fabhotels.com/blog/wp-content/uploads/2018/07/1000x650-123.jpg" height={"250px"} width={"290px"} style={{textAlign:"center"}}alt=".."></img>
            </div>
            <div class="col-3">
                <img src="https://www.peakadventuretour.com/assets/images/amarnath-yatra1.webp" height={"250px"} width={"260px"} style={{textAlign:"center"}} alt=".."></img>
            </div>
        </div><br></br><hr></hr>
            <h2 style={{marginLeft:"80px",marginRight:"80px"}}>Tour And Travels</h2>
            <p style={{marginLeft:"80px",marginRight:"80px"}}>Established in the year 2007,Tour & Travels is a leading Taxi Service Chandigarh. We were established with a vision of delivering the best in class Taxi Service Chandigarh as well as Tempo Traveller Service to the esteemed customers, which they deserve, and to some extent we have succeeded in achieving that. We facilitate domestic as well as foreign customers. We also provide our services to and from Airport, Railway Station and Bus Terminals. We have a number of affordable tour packages from Chandigarh to Shimla, Manali, Amritsar, Dalhousie, Mussoorie, Dharamshala and many more. If you are planning to visit Shimla “Queen of hill station”, then you can hire taxi Chandigarh to Shimla with the customization option available. You can choose any vehicle from our fleet, which comprises of the latest models of Tempo Traveller, Innova, Indigo, Etios, Dzire, XYLO and Scorpio. For larger passenger groups, we offer luxury vehicles with more seating to suit passenger needs laced with security, comfort, speed and safety. We offer fast and convenient booking system with transparent billing system along with 24*7 Pick and Drop facility. We believe in 100% customer satisfaction. Hire taxi service Chandigarh to Shimla, and explore the beautiful queen of hill station like never before.</p>
        <hr></hr><br></br>
        <footer>

  <div class="row" className="footerA">
    
    <div class="col3">
    <a href="./Hills">Hills</a>
      <ul>
        <li>Popular Hill Stations</li>
        <li>Trekking Trails</li>
        <li>Camping Spots</li>
        <li>Best Time to Visit</li>
        <li>Travel Tips</li>
      </ul>
    </div>

    <div class="col3">
    <a href="./Beaches">Beaches</a>
      <ul>
        <li>Top Beach Destinations</li>
        <li>Water Sports Activities</li>
        <li>Best Sunset Views</li>
        <li>Beach Resorts & Stays</li>
        <li>Safety Guidelines</li>
      </ul>
    </div>
    
    <div class="col3">
    <a href="./Splaces">Spiritual Places</a>
      <ul>
        <li>Famous Temples</li>
        <li>Pilgrimage Destinations</li>
        <li>Meditation Retreats</li>
        <li>Religious Festivals</li>
        <li>Cultural Insights</li>
      </ul>
    </div>

    <div class="col3">
      <a href="./Adventures">Adventures</a>
      <ul>
        <li>Hiking & Trekking</li>
        <li>Paragliding & Skydiving</li>
        <li>Scuba Diving & Snorkeling</li>
        <li>Road Trips & Bike Tours</li>
        <li>Wildlife Safaris</li>
      </ul>
    </div>

  </div>
  <div className="icons">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733641.png" height={"40px"} alt=".."></img>
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" height={"40px"} alt=".."></img>
              <img src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png" height={"40px"} alt=".."></img>
              <img src="https://cdn-icons-png.flaticon.com/128/2168/2168336.png" height={"40px"} alt=".."></img>
              <img src="https://cdn-icons-png.flaticon.com/128/2111/2111710.png" height={"40px"} alt=".."></img>
    </div><br></br>
    <p style={{textAlign:"center"}}>© 2025 Your Travel Website. All rights reserved.</p>
</footer>
      
      </div>
      </>
    )
}

export default Know;