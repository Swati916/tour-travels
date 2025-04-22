import React,{useEffect,useState} from "react";
import Aos from "aos";
import "./App.css";

let Adventures=()=>{
    const [form, setForm] = useState({});
      const [errors, setErrors] = useState({});
    
      const handleForm = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
    
        // Clear error when user starts typing
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        let newErrors = {};
    
        if (!form.username?.trim()) {
          newErrors.username = "Username is required";
        }
        if (!form.password?.trim()) {
          newErrors.password = "Password is required";
        } else if(form.password.length<8){
          newErrors.password = "Password Must Be 8 Characters Long"
        }
        if (!form.email?.trim()) {
          newErrors.email = "Email is required";
        } else if (!form.email.includes("@")) {
          newErrors.email = "Enter a valid email";
        }
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
          try {
            const response = await fetch("http://localhost:8080/demo", {
              method: "POST",
              body: JSON.stringify(form),
              headers: {
                "Content-Type": "application/json",
              },
            });
    
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error("Error submitting form:", error);
          }
        }
      };
    

        useEffect(()=>{
                Aos.init({duration:1000})
              },[]
            ); 


    return(
        <>
        <div className='adventure'>
        <h1><u>The Most Adventurous Treks of India</u></h1>
        <div className='adventure2'>
          <h1><u>The Most Adventurous Treks of India</u></h1>
          <h3>Trekking, on the other hand, is a more easy-paced and cooperative affair. It involves walking up the mountains at one's own speed, looking at the valleys, rivers, snow and trees (these disappear above 14, 000 ft), greeting and chatting with fellow travellers and villagers you meet on the way. </h3>
          <div data-aos="zoom-in" className='four'>
             <h1>1. Sandakphu Trek</h1>
           <div className='flex'>
           <div><img src='https://media1.thrillophilia.com/filestore/pgul6a8dhint8pny9anys8vhnrzs_shutterstock_1011368053.jpg?w=753&h=450&dpr=2.0' alt='...' height={"300px"} width={"302px"}></img></div>
             <div><p style={{marginRight:"15px"}}>The Sandakphu Trek is tucked away in the Darjeeling district of West Bengal and provides breathtaking panoramas of the highest peaks on Earth. It's rated moderate to challenging, so both beginners and seasoned hikers can enjoy it. The scenery is adorned by snow-capped peaks from Tibet, Bhutan, and Nepal. Being a part of Singalila National Park, you'll see a diverse range of animals and plants.</p>
             
             <p> Discover the turns of the Old Silk Road while taking in the warmth of the people. The area is dotted with magnolias and rhododendrons, which add to its picturesque appeal. Immerse yourself in local culture, marvel at breathtaking landscapes, and experience genuine hospitality on the Sandakphu Trek.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in"className='four'>
             <h1>2. Goechala Trek, Sikkim</h1>
           <div className='flex'>
           <div><img src='https://media1.thrillophilia.com/filestore/i6x6a0d3l2172kjcjpnso4zbfuoe_shutterstock_1777319813.jpg?w=753&h=450&dpr=2.0' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p style={{marginRight:"15px"}}>GoechaLa trek is nestled at a height of 16,207 ft, with a closer look at the third-highest peak-Mt. Kanchenjunga. It is a dream and desire for hundreds of adventure lovers. Bounded by the mesmerizing flora and fauna, which are so vibrant and colourful to cheer up one's mood.</p>
             
             <p>The GoechaLa pass trek is a bundle of big summits, making it an absolute adventure to embark on. The trail link with the famous Kanchenjunga National Park, where one can witness the true nature, enough to revitalize your senses. To watch the mountains clearly, April and May are the ideal months.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in"className='four'>
             <h1>3.Kedarkantha Trek, Uttarakhand</h1>
           <div className='flex'>
           <div><img src='https://media1.thrillophilia.com/filestore/tnsjevcx5ohyaqtunfzgxs265q4m_shutterstock_1477312256.jpg?w=753&h=450&dpr=2.0' alt='...' height={"300px"} width={"302px"}></img></div>
             <div><p style={{marginRight:"15px"}}>Kedarkantha Trek is a renowned winter trek in Uttarakhand, India, known for its stunning snow-covered landscapes and panoramic views of the Himalayas. The trek starts from Sankri village and takes around 5 days to complete, covering approximately 20 kilometres. The trail passes through dense pine forests, meadows, and quaint villages, offering a unique experience for trekkers.</p>
             
             <p>making it suitable for both beginners and experienced trekkers. 

Trekkers witness breathtaking snowy panoramas, making it a dream trek for those seeking an unforgettable winter experience. Thrillophilia’s Kedar Kantha trek packages are often chosen for their inclusions, accessibility, beautiful trails and experienced guides.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in"className='four'>
             <h1>4. Brahmatal Trek, Uttarakhand</h1>
           <div className='flex'>
           <div><img src='https://media1.thrillophilia.com/filestore/vsh2dr0jlgpiyi4sj9l6gjtx4lx2_1599653241_DSC_9776.jpg?w=753&h=450&dpr=2.0' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p style={{marginRight:"15px"}}>One can reach the base camp at Lohajung by road from Rishikesh, Kathgodam, and Dehradun as well. It takes around 7.5 hours to cover the distance of 255 kilometres from Rishikesh, while it takes around 7 hours to cover the distance of 215 kilometres from Kathgodam.</p>
             
             <p>Another jewel of the Himalayas that is untouched by trekkers around the world is the Brahmatal Trek, which is devoted to Lord Brahma. It is beautifully positioned amidst the Himalayas and covered with blankets of snow. The trail allows you to see the centuries-old forest of oak and rhododendron. Walking in meadows besides Brahamatal Ridge, you can see many sites of the Roopkund Trek.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in"className='four'>
             <h1>5. Kuari Pass Trek from Joshimath</h1>
           <div className='flex'>
           <div><img src='https://media1.thrillophilia.com/filestore/yxiaev4vym7rjnzt604tr27qf8be_20eyzawux01fyq1avdnwvv06egjb_Kuari%20Pass%20Trek%203.jpg?w=753&h=450&dpr=2.0' alt='...' height={"280px"} width={"302px"}></img></div>
             <div><p style={{marginRight:"15px"}}>
             A top winter trekking destination in India, the Kuari Pass Trek is tucked away in the gorgeous Garhwal region of the Himalayas. This trail, also known as the Lord Curzon trail, is situated at an elevation of 12,516 feet and offers both historical value and breathtaking natural scenery. </p>
             
             <p>You can experience the vibrant local traditions of Uttarakhand as you travel through villages of Tugasi, Guling, and Khullara with the Kuari Pass trek package. The Pangarchulla, Chaukhamba, Neelkanth, Dronagiri, Hathi Ghoda, and Nilgiri mountain ranges are among the breathtaking sights that can be seen from the trail. </p></div>
           </div>
          </div>

          <div data-aos="zoom-in"className='four'>
             <h1>6. Dayara Bugyal Trek Uttarakhand</h1>
           <div className='flex'>
           <div><img src='https://media1.thrillophilia.com/filestore/hpqs1msm2xm2onxkbxjyerdnzoxy_shutterstock_1340520197.jpg?w=753&h=450&dpr=2.0' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p style={{marginRight:"15px"}}>
             Discover the charming beauty of Himalayan meadows and valleys as you go for the iconic Dayara Bugyal trek in Uttarakhand with Thrillophilia. Our trek itineraries are designed to include the best experiences within the stipulated time to ensure you don’t miss anything. From providing experienced trek leaders and pickup and drop services to ensuring top-notch safety and comfort on the trek, we do it all.</p>
             
             <p>It is situated at a height of over 11,000 feet. The lush alpine meadow is surrounded by giant Himalayan peaks of Gangotri Peak, Bandarpoonch, Kala Nag, Srikanth Peak, and Shrikhand Mahadev.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in"className='four'>
             <h1>7. Har Ki Dun Trek, Uttarakhand</h1>
           <div className='flex'>
           <div><img src='https://media1.thrillophilia.com/filestore/l8q0kej9bbbq7gj4vy4fktqrr3pd_toomas-tartes-Yizrl9N_eDA-unsplash%20(1).jpg?w=753&h=450&dpr=2.0' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p style={{marginRight:"15px"}}>
             Being an easy-moderate level trek, Har Ki Dun receives well-deserved importance in the trekking community worldwide. The name “Har Ki Dun” refers to the “Valley of Lord Mahadev”. Its trails take you through dense forests of pine and deodar trees, along the banks of rapidly flowing Tons and Supin rivers, and across several undulating landscapes. </p>
             
             <p>One of the main reasons for choosing to undertake this exciting adventure with Thrillophilia lies in our on-ground support. With well-arranged camps, proper food, and immediate rescue facilities, you can find comfort even in the nooks of the mighty Himalayas. </p></div>
           </div>
          </div>

          <div data-aos="zoom-in"className='four'>
             <h1>8. Bara Bhangal Trek, Himachal Pradesh</h1>
           <div className='flex'>
           <div><img src='https://media1.thrillophilia.com/filestore/297lv2idpdurey6hoc8qvp21zeho_shutterstock_1518801341%20(1).jpg?w=753&h=450&dpr=2.0' alt='...' height={"270px"} width={"302px"}></img></div>
             <div><p style={{marginRight:"15px"}}>
             Bara Bhangal trek will offer you the chance to explore the mighty Dhauladhar and Pir Panjal ranges and provide you the best opportunity to become familiar with the quaint and remote culture of the local dwelling in the villages in the valleys. You will traverse through Indrasan and Bara Shigri glacier.</p>
             
             <p>The first day of the eleven days will be taking you through the thick forests but offers you the distinct views of multiple peaks at the distance and the alpine plateau studded with thick growth of alpine flowers in the last leg. 360-degree views of Dhauladhar and Pir Panjal Ranges can be obtained from Kalihani.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in"className='four'>
             <h1>9. Valley of Flowers Trek with Hemkund Sahib, Uttarakhand</h1>
           <div className='flex'>
           <div><img src='https://media1.thrillophilia.com/filestore/zjh9smyb4jwm1g4u19kyyqz402v5_shutterstock_2327763641.jpg?w=753&h=450&dpr=2.0' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p style={{marginRight:"15px"}}>
             Valley of Flowers "Foolon ki Ghati" is one of those beautiful trekking expeditions that can be enjoyed during the monsoon season. It is flawlessly nestled in the West Himalayan region of Uttarakhand and lies at a lofty height of 3600 m above sea level. With an opportunity to spot the very rare blue Primula, the Valley Of Flowers trek is one of the best-known treks in the world.</p>
             
             <p>The Valley of Flowers is also believed to be the place from where Hanuman brought the magical herb to resuscitate Lakshman in the Hindu epic Ramayan. Just as you set your foot into the valley, the intoxicating mix of fragrances emitted from the flowers makes you feel in a paradise.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in"className='four'>
             <h1>10. Nag Tibba Trek, Uttarakhand</h1>
           <div className='flex'>
           <div><img src='https://media1.thrillophilia.com/filestore/0assp1aut8r4dgn8rdthn329hu6h_shutterstock_537028474.jpg?w=753&h=450&dpr=2.0' alt='...' height={"280px"} width={"302px"}></img></div>
             <div><p style={{marginRight:"15px"}}>
             rek to the highest peak of the lower Himalayas in Uttarakhand and be captivated by mesmerizing views at an elevation of around 3,200 meters.

Enjoy stunning views of the Pir Panjal and Dhauladhar ranges as you follow a trail lined with towering oak trees, rhododendrons, pines, and deodars.Witness the rich biodiversity of the Nag Tibba trek, renowned for its diverse flora and fauna, making your journey through the vibrant landscape even more enchanting.</p>
            
             <p>Reach the summit to discover the mythologically significant temple of Nag Devta.

Explore the quaint villages, interact with the locals, and encounter their cultural traditions as you make your way up to the Nag Tibba base camp. </p></div>
           </div>
          </div>
          </div><br></br><hr></hr><br></br>
          <div className='tablemap'>
            <div className='tablem'>
              <h2 style={{marginLeft:"300px", paddingBottom:"10px"}}>Packages</h2>
              <table>
            <tr>
        <td style={{backgroundColor:"black", width:"300px"}}><b style={{color:"white"}}>Package</b></td>
        <td style={{backgroundColor:"black", width:"150px"}}><b style={{color:"white"}}>Duration</b></td>
        <td style={{backgroundColor:"black", width:"200px"}}><b style={{color:"white"}}>Starting Price</b></td>
      </tr>

      <tr>
        <td>Gaumukh Tapovan Trek</td>
        <td>6D/5N</td>
        <td>₹ 15,400</td>
      </tr>


      <tr>
        <td>Har Ki Dun Trek</td>
        <td>7D/6N</td>
        <td>₹ 8900</td>
      </tr>

      <tr>
        <td>Kuari Pass Trek</td>
        <td>6D/5N</td>
        <td>₹ 7500</td>
      </tr>

      <tr>
        <td>Naag Tibba Trek</td>
        <td>2D/1N</td>
        <td>₹ 8500</td>
      </tr>

      <tr>
        <td>Pin Parvati Pass Trek</td>
        <td>11D/10N</td>
        <td>₹ 25,700</td>
      </tr>

      <tr>
        <td>Bali Pass Trek</td>
        <td>9D/8N</td>
        <td>₹ 17,900</td>
      </tr>

      </table>
            </div>
        
        <div className='mapt'>
          <h2 style={{paddingBottom:"10px", textAlign:"center"}}>Our Office Location</h2>
        <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.424280339828!2d76.73295807426575!3d30.734581585545605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed9e4fa70fbd%3A0xf36fffd65f231c5b!2sTour%20and%20travels!5e0!3m2!1sen!2sin!4v1739520179468!5m2!1sen!2sin" width="450" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iFrame>
        </div>
          </div><hr></hr>

          <h1 style={{textAlign:"center"}}>Give Details For Any Further Enquiry</h1>
      
      <div className='enquiryad'>
      <form onSubmit={handleSubmit}>
         <div>
         <span style={{fontSize:"20px"}}>Username:</span>
         <input type="text"name="username" autoComplete="off" onChange={handleForm} style={{marginLeft:"10px",backgroundColor:"white"}}></input><br></br><br></br>
         {errors.username && <span style={{color:"red"}}>{errors.username}</span>}
         </div>

         <div>
         <span style={{fontSize:"20px"}}>Password:</span>
         <input type="password" name="password" autoComplete="off" onChange={handleForm} style={{marginLeft:"12px", backgroundColor:"white"}}></input><br></br><br></br>
         {errors.password && <span style={{color:"red"}}>{errors.password}</span>}
         </div>

         <div>
         <span style={{fontSize:"20px"}}>Email:</span>
         <input type="email"name="email" autoComplete="off" onChange={handleForm} style={{marginLeft:"45px",backgroundColor:"white"}}></input><br></br><br></br>
         {errors.email && <span style={{color:"red"}}>{errors.email}</span>}
         </div>


         <input type="submit" style={{height:"40px", width:"80px", fontSize:"18px", borderRadius:"18px", backgroundColor:"rgb(116, 111, 111)"}}></input>
       </form>

        </div><br></br><hr></hr><br></br>
        <div className='foot'>
      <ul>
        <li><img src="https://cdn-icons-png.flaticon.com/128/733/733641.png" height={"40px"} alt=".."></img></li>
        <li><img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" height={"40px"} alt=".."></img></li>
        <li><img src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png" height={"40px"} alt=".."></img></li>
      </ul>
      </div>
      <br></br>
      <div className='footpoint'>
      <ul style={{fontSize:"18px"}}>
        <li>Info</li>
        <li>Support</li>
        <li>Marketing</li>
      </ul>
      </div>
    
    <div className='footpoint2'>
      <ul>
        <li>Term of Use</li>
        <li>Privacy Policy</li>
      </ul>
    </div><br></br><br></br>
    <p style={{textAlign:"center"}}>copyright@2025</p>
        </div>
        </>
    )
};

export default Adventures;