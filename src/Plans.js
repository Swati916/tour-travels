import React, {useEffect} from "react";
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Card from 'react-bootstrap/Card';


let Home=()=>{
  useEffect(()=>{
    Aos.init({duration:1000})
  },[]
);
    return(<>
            <div className="plans">
            <h1 data-aos="zoom-in">How to plan a vacation in 5 steps</h1>
            <div className="plans2">
             <p>Is your social media feed filled with smiling faces at the beach or atop a scenic mountain? With travel at the top of many people’s agendas, perhaps you’re imagining where you’ll go next. It might be time to cash in your vacation days if travel fits into your financial goals this year. </p><br></br>
            <p>Planning a trip could seem like a lot of work, but these tips from seasoned travelers can get you en route with ease. Here’s how to plan a budget-friendly vacation in eight steps.</p>
            <img data-aos="zoom-in" src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2F0ZXdheSUyMG9mJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D" height={"500px"} width={"500px"} alt=".."></img><br></br>
            <br></br><h2><b>Key Takeaways</b></h2>
            <ul>
              <li>Keeping a travel budget can ensure that the trip fits into your financial goals.</li>
              <li>Being flexible with travel dates, booking flights and tickets ahead of time and searching for deals may help save money on vacation.</li>
              <li>Using smart packing tips and researching local customs can help you be prepared for every step of the journey.</li>
            </ul>
            <br></br>
            <hr></hr>
            <br></br>
          

            <div className="points">
            <h2>1. List your dream locations and choose your adventure.</h2><br></br>
            <p>The first step in vacation planning? Choosing where to go.</p>
            <p>“Are you looking for a romantic getaway?” asks Fred Hoffman, full-time traveler and founder of The True Wilderness. “A family-friendly vacation? Or an adventure-packed trip?” He suggests considering the kind of trip you want to take. This can help you pick a location.</p>
            <p>Eva Keller, blogger at Discovering Hidden Gems, recommends creating a vacation bucket list. “By having an idea of where you want to go, you’ll have a good starting point each time you sit down to plan a vacation,” Keller explains. Her vacation bucket list includes more than just destinations. It also lists experiences like a river cruise and wine tasting as well as certain cultures she wants to explore.</p>
            <img data-aos="zoom-in" src="https://assets.vogue.in/photos/5d0c8a0e5ddd2b527d75e973/1:1/w_903,h_903,c_limit/The%20Tamara%20Coorg.jpg" height={"400px"} width={"700px"} alt="..."></img>           
            <br></br><hr></hr><br></br>
            
              <h2>2. Plan your budget</h2>
              <p>A travel budget can set the tone—and spending limits—for your next vacation. Consider how much you’re willing to pay for transportation, accommodations, food and activities. “If you have a higher budget, it’s a good idea to schedule an overseas vacation,” Hoffman says. “If you’re looking to save money, consider taking a road trip or camping trip instead.”</p>
              <p>Rebecca Gade Sawicki of vegan travel blog Veggies Abroad agrees. “Always know your budget, and make sure it’s front and center with your planning,” she says. If your budget is less than $1,000 per person, she suggests steering away from luxurious locations and searching for more affordable options.</p>
              <ul>
                <li>How much can I afford to spend in total?</li>
                <li>How flexible is my travel timeline?</li>
                <li>Are there more affordable locations offering similar experiences?</li>
                <li>Do I have access to discounts I can take advantage of?</li>
              </ul>
              <img data-aos="zoom-in"src="https://www.shutterstock.com/image-photo/save-money-airplane-tickets-planning-600nw-2258438213.jpg" height={"400px"} width={"700px"} alt="..."></img>
            <br></br><hr></hr><br></br>
            
              <h2>3. Check your calendar and research dates.</h2>
              <p>With a location and budget in mind, you can schedule dates for your vacation. The price of travel could vary depending on the month and even the day of the week.</p>
              <p>“If you’re flexible with your dates, you may be able to save money by traveling during the offseason,” Hoffman says. </p>
              <p>For example, beaches and amusement parks can be especially busy during the summer when kids are out of school. And many folks plan trips around holidays like Memorial Day and Thanksgiving. These high-traffic seasons can make prices skyrocket. If you’re able to go on vacation while other people are working or in school, you might be able to save money.</p>
            <br></br><hr></hr><br></br> 

              <h2>3. Check your calendar and research dates.</h2>
              <p>With a location and budget in mind, you can schedule dates for your vacation. The price of travel could vary depending on the month and even the day of the week.</p>
              <p>“If you’re flexible with your dates, you may be able to save money by traveling during the offseason,” Hoffman says. </p>
              <p>For example, beaches and amusement parks can be especially busy during the summer when kids are out of school. And many folks plan trips around holidays like Memorial Day and Thanksgiving. These high-traffic seasons can make prices skyrocket. If you’re able to go on vacation while other people are working or in school, you might be able to save money.</p>
              <br></br><hr></hr><br></br>

              <h2>4. Book flights and hotels.</h2>
              <p>When booking your flight, be sure to compare prices between different airlines,” Hoffman recommends. “You may also want to look into flight times and schedules to see what will work best for your trip.”</p>
              <p>Once you arrive, where will you want to stay? The type of experience you want might determine the lodging you book. “If you’re traveling on a tight budget, you may want to look into hostels,” Hoffman says. “For a more comfortable trip, you can book a hotel room or vacation home.” He suggests reading reviews and comparing prices before making a reservation.</p>
              <p>And if you're a Venture X cardholder, you could check out the hotels offered in the Premier Collection through Capital One Travel. Enjoy a suite of exclusive benefits with every stay like a $100 experience credit, daily breakfast for two and more.</p>
              <br></br><hr></hr><br></br>

              <h2>7. Pack your bags.</h2>
              <p>A well-packed suitcase can be a staple of a stress-free vacation. If you’re gazing into your closet and wondering what to bring, consider making a packing list.</p>
              <p>“Even the most seasoned travelers can be forgetful, but a packing list can do wonders to ensure you don’t forget anything,” Gade Sawicki says. She recalls a time she forgot to bring her camera and ended up buying a new one in Spain—not an expense she planned for.</p>
              <p>It also might help to pack lightly and efficiently. Gade Sawicki jokes that unless you’re going on a formal trip, you can leave the ball gown at home. “We tend to bring more than we need,” she says. She also suggests rolling your clothes to save space. “Using these tips, you can easily fit everything in a carry-on suitcase.”</p>
              <img data-aos="zoom-in" src="https://cdn.thewirecutter.com/wp-content/media/2022/09/backpacks-2048px-29.jpg?auto=webp&quality=75&width=1024" height={"400px"} width={"700px"} alt="..."></img>
              <br></br><hr></hr><br></br>
            </div>
            </div>
            <h2 style={{textAlign:"center"}}>Related Content...</h2><br></br>
            <div className="cards">
              
            <Card data-aos="zoom-in-right" className="c" style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://ecm.capitalone.com/WCM/learn-grow/card/lgc060_hero_traveling-on-a-budget_v1.jpg" />
      <Card.Body>
        <Card.Title>MORE THAN MONEY</Card.Title>
        <Card.Text style={{fontSize:"20px"}}>
        Cheap vacation spots for travelers on a budget in 2024.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card data-aos="zoom-out" className="c" style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://ecm.capitalone.com/WCM/learn-grow/card/lgc742_hero_cheap-vacation-spots_v1.jpg" />
      <Card.Body>
        <Card.Title>MORE THAN MONEY</Card.Title>
        <Card.Text style={{fontSize:"20px"}}>
        16 travel packing tips for your next adventure.
        </Card.Text>
      </Card.Body>
    </Card>



    <Card className="c" data-aos="zoom-in-left" style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://ecm.capitalone.com/WCM/learn-grow/card/lgc242_hero_travel-packing-tips_v1.jpg" />
      <Card.Body>
        <Card.Title>MORE THAN MONEY</Card.Title>
        <Card.Text style={{fontSize:"20px"}}>
        18 tips for traveling on a budget.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <br></br><br></br>


          <div className="footer">

            <div className="icons">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733641.png" height={"40px"} alt=".."></img>
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" height={"40px"} alt=".."></img>
              <img src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png" height={"40px"} alt=".."></img>
              <img src="https://cdn-icons-png.flaticon.com/128/2168/2168336.png" height={"40px"} alt=".."></img>
              <img src="https://cdn-icons-png.flaticon.com/128/2111/2111710.png" height={"40px"} alt=".."></img>
            </div><br></br>
              <div class="row">

                <div class="col-2">
                  <h3><u>Products</u></h3>
                  <ul>
                    <li>Credits Cards</li>
                    <li>Checking & Savings</li>
                    <li>Auto</li>
                    <li>Business</li>
                    <li>Commercials</li>
                    <li>Capital One Shopping</li>
                  </ul>
                </div>

                <div class="col-2">
                  <h3><u>On The Go</u></h3>
                  <ul>
                    <li>Locations & ATMs</li>
                    <li>Capital One Travel</li>
                    <li>Mobile App</li>
                    <li>Meet Eno</li>
                    <li>Digital Payments</li>
                  </ul>
                </div>

                <div class="col-2">
                  <h3><u>Legal</u></h3>
                  <ul>
                    <li>Privacy</li>
                    <li>Patriot Act Services</li>
                    <li>Wolfsberg Questionnaire</li>
                    <li>Subpoena Policy</li>
                    <li>Additional Disclosures</li>
                  </ul>
                </div>

                <div class="col-2">
                  <h3><u>Support</u></h3>
                  <ul>
                    <li>COVID-19</li>
                    <li>Help Center</li>
                    <li>Learn & Grow</li>
                    <li>Resources for Military</li>
                    <li>Accessibility Assistance</li>
                    <li>Security</li>
                    <li>Contact Us</li>
                  </ul>
                </div>

                <div class="col-2">
                  <h3><u>Get to Know Us</u></h3>
                  <ul>
                    <li>About</li>
                    <li>Corporate Information</li>
                    <li>Newsroom</li>
                    <li>Technology</li>
                    <li>Investors</li>
                    <li>Careers & Jobs</li>
                  </ul>
                </div>  
                <div class="row">
                  <div class="col-12" style={{textAlign:"center", marginBottom:"35px", marginTop:"10px"}}><u>copyright@2025</u></div>
                  </div>             
              </div>
          </div>
            </div>
           </>
        
    )
}

export default Home;

