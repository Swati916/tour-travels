import React,{useEffect,useState} from 'react';
import Aos from 'aos';
let Beaches=()=>{


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
        <div className='beach'>
        <h1><u>List Of Best Indian Beaches That You Must Visit.</u></h1>
        <div className='beach2'>
          <h1><u>List Of Best Indian Beaches That You Must Visit.</u></h1>
          <h3>A beach is made of very small loose rock (sand) that gathers at the shore of a body of water. Beaches are created by waves or currents. The sand comes from erosion of rocks both far away from and near the water. Coral reefs are a major source of sand.</h3>
          <div data-aos="zoom-in"className='two'>
             <h1>1. Radhanagar Beach, Andaman Nicobar Islands</h1>
           <div className='flex'>
             <div><img src='https://www.holidify.com/images/cmsuploads/compressed/RadhanagarBeach_20190520152048_20190520152129.jpg' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p>Awarded with the title of 'Asia's Best Beach' by the TIMES magazine in 2004, Radhanagar Beach in Havelock Island with its turquoise blue waters and powdery white sands lives up to the moniker. Its vast shores of endless white grains stretch across 2 kilometres, making it a prime attraction of the Andaman and Nicobar Islands. Avoid the rainy season. Visit either between March to May or September to February.</p></div>
                <p> You can also book beach beds, parasols, and umbrellas while they spend hours merely lounging at this exquisite wonderland. Radhanagar Beach Andaman is just adjacent to Elephant beach, so you may find mahouts taking out their elephants for a joyride to the tourists. The beach is also secure with patrolling lifeguards ready for rescue.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='two'>
             <h1>2. Calangute Beach</h1>
           <div className='flex'>
             <div><img src='https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1314723038_20190822145625.jpg' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p>Calangute Beach, often dubbed the "Queen of Beaches" in Goa, offers a vibrant blend of sun-soaked sands, water sports like parasailing and jet-skiing, and a lively atmosphere filled with beach shacks serving delectable Goan cuisine. As the largest beach in North Goa, it's a hub for tourists seeking both relaxation by the Arabian Sea and a taste of the region's bustling nightlife. Visit after monsoon to enjoy the water sports.</p></div>

             <p>While the days here are filled with beach fun, nights call for upbeat parties and letting your hair down. Calangute is also popular for staying in Goa as it keeps you well-connected to the other beaches in the north such as Baga, Anjuna, Candolim, Aguada and many more.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='two'>
             <h1>3. Minicoy Island Beach</h1>
           <div className='flex'>
             <div><img src='https://www.holidify.com/images/cmsuploads/compressed/7543502394_1d22cbd3f0_b_20170423194400.jpg' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p>Minicoy Island Beach, part of the Lakshadweep archipelago, is a serene paradise boasting crystal-clear turquoise waters, vibrant coral reefs ideal for snorkeling and diving, and a unique blend of Maldivian and South Indian culture. Visitors can experience the island's traditional Lava dance, explore the ancient lighthouse for panoramic views, and indulge in its tranquil, untouched beauty.</p></div>

             <p>This picturesque destination is a popular tourist spot and has gained immense popularity due to activities like tuna canning, tuna fishing and the presence of pristine palm-fringed beaches. Tourists can enjoy some of the most memorable moments here during winters and the onset of summer, as the weather here is ideal during those months.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='two'>
             <h1>4. Varkala</h1>
           <div className='flex'>
             <div><img src='https://www.holidify.com/images/bgImages/VARKALA.jpg' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p>Varkala Beach, perched along Kerala's coastline, offers a stunning backdrop of cliffs adjacent to the Arabian Sea, making it a unique spot for sunbathing, swimming, and paragliding. The nearby natural mineral springs, ancient Janardhan Temple, and bustling local markets enrich the experience, offering both rejuvenation and cultural immersion.</p></div>

             <p>Popular water activities include paragliding and swimming at Varkala Beach, where golden sands meet turquoise waters, creating a picturesque setting for beachgoers. Adventurous souls can also explore the nearby backwaters, take surfing lessons, or embark on boat rides along the tranquil waterways. </p>
           </div>
          </div>

          <div data-aos="zoom-in"className='two'>
             <h1>5. Om Beach</h1>
           <div className='flex'>
             <div><img src='https://www.holidify.com/images/cmsuploads/compressed/1007_20190222161406jpg' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p>
             Om Beach, named for its unique crescent shape resembling the spiritual Om symbol, is a serene destination in Gokarna, Karnataka, perfect for beach trekking, boat rides, and indulging in watersports like banana boat rides and jet skiing. Its laid-back vibe is complemented by beachside cafes, offering fresh seafood and views of mesmerizing sunsets.</p></div>

             <p>One can spot fishermen boats, small cafes and eateries and crows swirling up in the sky at this beautiful beach. The beauty of this beach compels many visitors even to cross the danger area (marked by red) and play in the splashing waves.  This place is a heaven for all the shutterbugs, with some mind-blowing sceneries amidst the rocky terrain.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='two'>
             <h1>6. Kovalam Beach</h1>
           <div className='flex'>
             <div><img src='https://www.holidify.com/images/cmsuploads/compressed/Kovalam_Lighthouse_20180331130307.jpg' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p>
             Kovalam Beach, a crescent-shaped haven in Kerala, boasts three pristine beaches where visitors can enjoy sunbathing, surfing, and wooden boat rides on the shimmering waters. Lined with swaying palm trees, the beachfront is dotted with Ayurvedic massage centers, seafood restaurants, and bustling local markets, providing an authentic taste of Kerala's coastal charm.</p></div>

             <p>The beach is also well known for its lush palm plantations and trees that dot the entire area. Easy accessibility, lip-smacking food and affordable lodging add to the charm of this place.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='two'>
             <h1>7. Kanyakumari Beach, Kanyakumari</h1>
           <div className='flex'>
             <div><img src='https://www.holidify.com/images/cmsuploads/compressed/33562178483_5a14a1c28e_z_20190307172307.jpg' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p>
             Kanyakumari Beach stands out for its multicolored sands and its unique position at India's southernmost tip, where visitors can witness the confluence of the Bay of Bengal, Arabian Sea, and the Indian Ocean. The beach offers a magical vantage point to witness both sunrise and sunset, and the nearby Vivekananda Rock Memorial adds to its charm.</p></div>

             <p>The beach is not conducive to swim or surf as the water as the sea is rough and the beach is rocky.To enjoy the best view, you can visit the Triveni Sangam point and climb up the famous lighthouse watchtower to entirely take in its beauty.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='two'>
             <h1>8. Puri Beach</h1>
           <div className='flex'>
             <div><img src='https://www.holidify.com/images/cmsuploads/compressed/shutterstock_734468563_20200312182246_20200312182307.png' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p>
             Puri Beach, renowned for its golden sands and pristine waters, stands as a spiritual epicenter with the iconic Jagannath Temple nearby and is a hub for traditional sand art displays and vibrant beachside festivals. Tourists can indulge in delectable seafood, take camel rides, and experience the unique culture of Odisha.</p></div>

             <p>Tourists can easily distinguish the local fishermen by their triangular straw hats and dhotis. These fishermen also serve as the lifeguards on the beach and take visitors out in the sea on their boats to look at the mesmerising sunset. The stretch on the Chakratirtha side is much more tranquil and pleasant for a long stroll, and if you're feeling a little adventurous you can also go into the waters for a swim.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='two'>
             <h1>9. Palolem Beach</h1>
           <div className='flex'>
             <div><img src='https://www.holidify.com/images/cmsuploads/compressed/attr_73_20190710110545.jpg' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p>
             Palolem Beach, known for its crescent-shaped shoreline and swaying palm trees, offers a tranquil setting ideal for sunbathing, dolphin-spotting, and engaging in water sports. Its relaxed vibe is enhanced by the charming beach huts lining the shore and the vibrant nightlife featuring silent discos.</p></div>

             <p>Other main attractions at Palolem are the clean shoreline, beach shacks and a few souvenir shops. Cossetted within lofty highlands on either side, the Palolem Beach is adorned with tranquil surroundings. The entire stretch of the beach can be explored on foot in 15-20 minutes. Palolem Beach is also known for its silent noise parties.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='two'>
             <h1>10. Elephant Beach</h1>
           <div className='flex'>
             <div><img src='https://www.holidify.com/images/cmsuploads/compressed/shutterstock_365085719_20200116102256_20200116102320.png' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p>
             Elephant Beach in Havelock Island is best known for its stunning coral reefs, making it a paradise for snorkeling and diving enthusiasts, and its white sandy shoreline provides a serene setting for sunbathing and beach relaxation. The picturesque landscape, combined with the vibrant marine life beneath the clear waters, ensures a memorable visit for every traveler.</p></div>

             <p>There are two ways to reach Elephant Beach: Take a ferry from Havelock Jetty to Elephant Beach (1000 INR per person) or trek for half an hour with a guide (INR 500). The trek starts at a distance of 2km from Radhanagar Beach.</p>
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
        <td>5 Nights 6 Days Andaman Package</td>
        <td>6D/5N</td>
        <td>₹ 18,450</td>
      </tr>


      <tr>
        <td>Romantic Honeymoon Getaway: Best Kerala Package for Couples</td>
        <td>4N/5D</td>
        <td>₹ 21,000</td>
      </tr>

      <tr>
        <td>Holy Karnataka Pilgrimage Package</td>
        <td>8D/7N</td>
        <td>₹ 38,750</td>
      </tr>

      <tr>
        <td>Time to Unwind in Goa</td>
        <td>3D/2N</td>
        <td>₹ 8000</td>
      </tr>

      <tr>
        <td>Lakshadweep tour in 5 days</td>
        <td>5D/4N</td>
        <td>₹ 17300</td>
      </tr>

      <tr>
        <td>Maldives 6 days trip for couple</td>
        <td>6D/5N</td>
        <td>₹ 25950</td>
      </tr>

      </table>
            </div>
        
        <div className='mapt'>
          <h2 style={{paddingBottom:"10px", textAlign:"center"}}>Our Office Location</h2>
        <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.424280339828!2d76.73295807426575!3d30.734581585545605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed9e4fa70fbd%3A0xf36fffd65f231c5b!2sTour%20and%20travels!5e0!3m2!1sen!2sin!4v1739520179468!5m2!1sen!2sin" width="450" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iFrame>
        </div>
          </div><hr></hr>

          <h1 style={{textAlign:"center"}}>Give Details For Any Further Enquiry</h1>
      
      <div className='enquiryb'>
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
}
export default Beaches;