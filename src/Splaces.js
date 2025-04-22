import React,{useEffect,useState} from "react";
import Aos from "aos";
import "./App.css";

let Splaces=()=>{

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
        <div className='splaces'>
        <h1><u>From Varanasi to Rameshwaram: Top 10 Spiritual Places in India</u></h1>
        <div className='splaces2'>
          <h1><u>From Varanasi to Rameshwaram: Top 10 Spiritual Places in India</u></h1>
          <h3>India is a haven for spiritual seekers, offering a diverse array of sacred destinations. The latest trends in spiritual tourism in India have rapidly gained momentum, with not only Indian travelers but international tourists also showing a keen interest in exploring the country’s spiritual treasures. </h3>
          <div data-aos="zoom-in"className='three'>
             <h1>1. Chardham, Uttarakhand</h1>
           <div className='flex'>
             <div><p style={{marginRight:"15px"}}>Yamunotri: Situated at 3,293 meters, it is the source of the Yamuna River. The main attraction is the Yamunotri Temple dedicated to Goddess Yamuna. Pilgrims trek around 6 kilometers from Hanuman Chatti to reach the temple.
             Gangotri: Located at 3,100 meters, it is the origin of the sacred Ganges River. The Gangotri Temple, dedicated to Goddess Ganga, is the focal point. Pilgrims trek approximately 18 kilometers from Gangotri town to reach the temple.</p></div>
             <div><img src='https://www.bontravelindia.com/wp-content/uploads/2021/09/Chardham-Yatra.jpg' alt='...' height={"300px"} width={"302px"}></img></div>
             <div><p> Kedarnath: Positioned at 3,583 meters, it is dedicated to Lord Shiva. This is considered as one of the twelve Jyotirlingas in India. Pilgrims face a challenging trek of about 16 kilometers from Gaurikund to reach the temple.
             Badrinath: Found at 3,133 meters, it is dedicated to Lord Vishnu. It is believed to be one of the Char Dham shrines established by Adi Shankaracharya.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in"className='three'>
             <h1>2. Vaishno Devi, Jammu and Kashmir</h1>
           <div className='flex'>
             <div><p style={{marginRight:"15px"}}>The yatra begins at Katra, a small town at the base of the mountains, and continues uphill for approximately 12 kilometers to reach the Vaishno Devi Temple.

The shrine consists of three holy rock formations, called pindis, representing the three goddesses—Maha Kali, Maha Lakshmi, and Maha Saraswati. Devotees offer their prayers and seek blessings from the goddess.</p></div>
             <div><img src='https://www.bontravelindia.com/wp-content/uploads/2023/07/Vaishno-Devi-Temple-Jammu.jpg' alt='...' height={"250px"} width={"302px"}></img></div>
             <div><p>The best time to visit Vaishno Devi is during the months of March to October when the weather is pleasant and the trekking conditions are favorable. The yatra experiences a peak influx of devotees during the Navratri festival, which falls in September/October, and during the summer vacation months.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in"className='three'>
             <h1>3. Varanasi, Uttar Pradesh</h1>
           <div className='flex'>
             
             <div><p style={{marginRight:"15px"}}>One of the major attractions in Varanasi is the River Ganges. Pilgrims flock to the ghats to take part in religious rituals, perform prayers, and bathe in the holy water. The Dashashwamedh Ghat is particularly famous for the Ganga Aarti held every evening where one can experience beautiful sights of lamps, incense, and devotional songs.</p></div>
             <div><img src='https://www.bontravelindia.com/wp-content/uploads/2021/10/Varanasi-Ghat.jpg' alt='...' height={"300px"} width={"302px"}></img></div>
             <p>It is very old and has been rebuilt many times because of invaders and natural disasters. The walls of the temple have carvings and sculptures that show scenes from Hindu stories. Many pilgrims come to the temple during festivals like Maha Shivaratri, Navratri, and Kartik Purnima.

Other important temples in Varanasi include the Sankat Mochan Hanuman Temple, the Durga Temple, and the Tulsi Manas Temple.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='three'>
             <h1>4. Rameshwaram, Tamil Nadu</h1>
           <div className='flex'>
             
             <div><p style={{marginRight:"15px"}}>The most important attraction is the Ramanathaswamy Temple, which is dedicated to Lord Shiva. It is one of the twelve special temples in India and has amazing architecture, with big towers and beautifully carved pillars. Inside the temple, there is a place called Agni Theertham, which is believed to have purifying properties.</p></div>
             <div><img src='https://www.bontravelindia.com/wp-content/uploads/2023/07/Rameshwaram-Temple.jpg' alt='...' height={"250px"} width={"302px"}></img></div>
             <p>The best time to visit Rameshwaram is during the winter season, from October to February. The weather is nice and it’s a good time for exploring. It’s not recommended to go during the rainy season, from June to September, because there is heavy rainfall that can disrupt travel plans. </p>
           </div>
          </div>

          <div data-aos="zoom-in"className='three'>
             <h1>5. Somnath, Gujarat</h1>
           <div className='flex'>
             
             <div><p style={{marginRight:"15px"}}>
             The Somnath Temple is located by the Arabian Sea and has impressive architecture and detailed carvings. It has a long history because it was destroyed and rebuilt many times. It is a special place for people who are devoted to Lord Shiva and come to seek blessings, comfort, and spiritual understanding.</p></div>
             <div><img src='https://www.bontravelindia.com/wp-content/uploads/2021/11/Somnath-Temple-Gujarat.jpg' alt='...' height={"280px"} width={"302px"}></img></div>
             <p>The best time to visit Somnath is during the winter to early summer season, from October to March, when the weather is nice. During this time, many devotees go to the temple to celebrate festivals like Maha Shivaratri, Navratri, and Diwali. The festivals are lively and filled with devotion, with people singing songs and performing special rituals that create a powerful spiritual atmosphere.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='three'>
             <h1>6. Puri, Odisha</h1>
           <div className='flex'>
             
             <div><p style={{marginRight:"15px"}}>
             The most iconic attraction in Puri is the Jagannath Temple, dedicated to Lord Jagannath (an avatar of Lord Krishna). This grand temple is one of the Char Dham pilgrimage sites and the annual Rath Yatra, or Chariot Festival, held in Puri is a major religious event where the deities are taken out in chariots amidst a sea of devotees.</p></div>
             <div><img src='https://www.bontravelindia.com/wp-content/uploads/2021/11/Jagannath-Temple-Puri-Odisha.jpg' alt='...' height={"250px"} width={"302px"}></img></div>
             <p>Another prominent religious site is the Gundicha Temple, where Lord Jagannath, along with his siblings, spends a week during the Rath Yatra. For spiritual seekers, Puri offers the serene setting of Swargadwar Beach, considered a sacred spot for performing last rites and rituals.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='three'>
             <h1>7. Bodh Gaya, Bihar</h1>
           <div className='flex'>
             
             <div><p style={{marginRight:"15px"}}>
             The Bodhi tree itself is a must-visit site, considered to be a direct descendant of the tree under which Buddha attained enlightenment. It stands as a symbol of spiritual awakening and tranquility. Nearby, one can find the Animesh Lochana Chaitya, a small shrine where Buddha is said to have spent the first week after his enlightenment, gazing at the tree without blinking.</p></div>
             <div><img src='https://www.bontravelindia.com/wp-content/uploads/2023/10/Mahabodhi-Temple-Bodh-Gaya.jpg' alt='...' height={"250px"} width={"302px"}></img></div>
             <p>It is a popular spot for meditation and reflection.

Bodh Gaya also houses numerous monasteries representing different Buddhist traditions from various countries, such as Thailand, Japan, Tibet, and Myanmar. These monasteries provide a glimpse into the diverse cultural and architectural styles associated with Buddhism.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='three'>
             <h1>8. Amritsar, Punjab</h1>
           <div className='flex'>
             
             <div><p style={{marginRight:"15px"}}>
             Amritsar is a city with a lot of important culture and religion. Many people visit it each year because it is a significant place for Sikhs. The most famous attraction there is the Golden Temple, also known as Harmandir Sahib. It is a very special place for Sikhs and represents equality and spiritual comfort. The temple is surrounded by a peaceful lake called Amrit Sarovar, which gives the city its name.</p></div>
             <div><img src='https://www.bontravelindia.com/wp-content/uploads/2023/05/Golden-Temple-Amritsar.jpg' alt='...' height={"270px"} width={"302px"}></img></div>
             <p>Another important place in Amritsar is Jallianwala Bagh, which is a memorial site that reminds people of the city’s fight for independence.

You can also visit the Durgiana Temple in Amritsar. It is dedicated to the Hindu goddess Durga and looks similar to the Golden Temple. Many people come here on a pilgrimage.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='three'>
             <h1>9. Rishikesh, Uttarakhand</h1>
           <div className='flex'>
             
             <div><p style={{marginRight:"15px"}}>
             Rishikesh is a famous place for spirituality and yoga. People from all over the world come here to find peace and learn yoga. One of the main attractions is the Ganges River, which is considered sacred. Triveni Ghat is a popular spot where people come to bathe and take part in evening prayers. It creates a special spiritual atmosphere.</p></div>
             <div><img src='https://www.bontravelindia.com/wp-content/uploads/2021/11/Rishikesh-Uttarakhand.jpg' alt='...' height={"250px"} width={"302px"}></img></div>
             <p>Rishikesh also has old temples and ashrams. The Parmarth Niketan Ashram is located by the Ganges and offers yoga and meditation classes. There are two famous bridges called Lakshman Jhula and Ram Jhula that go over the Ganges. They are not only impressive structures but also important places for religious pilgrims.</p>
           </div>
          </div>

          <div data-aos="zoom-in"className='three'>
             <h1>10. Haridwar, Uttarakhand</h1>
           <div className='flex'>
             
             <div><p style={{marginRight:"15px"}}>
             Haridwar is a very special place for Hindus, and it’s considered one of the most holy places in their religion. The name of the city, Haridwar, means “Gateway to God,” because it’s like a doorway to the divine.

One of the most important things to see in Haridwar is Har Ki Pauri. It’s a special spot by the river Ganges where people come to bathe in the sacred water.</p></div>
             <div><img src='https://www.bontravelindia.com/wp-content/uploads/2021/12/Haridwar-Harki-Pauri-Ghat.jpg' alt='...' height={"280px"} width={"302px"}></img></div>
             <p>There are two other places that are also significant in Haridwar. One is the Chandi Devi Temple, which sits high up on a hill called Neel Parvat. From there, you can see the whole city and the Ganges. The other temple is called Mansa Devi Temple, and it’s on another hill called Bilwa Parvat. People often climb up these hills to ask for blessings and make their wishes come true.</p>
           </div>
          </div>
          </div><br></br><hr></hr><br></br>
          <div className='tablemap'>
            <div className='tablem'>
              <h2 style={{marginLeft:"300px", paddingBottom:"10px", color:"white"}}>Packages</h2>
              <table>
            <tr>
        <td style={{backgroundColor:"black", width:"300px"}}><b style={{color:"white"}}>Package</b></td>
        <td style={{backgroundColor:"black", width:"150px"}}><b style={{color:"white"}}>Duration</b></td>
        <td style={{backgroundColor:"black", width:"200px"}}><b style={{color:"white"}}>Starting Price</b></td>
      </tr>

      <tr>
        <td style={{backgroundColor:"white"}}>Gujarat Spiritual Tour Package</td>
        <td style={{backgroundColor:"white"}}>8D/7N</td>
        <td style={{backgroundColor:"white"}}>₹ 16,000</td>
      </tr>


      <tr>
        <td style={{backgroundColor:"white"}}>Vaishno Devi Tour with Kashmir Sightseeing</td>
        <td style={{backgroundColor:"white"}}>7D/6N</td>
        <td style={{backgroundColor:"white"}}>₹ 21,000</td>
      </tr>

      <tr>
        <td style={{backgroundColor:"white"}}>Chardham Yatra Tour Package</td>
        <td style={{backgroundColor:"white"}}>10D/9N</td>
        <td style={{backgroundColor:"white"}}>₹ 38,000</td>
      </tr>

      <tr>
        <td style={{backgroundColor:"white"}}>Kedarnath Yatra Tour Package</td>
        <td style={{backgroundColor:"white"}}>4D/3N</td>
        <td style={{backgroundColor:"white"}}>₹ 12,000</td>
      </tr>

      <tr>
        <td style={{backgroundColor:"white"}}>Varanasi Tour Package</td>
        <td style={{backgroundColor:"white"}}>4D/3N</td>
        <td style={{backgroundColor:"white"}}>₹ 17,000</td>
      </tr>

      <tr>
        <td style={{backgroundColor:"white"}}>Best of Uttarakhand Tour</td>
        <td style={{backgroundColor:"white"}}>9D/8N</td>
        <td style={{backgroundColor:"white"}}>₹ 30,000</td>
      </tr>

      </table>
            </div>
        
        <div className='mapt'>
          <h2 style={{paddingBottom:"10px", textAlign:"center"}}>Our Office Location</h2>
        <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.424280339828!2d76.73295807426575!3d30.734581585545605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed9e4fa70fbd%3A0xf36fffd65f231c5b!2sTour%20and%20travels!5e0!3m2!1sen!2sin!4v1739520179468!5m2!1sen!2sin" width="450" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iFrame>
        </div>
          </div><hr></hr>

          <h1 style={{textAlign:"center"}}>Give Details For Any Further Enquiry</h1>
      
      <div className='enquirysp'>
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
    );
};

export default Splaces;