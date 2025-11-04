


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Row, Col, Card, Button, Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";

// import { Container, Row, Col, Card, Button } from "react-bootstrap";
import tirupathi from "../images/tirupathi.jpg";
import srikakulam from "../images/srikakulam.jpg";
import araku from "../images/araku.jpg";
import vijayawada from "../images/vijayawada.jpg";
import godavari from "../images/godavari.jpg";
import vijayanagaram from "../images/vijayanagaram.jpg";
import kadapa from "../images/kadapa.jpg";

import visakhapatnam from "../images/visakhapatnam.jpg";
import RKBeach from "../images/RK_Beach.jpg";
import YaradaBeach from "../images/yaradabeach.jpg";
import Kailasagiri from "../images/Kailasagiri.jpg";
import INSKurusura from "../images/INSKurusura.jpg";
import VUDAPark from "../images/vudapark.jpg";
import Simhachalam from "../images/simhachalam.jpg";
import Rushikonda from "../images/rusikonda.jpg";
import ArakuValley from "../images/arakuvalley.jpg";
import TirumalaTemple from "../images/tirumala.jpg";
import GovindarajaTemple from "../images/GovindarajaTemple.jpg";
import KapilaTheertham from "../images/KapilaTheertham.jpg";
import Silathoranam from "../images/Silathoranam.jpg";
import ChandragiriFort from "../images/ChandragiriFort.jpg";
import TalakonaWaterfalls from "../images/TalakonaWaterfalls.jpg";
import MangapuramTemple from "../images/MangalagiriTemple.jpg";
import ArasavalliTemple from "../images/Arasavalli.jpg";
import SrikurmamTemple from "../images/SrikurmamTemple.jpg";
import KalingapatnamBeach from "../images/KalingapatnamBeach.jpg";
import BaruvaBeach from "../images/BaruvaBeach.jpg";
import Salihundam from "../images/SalihundamBuddhistSite.jpg";
import NagavaliRiver from "../images/NagavaliRiver.jpg";
import KotturuFort from "../images/KotturuFort.jpg";
import SrikakulamBeachPark from "../images/SrikakulamBeachPark.jpg";
import BorraCaves from "../images/BorraCaves.jpg";
import KatikiWaterfalls from "../images/KatikiWaterfalls.jpg";
import CoffeeMuseum from "../images/CoffeeMuseum.jpg";
import AnanthagiriHills from "../images/AnanthagiriHills.jpg";
import PadmapuramGardens from "../images/PadmapuramGardens.jpg";
import TribalMuseum from "../images/TribalMuseum.jpg";
import ChaparaiWaterfalls from "../images/ChaparaiWaterfalls.jpg";
import PadmapuramTrek from "../images/PadmapuramTrek.jpg";  // ... existing imports ...
import KanakaDurga from "../images/KanakaDurgaTemple.jpg";
import BhavaniIsland from "../images/BhavaniIsland.jpg";
import PrakasamBarrage from "../images/PrakasamBarrage.jpg";
import UndavalliCaves from "../images/UndavalliCaves.jpg";
import MangalagiriTemple from "../images/MangalagiriTemple.jpg";
import GandhiHill from "../images/GandhiHill.jpg";
import EluruRoadPark from "../images/EluruRoadPark.jpg";
import KrishnaRiverfront from "../images/KrishnaRiverfront.jpg";
import papiHills from "../images/PapiHills.jpg";
import dindiBackwaters from "../images/DindiBackwaters.jpg";
import dowleswaramBarrage from "../images/DowleswaramBarrage.jpg";
import annavaramTemple from "../images/AnnavaramTemple.jpg";
import rajahmundryBoatRides from "../images/RajahmundryBoatRides.jpg";
import kadiyamGardens from "../images/KadiyamGardens.jpg";
import vasishtaGodavari from "../images/VasishtaGodavari.jpg";
import papikondaNationalPark from "../images/PapikondaNationalPark.jpg";
import VizianagaramFort from "../images/VizianagaramFort.jpg";
import ThatipudiReservoir from "../images/ThatipudiReservoir.jpg";
import RamatheerthamTemple from "../images/RamatheerthamTemple.jpg";
import GantaStambham from "../images/GantaStambham.jpg";
import KumiliFort from "../images/KumiliFort.jpg";
import GovindapuramHill from "../images/GovindapuramHill.jpg";
import VizianagaramMuseum from "../images/VizianagaramMuseum.jpg";
import Pydithalliammavaru from "../images/Pydithalliammavaru.jpg";
import GandikotaFort from "../images/GandikotaFort.jpg";
import BelumCaves from "../images/BelumCaves.jpg";
import AmeenPeerDargah from "../images/AmeenPeerDargah.jpg";
import VontimittaTemple from "../images/VontimittaTemple.jpg";
import PushpagiriTemple from "../images/PushpagiriTemple.jpg";
import SiddhavattamTemple from "../images/SiddhavattamTemple.jpg";
import RayalaseemaBarrage from "../images/RayalaseemaBarrage.jpg";
import KailasanathaSwamyTemple from "../images/KailasanathaSwamyTemple.jpg";


import "../App.css";
function CityDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
 
  const [, setShowModal] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle scroll inside modal

  // Scroll to places section
  const scrollToPlaces = () => {
    const placesSection = document.getElementById("places-section");
    if (placesSection) {
      const yOffset = -80; // Adjust for navbar height
      const y = placesSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleShowModal = (place) => {
    setSelectedPlace(place);
    setShowModal(true);
    setShowScrollButton(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlace(null);
    setShowScrollButton(false);
  };

  const cityData = [

    {
      id: 1,
      name: "Visakhapatnam",
      img: visakhapatnam,
      places: [
        {
          name: "RK Beach",
          desc: "Ramakrishna Beach (RK Beach) – The Heartbeat of Visakhapatnam A beautiful beach perfect for sunrise views.The beach offers broad stretches of sand, sea breeze, sunrises/sunsets, and is a key leisure spot for both locals and tourists.Try to catch the early morning or evening for the best light and cooler temperature.Stretching along the Bay of Bengal, this stunning shoreline is not just a place to relax but also a symbol of the city’s vibrant coastal charm. With its golden sands, rhythmic waves, and refreshing sea breeze, RK Beach offers visitors a perfect blend of natural beauty, leisure, and culture. The evenings are especially delightful as the area comes alive with soft music, glowing lights, and the aroma of roasted corn and local snacks drifting through the salty air.",
          map: "https://www.google.com/maps?q=RK+Beach+Visakhapatnam",
          img: RKBeach,
        },
        {
          name: "Yarada Beach",
          desc: "The soft golden sand stretches far and wide, kissed gently by calm waves that roll in rhythm with the breeze. The sound of the waves mingling with the calls of distant seabirds adds a soothing background to the mesmerizing landscape. Watching the sunrise or sunset here is truly magical—the horizon turns shades of orange and pink, reflecting beautifully on the water and sand. Many travelers come here simply to sit by the shore, let the waves wash over their feet, and enjoy moments of calm away from the city’s rush.Secluded beach surrounded by hills.The combination of sea + hills + greenery (coconut and banana plantations) makes for a nice visual setting.It’s on the coast of the Bay of Bengal , giving it feel compared with city beaches",
          map: "https://www.google.com/maps?q=Yarada+Beach",
          img: YaradaBeach,
        },
        {
          name: "Kailasagiri",
          desc: "Perched gracefully on a verdant hill overlooking the azure Bay of Bengal, Kailasagiri stands as one of Visakhapatnam’s most enchanting attractions. The hill park offers a mesmerizing blend of natural beauty, spiritual serenity, and panoramic city views. As you ascend the hill—either by road, ropeway, or the scenic steps—you’re welcomed by cool breezes and sweeping vistas that stretch endlessly across the coastline. The most striking feature of Kailasagiri is the towering white statues of Lord Shiva and Goddess Parvati, symbolizing peace and divinity while adding a sacred charm to the surroundings.Hilltop park with panoramic city views.Kailasagiri is a scenic hill-top park located in the city of Vizag.Kailasagiri is a scenic hill-top park located in the city of Visakhapatnam.There are large statues of Lord Shiva and Goddess Parvati which are a highlight.",
          map: "https://www.google.com/maps?q=Kailasagiri+Visakhapatnam",
          img: Kailasagiri,
        },
        {
          name: "INS Kurusura Museum",
          desc: "The INS Kurusura Submarine Museum is one of Visakhapatnam’s most remarkable and unique attractions, located right along the scenic stretch of Ramakrishna Beach. This museum is not just a display of naval might—it’s a living piece of history that tells the story of courage, dedication, and the life of submariners who serve beneath the sea. What makes it truly fascinating is that the museum itself is housed inside a real submarine — the INS Kurusura (S20) — which once sailed the deep waters as part of the Indian Navy.Submarine museum on beach road.The INS Kurusura (S20) was a diesel-electric submarine of the Indian Navy, commissioned in December 1969, decommissioned in February 2001 after about 31 years of service.Allowing visitors to go inside a real submarine.",
          map: "https://www.google.com/maps?q=INS+Kurusura+Museum",
          img: INSKurusura,
        },
        {
          name: "VUDA Park",
          desc: "VUDA Park, officially known as VMRDA Park, is one of the most charming and lively attractions in Visakhapatnam. Nestled along the beautiful shoreline of RK Beach, this park is a perfect blend of greenery, relaxation, and recreation. Spread over vast acres of lush lawns and shaded trees, it offers a peaceful retreat for those looking to unwind from the rush of city life. The gentle sea breeze, the sound of waves crashing nearby, and the sight of children playing across the open spaces make the park a delightful place for all age groups.Popular for evening walks & kids activities.VUDA Park (also known as Taraka Rama Park) is an urban recreational park in the city of Visakhapatnam.Big green spaces + sea-adjacent location give you a chance to unwind away from busy city roads.There are kids’ play-areas, small rides, lawn space for picnics.",
          map: "https://www.google.com/maps?q=VUDA+Park+Visakhapatnam",
          img: VUDAPark,
        },
        {
          name: "Simhachalam Temple",
          desc: "Simhachalam Temple, one of the most revered pilgrimage destinations in Andhra Pradesh, stands gracefully on the Simhachalam Hill near Visakhapatnam. Surrounded by lush greenery and serene landscapes, the temple radiates spiritual energy and architectural grandeur, drawing thousands of devotees and visitors throughout the year. Dedicated to Lord Varaha Narasimha, an incarnation of Lord Vishnu, this temple beautifully blends divine mythology, intricate craftsmanship, and timeless devotion.Ancient architectural marvel temple.Simhachalam is a hill-range and temple complex near the city of Visakhapatnam.The main temple is the Varaha Lakshmi Narasimha Temple, Simhachalam, dedicated to Lord Vishnu in his form as Varaha–Narasimha.The temple is among the key Narasimha (lion-man avatar of Vishnu) shrines in the region.",
          map: "https://www.google.com/maps?q=Simhachalam+Temple",
          img: Simhachalam,
        },
        {
          name: "Rushikonda Beach",
          desc: "Rushikonda Beach, one of the most enchanting beaches on the eastern coast of India, is often called the “Jewel of Visakhapatnam.” Nestled along the Bay of Bengal, this beautiful stretch of golden sand and turquoise waters offers a perfect escape for those seeking peace, adventure, and a touch of nature’s charm. Surrounded by lush green hills and gently swaying palm trees, Rushikonda Beach is a picture of coastal serenity and beauty.Adventure sports and swimming hotspot.The beach lies along Beach Road, Rushikonda area, near Bheemili.It is known for golden sands, clear waters, and being more scenic and less hectic than some inner-city beaches.Rushikonda is described as having a “golden sand and tidy waves.",
          map: "https://www.google.com/maps?q=Rushikonda+Beach",
          img: Rushikonda,
        },
        {
          name: "Araku Valley Trip",
          desc: "Nestled in the serene embrace of the Eastern Ghats, Araku Valley is a breathtaking hill station located about 120 kilometers from Visakhapatnam in Andhra Pradesh. Known for its lush coffee plantations, misty hills, and vibrant tribal culture, Araku Valley is often called the “Ooty of Andhra Pradesh.” The journey to Araku is as enchanting as the destination itself, with winding roads that pass through dense forests, sparkling waterfalls, and more than forty mountain tunnels along the scenic train route from Visakhapatnam.Scenic train journey through Eastern Ghats.Araku Valley is a hill-station and scenic valley region located in the Eastern Ghats, in the state of Andhra Pradesh, India.Because of its elevation and valley location, Araku offers cooler temperatures than plains, green landscapes, mist, forest-covered hills.",
          map: "https://www.google.com/maps?q=Araku+Valley",
          img: ArakuValley,
        },
      ],
    },

    {
      id: 2,
      name: "Tirupati",
      img: tirupathi,
      places: [
        {
          name: "Tirumala Temple",
          desc: "World-famous Lord Venkateswara Temple.Tirumala Temple, also known as the Sri Venkateswara Swamy Temple, stands majestically atop the sacred Tirumala Hills in Andhra Pradesh and is one of the most revered pilgrimage sites in India. Dedicated to Lord Venkateswara, an incarnation of Lord Vishnu, the temple draws millions of devotees from all over the world who come seeking blessings, peace, and spiritual fulfillment. The journey to the temple itself feels divine — winding roads through lush green forests, cool mountain air, and the rhythmic chants of “Govinda, Govinda” echoing from the pilgrims around you create an atmosphere of deep devotion and serenity.Tirumala is a hill town in the Tirupati district of Andhra Pradesh, IndiaIt is located on the hill range known as the Seshachalam Hills (or Seven Hills) and sits at an elevation of around 853 metres above sea level.The greenery, the cool hill environment, views from the hills.",
          map: "https://www.google.com/maps?q=Tirumala+Temple+Tirupati",
          img: TirumalaTemple,
        },
        {
          name: "Govindaraja Temple",
          desc: "The Govindaraja Swamy Temple, located in the heart of Tirupati, stands as one of the most revered and magnificent temples in South India. Dedicated to Lord Vishnu in his divine form as Govindaraja Swamy, this ancient temple beautifully reflects the city’s deep spiritual essence and architectural grandeur. Just a short distance from the famous Tirumala Hills, the temple serves as a serene yet vibrant counterpart to the sacred Tirumala Venkateswara Temple.Ancient temple near railway station.For devotees of Vishnu, temples like this provide a direct, peaceful place for worship and introspection.large pilgrimage sites, you may get a more relaxed visit, more time to absorb the architecture, rituals and ambience.Seek the main shrine, observe the rituals, and note the iconography of Govindaraja Swamy.",
          map: "https://www.google.com/maps?q=Govindaraja+Temple",
          img: GovindarajaTemple,
        },
        {
          name: "Kapila Theertham",
          desc: "Kapila Theertham is one of the most serene and spiritually rich destinations in Tirupati, located at the foot of the sacred Tirumala Hills. This ancient temple and waterfall together form a divine blend of natural beauty and spiritual calm. Dedicated to Lord Shiva, the temple stands beside a stunning waterfall that descends from the steep cliffs of the Tirumala hills, creating a peaceful and sacred atmosphere that draws devotees and travelers alike.Serene waterfall near the temple.Kapila Theertham is a sacred temple-and-waterfall complex located at the foot of the Seshachalam Hills, near Tirupati in Andhra Pradesh.The main shrine here is dedicated to Lord Shiva, worshipped as Kapileswara Swamy. The name “Kapila” comes from the sage Kapila Muni who—according to legend—performed penance here.",
          map: "https://www.google.com/maps?q=Kapila+Theertham",
          img: KapilaTheertham,
        },
        {
          name: "Silathoranam",
          desc: "Silathoranam, meaning “rock garland” in Telugu, is one of nature’s most fascinating creations located in Tirumala, near the holy town of Tirupati. This rare geological formation has captured the curiosity of scientists, the devotion of pilgrims, and the admiration of travelers alike. The arch-shaped rock stands gracefully amidst the peaceful surroundings of the Tirumala hills, blending natural beauty with spiritual significance.Natural rock formation, unique geological feature.Silathoranam (also spelled “Sila Thoranam”) is a natural rock arch/bridge formation located in the Tirumala Hills.It provides visible evidence of huge spans of geological time, weathering and the Earth’s shaping processes—a point of interest for anyone curious about natural history.",
          map: "https://www.google.com/maps?q=Silathoranam",
          img: Silathoranam,
        },
        {
          name: "Chandragiri Fort",
          desc: "Chandragiri Fort stands proudly on a rocky hill near Tirupati, echoing the grandeur of a bygone era. Built in the 11th century by the Yadava rulers and later ruled by the mighty Vijayanagara Empire, this fort is a stunning reminder of India’s rich architectural and cultural history. Surrounded by lush greenery and the serene landscape of Andhra Pradesh, Chandragiri Fort transports visitors back in time with its majestic stone walls and royal charm.Historical fort with royal architecture.Chandragiri Fort is a historic fort located in the suburb of Chandragiri (near Tirupati) in the Tirupati district of Andhra Pradesh.It is perched on a rocky hill and offers sweeping views of the surrounding terrain.The name “Chandragiri” literally means “Hill of the Moon” (Chandra = moon, giri = hill), likely inspired by the shape/look of the hill.",
          map: "https://www.google.com/maps?q=Chandragiri+Fort",
          img: ChandragiriFort,
        },
        {
          name: "Talakona Waterfalls",
          desc: "Nestled deep within the dense forests of Sri Venkateswara National Park near Tirupati, Talakona Waterfalls is a breathtaking natural wonder that perfectly captures the untouched beauty of Andhra Pradesh. Cascading from a height of about 270 feet, it is the tallest waterfall in the state and a place where nature reigns supreme. As you approach the area, the gentle roar of falling water mingles with the songs of birds and the rustling of leaves, creating a serene and almost mystical atmosphere. The journey through the lush greenery leading to the falls is as enchanting as the destination itself, offering visitors a refreshing escape from city life.Tallest waterfall in Andhra Pradesh.Talakona Waterfall is located in the Sri Venkateswara National Park (part of the Seshachalam Hills) in the Tirupati district.The waterfall drops dramatically into a forested valley, creating a scenic, tranquil setting.The waterfall is set in dense forest, rich biodiversity, and is somewhat off the beaten path compared to city attractions, offering a slice of nature.",
          map: "https://www.google.com/maps?q=Talakona+Waterfalls",
          img: TalakonaWaterfalls,
        },

        {
          name: "Srinivasa Mangapuram Temple",
          desc: " Sri Kalyana Venkateswara Swamy Temple (also referred to as Kalyana Venkateswara in Srinivasa Mangapuram).the Srinivasa Mangapuram Temple is one of the most serene and spiritually uplifting places to visit in Andhra Pradesh. Dedicated to Lord Venkateswara, an incarnation of Lord Vishnu, this temple is believed to be where the deity resided after marrying Goddess Padmavathi Devi. The calm surroundings, ancient architecture, and divine atmosphere make it a must-visit destination for devotees and travelers alike.Popular lesser-known pilgrimage spot.According to belief, after the marriage of Lord Venkateswara (also called Srinivasa) with Goddess Padmavathi, the divine couple stayed here for six months before moving to the hills of Tirumala. This gives the temple its “kalyana” (marriage) association.",
          map: "https://www.google.com/maps?q=Srinivasa+Mangapuram+Temple",
          img: MangapuramTemple,
        },
      ],
    },
    {
      id: 3,
      name: "Srikakulam",
      img: srikakulam,
      places: [
        {
          name: "Arasavalli Temple",
          desc: "Ancient Sun temple dedicated to Surya.The Arasavalli Sun Temple (officially Arasavalli Sun Temple, also known as Sri Suryanarayana Swamy Temple) is located in Arasavalli village, about **1 km east of the town of Srikakulam in Srikakulam district.The temple is designed such that twice a year (around March and September/October) the early-morning sun’s rays fall directly onto the feet of the main Surya deity.The Arasavalli Sun Temple, located near Srikakulam in Andhra Pradesh, is one of the few temples in India dedicated to Lord Surya, the Sun God. This ancient and sacred shrine stands as a magnificent symbol of devotion and architectural brilliance, attracting thousands of devotees and visitors each year who come to witness its divine aura and historical charm.According to legend, the temple was built by King Devendra Varma of the Kalinga dynasty in the 7th century. It is believed that the Sun God himself instructed the king to construct the temple at this site",
          map: "https://www.google.com/maps?q=Arasavalli+Temple",
          img: ArasavalliTemple,
        },
        {
          name: "Srikurmam Temple",
          desc: "Srikurmam Temple, located near Srikakulam in Andhra Pradesh, is a place where divinity, history, and architecture blend harmoniously. Dedicated to Lord Vishnu in the Kurma (tortoise) avatar, this ancient temple stands as the only shrine in the world devoted to this incarnation. The temple’s unique legend, deep spiritual aura, and exquisite carvings make it one of the most revered pilgrimage sites in South India.The temple complex is serene, with beautifully sculpted pillars, ancient inscriptions, and ponds that enhance its tranquil charm. The Swetha Pushkarini (holy tank) inside the temple is believed to possess healing powers, attracting thousands of pilgrims who take a ritual dip before offering their prayers.Tortoise-shaped temple.The temple has very ancient origins, with major reconstructions through the centuries.It is one of the very few temples devoted to the Kurma Avatara of Vishnu — making it quite rare in India.The temple displays Kalinga and Dravidian architectural features. It was converted from earlier patterns to a Vaishnava temple by the Eastern Ganga dynasty",
          map: "https://www.google.com/maps?q=Srikurmam+Temple",
          img: SrikurmamTemple,
        },
        {
          name: "Kalingapatnam Beach",
          desc: "Kalingapatnam Beach, located in the Srikakulam district of Andhra Pradesh, is a serene coastal gem where the beauty of nature blends gracefully with a touch of history. Unlike the crowded urban beaches, Kalingapatnam offers a calm and unspoiled atmosphere, making it a perfect retreat for travelers who wish to relax and reconnect with nature. The long stretch of golden sand, the rhythmic sound of the waves, and the endless blue horizon together create an enchanting setting that soothes both the eyes and the soul.Quiet beach with lighthouse.As part of the old Kalinga region with maritime trade, Kalingapatnam is interesting for those wanting to see coastal-heritage beyond just beaches.The beach at Kalingapatnam is relatively less developed than major tourist beaches, so it offers a more rustic coastal experience.one of the places where you can see the coast + river merge.",
          map: "https://www.google.com/maps?q=Kalingapatnam+Beach",
          img: KalingapatnamBeach,
        },
        {
          name: "Baruva Beach",
          desc: "Baruva Beach, nestled in the serene coastal town of Srikakulam district, is one of Andhra Pradesh’s most peaceful and picturesque beaches. Known as the “second smallest port in India,” Baruva holds a special place in local history and hearts. The beach is where the calm waters of the Bay of Bengal meet the mouth of the Mahendratanaya River, creating a tranquil landscape of shimmering blue waves, golden sands, and swaying coconut palms that stretch as far as the eye can see.Peaceful coastline away from crowds.Baruva Beach is described as a quieter, less-commercialised beach with golden sands, swaying trees and wide open coastline — great if you want a more relaxed outing.It’s gaining notice as a “marine tourism hotspot” in Andhra state, with development efforts for eco-tourism.It lies on the east coast along the Bay of Bengal, near where the Mahendratanaya (or Mahendra Tanya) River meets the sea.",
          map: "https://www.google.com/maps?q=Baruva+Beach",
          img: BaruvaBeach,
        },
        {
          name: "Salihundam Buddhist Site",
          desc: "Nestled on the banks of the Vamsadhara River in the Srikakulam district of Andhra Pradesh, Salihundam is an ancient Buddhist site that beautifully reflects India’s spiritual and cultural past. Surrounded by lush greenery and gentle hills, this historic hilltop offers a peaceful atmosphere that carries echoes of a civilization that flourished over two thousand years ago. The name “Salihundam,” meaning “a mound of stones,” perfectly captures the essence of this archaeological treasure where time seems to stand still.Ancient Buddhist relics and stupas.Salihundam is a major archaeological & Buddhist heritage site. Excavations have revealed stupas, relic caskets, chaityas, viharas and sculptures spanning from roughly the 2nd century BCE to the 12th century CE.It reflects the evolution of Buddhism in the region — Theravāda, Mahāyāna and Vajrayāna traditions are all evidenced here,hilltop area with the remains of several Buddhist stupas.",
          map: "https://www.google.com/maps?q=Salihundam+Buddhist+Site",
          img: Salihundam,
        },
        {
          name: "Nagavali River",
          desc: "The riverbanks of Nagavali are peaceful and scenic, making them a favorite spot for locals and travelers who wish to escape the rush of city life. Watching the sunrise or sunset over its calm waters is an experience that brings a sense of tranquility and connection to nature. The nearby temples and ghats along the river also hold deep cultural and spiritual significance for the people of Srikakulam. During festivals, the banks come alive with rituals, music, and devotion, reflecting the deep bond between the river and the communities it sustains.Scenic river flowing through the district.The Nagavali River basin supports agriculture, towns, and water supply in both Odisha and Andhra Pradesh—especially in the tribal-hilly uplands and also the coastal plains.From an environmental angle, studies highlight changes in land-use, water-quality, flood-risk and basin dynamics in the Nagavali basin — so it’s of interest for nature, hydrology and sustainable tourism.",
          map: "https://www.google.com/maps?q=Nagavali+River",
          img: NagavaliRiver,
        },
        {
          name: "Kotturu Fort",
          desc: "Kotturu Fort stands as a proud reminder of the region’s glorious past, echoing stories of courage, strategy, and architectural brilliance. Nestled amidst lush greenery and gentle hills, this ancient fort once served as a stronghold for local rulers who protected their land and people with valor. Though time has softened its walls, the fort continues to inspire awe with its age-old stone structures, gateways, and watchtowers that whisper tales of bygone eras.Historical fort and viewpoint.The fort is part of the regional story of Srikakulam district and bounds of Andhra’s older districts which link to rule across coastal and hill regions.The precise historical records of the fort are scarce; it likely served as a regional defensive structure given its location in the northeastern part of Andhra, near the Eastern Ghats and coastal zone",
          map: "https://www.google.com/maps?q=Kotturu+Fort",
          img: KotturuFort,
        },
        {
          name: "Srikakulam Beach Park",
          desc: "Srikakulam Beach Park is one of the most refreshing and scenic spots along the northern coastline of Andhra Pradesh. Nestled beside the tranquil waters of the Bay of Bengal, this charming beach park offers a perfect blend of natural beauty and a calm atmosphere that attracts both locals and travelers seeking a quiet retreat. The long stretch of golden sand, gentle sea breeze, and the rhythmic sound of waves create an inviting space for relaxation and recreation. The park is beautifully designed with lush green lawns, walking paths, benches, and shaded seating areas, making it an ideal destination for families, couples, and nature lovers alike.Recreational park near the coastline.Since the beaches are less crowded and less developed, they offer more peaceful walks, open skies, gentle sea breezes.: Being off the major tourist circuit means you’ll likely encounter more of the village/sea-fisher community, local coconut/cashew groves, and fewer “tourist shops.freedom to explore quietly, take photos, stroll without heavy commercial activity.",
          map: "https://www.google.com/maps?q=Srikakulam+Beach+Park",
          img: SrikakulamBeachPark,
        },
      ],
    },
    {
      id: 4,
      name: "Araku Valley",
      img: araku,
      places: [
        {
          name: "Borra Caves",
          desc: "Stunning limestone caves.The caves are famous for their spectacular stalactite and stalagmite formations—many shapes evoke figures like Shiva–Parvati, animal forms, human faces.They are among the deepest and largest limestone caves in India, making them geologically significant.The environment inside is markedly cooler than outside—being in the hills and within limestone voids means more moderate temperature and unique atmosphere.As you step inside Borra Caves, you’re welcomed by a mysterious world of stalactites and stalagmites—rock formations that hang from the ceiling and rise from the ground, shaped by dripping mineral-rich water over ages. The caves are illuminated with soft, colorful lights that highlight the natural patterns and give the interiors an enchanting, almost magical feel. Every corner seems to tell a story, with formations resembling animals, deities, and mythical shapes that spark the imagination of every visitor.",
          map: "https://www.google.com/maps?q=Borra+Caves",
          img: BorraCaves,
        },
        {
          name: "Katiki Waterfalls",
          desc: "Nestled in the lush greenery near Araku Valley, Katiki Waterfalls is one of the most enchanting natural attractions in Andhra Pradesh. Formed by the Gosthani River, this spectacular waterfall cascades from a height of about 50 feet, creating a refreshing mist and a soothing sound that instantly calms the mind. The journey to Katiki is as beautiful as the destination itself — visitors travel through winding forest roads, coffee plantations, and small tribal hamlets that showcase the untouched charm of rural life.Scenic waterfall spot.Katiki Waterfalls (also spelled “Katika Waterfalls”) are located near the village of Katiki in the Eastern Ghats of Andhra Pradesh, in the Araku Valley region.The falls offer a beautiful drop of water, surrounded by lush green hills and forest pathways — a refreshing break from city life.Compared to many mainstream tourist spots, Katiki is relatively quieter, which means more peace and natural ambience",
          map: "https://www.google.com/maps?q=Katiki+Waterfalls",
          img: KatikiWaterfalls,
        },
        {
          name: "Coffee Museum",
          desc: "Learn about coffee plantations.The Araku Coffee Museum is located in the hill-station region of Araku Valley.The museum was established in 2006 (though the site’s coffee house history goes back further) and is privately owned/operated by the family of one of the early founders.It’s designed around the theme of coffee — its cultivation, processing, history and cultural significance — especially with reference to the Araku region and its tribal coffee growers.Nestled amidst the lush green hills of Araku Valley, the Coffee Museum is one of the most fascinating and aromatic attractions in Andhra Pradesh. It’s not just a museum but a celebration of the region’s rich coffee culture and tribal heritage. As you step inside, you’re welcomed by the inviting aroma of freshly brewed coffee that instantly awakens your senses. The museum beautifully showcases the journey of coffee — from the humble coffee bean to the flavorful cup that delights millions across the world.",
          map: "https://www.google.com/maps?q=Coffee+Museum+Araku",
          img: CoffeeMuseum,
        },
        {
          name: "Ananthagiri Hills",
          desc: "As you ascend towards Ananthagiri Hills, the air turns fresher and the surroundings transform into a picturesque canvas of rolling hills and valleys. The region is dotted with coffee estates, small waterfalls, and viewpoints that offer mesmerizing glimpses of the vast Araku Valley below. The gentle sound of rustling leaves, chirping birds, and distant waterfalls adds a musical rhythm to the serenity of the place, making it a perfect retreat for those seeking calm away from city lifeTrekking and nature exploration.The hills provide lush greenery, hill-valley views, fresh air and a break from coastal/plain landscapes. The scenic vista is part of their appeal.The region is known for its coffee plantations and relaxed “hill station” feel, giving something beyond just the views.There are trails in the hills for gentle trekking, nature walks, viewpoint exploration.",
          map: "https://www.google.com/maps?q=Ananthagiri+Hills",
          img: AnanthagiriHills,
        },
        {
          name: "Padmapuram Gardens",
          desc: "Beautiful botanical gardens.Nestled in the heart of Araku Valley, Padmapuram Gardens is a charming and peaceful retreat that showcases the region’s natural beauty and horticultural richness. Spread across lush green acres, the garden is a delightful blend of vibrant flowerbeds, rare plants, tall trees, and serene walking paths that invite visitors to unwind in nature’s embrace. It’s one of those places where time seems to slow down, letting you breathe in the fresh valley air and soak in the tranquil scenery all around.It spans about 26 acres and was originally built in 1942 to supply vegetables to soldiers during World War II.After the war, it was converted into a horticultural nursery and training center, and later developed as a landscaped garden with extra visitor attractions.It offers a refreshing green space in the hills, complete with flowerbeds, exotic trees.",
          map: "https://www.google.com/maps?q=Padmapuram+Gardens",
          img: PadmapuramGardens,
        },
        {
          name: "Tribal Museum",
          desc: "The Araku Tribal Museum feels alive with color, art, and storytelling. Built with red mud walls and traditional tribal architecture, it perfectly blends into the scenic landscape that surrounds it. As you walk through its corridors, you can see the daily life of tribal people beautifully recreated through models, artworks, and displays. The museum showcases traditional huts, household tools, farming equipment, hunting gear, ornaments, and costumes — all of which reflect the rich heritage and skills of the Adivasi communities of Andhra Pradesh.Showcasing tribal art and culture.The museum gives you an authentic glimpse into the lives of the tribal communities of the Eastern Ghats — their tools, jewellery, daily life, culture and rituals.this museum adds cultural depth — you stroll through exhibits, dioramas, life-size statues depicting tribal life, and you also have a handicraft centre where local tribal artisans display their work",
          map: "https://www.google.com/maps?q=Tribal+Museum+Araku",
          img: TribalMuseum,
        },
        {
          name: "Chaparai Waterfalls",
          desc: "Tucked away in the scenic hills of Araku Valley, Chaparai Waterfalls — also known as Dumbriguda Waterfalls — is a natural wonder that perfectly captures the charm of Andhra Pradesh’s Eastern Ghats. This beautiful spot is surrounded by dense forests, rolling hills, and lush greenery, making it one of the most loved destinations for both nature lovers and adventure seekers. The sound of rushing water, the cool mountain breeze, and the peaceful atmosphere together create an experience that feels like a refreshing escape from the busy city life.Serene and less crowded waterfall.It lies along the Paderu-Araku Road, about 13-15 km from the main Araku Valley town.Rather than a huge vertical drop waterfall, it is more of a sloping rock stream where water flows over smooth rock surfaces — creating natural “slides” and pools.Surrounded by forest cover and hills, this spot offers a calm nature outing with the water flowing over exposed rock beds",
          map: "https://www.google.com/maps?q=Chaparai+Waterfalls",
          img: ChaparaiWaterfalls,
        },
        {
          name: "Padmapuram Trek",
          desc: "Easy trekking trail with scenic views, the Padmapuram Trek is one of the most scenic and refreshing experiences for nature lovers and adventure seekers alike. Surrounded by thick forests, mist-covered hills, and the soothing sounds of chirping birds, this trek offers a peaceful escape from the noise of city life. The trail begins near the famous Padmapuram Gardens, a popular attraction known for its lush greenery and beautiful flower beds, and gradually leads trekkers into the wild beauty of the Eastern Ghats.The gardens span about 26 acres and include landscaped lawns, flower beds, orchard sections and tree-top “huts” (hanging cottages) which involve mild elevation changes.the tree-top huts and up into slightly elevated terrain within the gardens, giving a light‐trek feel rather than a steep mountain climb.The gardens span about 26 acres and include landscaped lawns.",
          map: "https://www.google.com/maps?q=Padmapuram+Trek",
          img: PadmapuramTrek,
        },
      ],
    }, {
      id: 5,
      name: "Vijayawada",
      img: vijayawada,
      places: [
        {
          name: "Kanaka Durga Temple",
          desc: "Perched majestically on the Indrakeeladri Hill and overlooking the sacred Krishna River, the Kanaka Durga Temple in Vijayawada is one of the most revered and vibrant temples in South India. Dedicated to Goddess Kanaka Durga, an incarnation of Goddess Parvati, this temple is a timeless symbol of faith, power, and devotion. Its spiritual aura and stunning hilltop location make it not only a religious destination but also a place of natural beauty and peace..According to legend, Goddess Durga took abode on the Indrakeeladri Hill after slaying the demon king Mahishasura. The hill’s name “Indrakeeladri” itself refers to Sage Indra-Keela who performed penance there Perched on a hill, the temple offers panoramic views of Vijayawada city and the Krishna river, adding visual/spiritual impact.",
          map: "https://www.google.com/maps?q=Kanaka+Durga+Temple",
          img: KanakaDurga,
        },
        {
          name: "Bhavani Island",
          desc: "Bhavani Island is one of the most enchanting getaways in Andhra Pradesh, located in the tranquil waters of the Krishna River near Vijayawada. Sprawling across nearly 130 acres, this lush green island is a perfect retreat for travelers seeking peace, adventure, and scenic beauty all in one place. The gentle sound of flowing water, the cool breeze, and the picturesque surroundings make Bhavani Island a true paradise for nature lovers.Water sports & boating activities.Bhavani Island is a large island (about 133 acres) located in the middle of the Krishna River,Being an island in a wide river, the surroundings offer calm water views, greenery, and a different vibe from the cityideal for relaxation.The island has garden areas, shaded spots, tree houses/hanging cottages.",
          map: "https://www.google.com/maps?q=Bhavani+Island",
          img: BhavaniIsland,
        },
        {
          name: "Prakasam Barrage",
          desc: "The Prakasam Barrage, stretching gracefully across the Krishna River in Vijayawada, is one of the city’s most iconic landmarks and a marvel of engineering blended with scenic beauty. This majestic structure connects Vijayawada, Guntur, and Krishna districts, serving not only as a crucial irrigation source but also as a beautiful spot that draws visitors throughout the year. With its grand arches, flowing waters, and the peaceful ambience of the riverbanks, the barrage presents an enchanting sight that perfectly captures the spirit of Andhra Pradesh’s heartland.Iconic river crossing over Krishna River.The idea of constructing a dam across the Krishna River dates back to 1798; subsequent plans by Captains Buckle, Best, Lake culminated in the old anicut (weir) by 1855.It has played a major role in transforming the coastal Andhra region by supporting large-scale irrigation— helping convert the Krishna delta into a more productive zone.",
          map: "https://www.google.com/maps?q=Prakasam+Barrage",
          img: PrakasamBarrage,
        },
        {
          name: "Undavalli Caves",
          desc: "Ancient rock-cut architecture.Nestled on the banks of the River Krishna near Vijayawada, the Undavalli Caves stand as one of the finest examples of ancient Indian rock-cut architecture. Carved out of solid sandstone during the 4th and 5th centuries, these caves offer a fascinating glimpse into India’s glorious past and the artistic brilliance of the Gupta period. The caves are believed to have been initially shaped as Jain monasteries before being later converted into a Hindu temple dedicated to Lord Vishnu, reflecting the cultural harmony and evolution of the region’s history.The Undavalli Caves are a set of monolithic rock-cut cave temples located in the village of Undavalli, in the Guntur District of Andhra Pradesh.These caves are a fine example of ancient Indian rock-cut architecture—carved directly out of the hill side.The caves span multiple storeys, contain elaborate pillars, shrines and a large reclining-Vishnu (or similar deity) sculpture",
          map: "https://www.google.com/maps?q=Undavalli+Caves",
          img: UndavalliCaves,
        },
        {
          name: "Mangalagiri Temple",
          desc: " It is considered one of the “Mahakshetras” (very sacred places) of Lord Vishnu/Narasimha in Andhra Pradesh and is part of the network of Narasimha‐shrines in the region.The temple is situated on a beautiful hill that forms part of the sacred eight important temples of Lord Vishnu in India. It is believed that the temple has existed since the Satya Yuga, making it one of the oldest known temples in South India. The presiding deity here is Lord Panakala Lakshmi Narasimha Swamy, who is worshipped in the form of a mouth-shaped opening into which devotees offer jaggery water (Panakam). What makes this ritual remarkable is that the offering seems to be partially consumed by the deity, leaving behind a divine sound that many consider a symbol of his presence and blessing.The hill temple (Panakala Narasimha) is famous for the offering of panakam (jaggery water) which the deity is believed to accept half of whatever is offered.There are three Narasimha Swamy temples in this area: one at the foot of the hill (Lakshmi Narasimha),  and another at the top of the hill.",
          map: "https://www.google.com/maps?q=Mangalagiri+Temple",
          img: MangalagiriTemple,
        },
        {
          name: "Gandhi Hill",
          desc: "Hilltop monument and observation point.Gandhi Hill, located near the Vijayawada Railway Station, is a historic monument built in memory of Mahatma Gandhi, the Father of the Nation.Gandhi Hill, located in Vijayawada, is a significant landmark that holds both historical and cultural importance. Built to honor Mahatma Gandhi, the Father of the Nation, it stands as a symbol of peace and the enduring values of truth and non-violence that he preached. The hill offers a panoramic view of the bustling city and the serene Krishna River, making it a popular destination for both tourists and locals. Standing at about 500 feet above the city, the hill offers a stunning panoramic view of Vijayawada.The main attraction is the 60-foot Gandhi Stupa, one of the first memorials built after Gandhi’s assassination in 1948. There are seven stupas in total, symbolizing peace, unity, and Gandhi’s principles of non-violence.",
          map: "https://www.google.com/maps?q=Gandhi+Hill",
          img: GandhiHill,
        },
        {
          name: "Eluru Road Park",
          desc: "The park is well-maintained with neatly paved pathways, lush lawns, and colorful flower beds that create a soothing atmosphere. In the early mornings and evenings, you’ll often see people jogging, doing yoga, or simply walking and enjoying the fresh air. Families visit to relax under the shade of trees, while children enjoy the open play areas. The gentle breeze and the chirping of birds make the experience even more peaceful.Local park with leisure activities.Eluru Road Park is a refreshing urban park located along the busy Eluru Road in Vijayawada. It offers a peaceful environment for residents and travelers to relax, walk, and enjoy greenery in the heart of the city.Beautifully landscaped pathways, well-maintained lawns, and seating areas make it a perfect spot for morning walks, evening strolls, and family time. The park also features children’s play zones, exercise equipment, and colorful flower gardens that add to its charm.",
          map: "https://www.google.com/maps?q=Eluru+Road+Park",


          img: EluruRoadPark,
        },
        {
          name: "Krishna Riverfront",
          desc: "The Krishna Riverfront is a serene and scenic escape that beautifully blends nature, culture, and modern development along the banks of the sacred Krishna River. Stretching through the heart of Vijayawada, this riverfront has become one of the city’s most cherished attractions, offering a refreshing retreat for visitors of all ages. The gentle flow of the river, framed by lush greenery and well-maintained walkways, creates a peaceful environment ideal for evening strolls, boating, and photography. The area comes alive at sunset when the shimmering waters reflect the golden hues of the sky, making it a perfect spot for relaxation and reflection.Beautiful riverside walks and views.Krishna River Fort is a historic structure located along the scenic banks of the Krishna River. The fort once served as a strategic defense point, protecting the nearby regions and trade routes that flourished around the river. Its design reflects ancient architecture with stone walls, gateways, and watch areas that overlook the flowing waters of Krishna.Today, the fort is a popular tourist and photography spot, offering stunning riverside views — especially during sunrise and sunset.",
          map: "https://www.google.com/maps?q=Krishna+Riverfront",
          img: KrishnaRiverfront,
        },
      ],
    },


    {
      id: 6,
      name: "Godavari",
      img: godavari,
      places: [
        {
          name: "Papi Hills",
          desc: "Papi Hills (Papikondalu) is one of the most breathtaking natural wonders in Andhra Pradesh, known for its stunning landscapes and serene beauty. Nestled along the banks of the Godavari River, these hills resemble the gentle folds of a woman’s sari, which is how they got their name—“Papi Kondalu” meaning “the middle part of the sari” in Telugu. The journey to Papi Hills is an experience in itself, often enjoyed through a picturesque river cruise from Rajahmundry or Polavaram. As the boat glides through the calm waters surrounded by lush green hills, visitors are treated to mesmerizing viewsAs the boat glides through the calm waters surrounded by lush green hills, visitors are treated to mesmerizing views, cool breezes, and the soothing sounds of nature..",
          img: papiHills,
        },
        {
          name: "Dindi Backwaters",
          desc: "Dindi is a village in the Dr. B. R. Ambedkar Konaseema district (formerly East Godavari) of Andhra Pradesh, India.Calm, scenic backwaters.Nestled along the banks of the Godavari River, Dindi is one of Andhra Pradesh’s most tranquil and picturesque destinations. Known for its calm backwaters, lush coconut groves, and soothing breeze, Dindi offers a peaceful retreat away from the noise of city life. The place beautifully blends the charm of Kerala-style backwaters with the essence of Andhra’s rural life, creating a truly unique experience for travelers.The “backwaters” refer to the network of canals, lagoons, river branches and shoreline around Dindi, seated in the delta region of the Godavari River where palm and coconut groves fringe the water.The visual of lazy canals, calm water, green coconuts & palms stretching to the water’s edge makes it a peaceful escape.There are resorts and house-boat packages catering to visitors wanting to stay by the water, enjoy nature and relax.",
          map: "https://www.google.com/maps?q=Dindi+Backwaters",
          img: dindiBackwaters,
        },
        {
          name: "Dowleswaram Barrage",
          desc: "The Dowleswaram Barrage, located near Rajahmundry in Andhra Pradesh, is one of the most significant engineering marvels in South India. Built across the majestic Godavari River, this historic structure was originally constructed by the eminent British engineer Sir Arthur Cotton in 1850. His vision was to harness the power of the river to provide irrigation to the fertile lands of the Godavari delta, transforming the region into one of the richest agricultural zones in the country.Engineering marvel on Godavari River.The Dowleswaram Barrage is a major irrigation and control structure built across the Godavari River near the town of Rajahmundry (formerly East Godavari district), Andhra Pradesh.It lies at a strategic point where the Godavari splits into its branches (Gautami and Vasistha) forming the delta.Being among the early large scale barrages in India and built in the mid-19th century, it stands as a piece of civil engineering history.The barrage enabled better water control and irrigation for the Godavari delta lands.",
          map: "https://www.google.com/maps?q=Dowleswaram+Barrage",
          img: dowleswaramBarrage,
        },
        {
          name: "Annavaram Temple",
          desc: "Annavaram Temple, one of the most revered pilgrimage destinations in Andhra Pradesh, is dedicated to Lord Satyanarayana Swamy, an incarnation of Lord Vishnu. Nestled on the sacred Ratnagiri Hill along the banks of the River Pampa, this temple attracts thousands of devotees throughout the year who come to seek blessings, perform rituals, and experience the divine serenity of the place. The temple’s unique architecture, combining both Dravidian and Orissan styles, makes it a spiritual and architectural marvel..the Annavaram Temple—officially dedicated to Lord Veera Venkata Satyanarayana—stands as a vibrant blend of faith, legend, and natural serenity. Pilgrims ascend the hillside, drawn by the promise of darshan and the panoramic views that stretch over the lush valley below. Built and expanded through centuries, the temple seamlessly blends historical architecture with living tradition.The road winds through green elevation, and early morning visits offer a peaceful climb before the crowds arrive",
          map: "https://www.google.com/maps?q=Annavaram+Temple",
          img: annavaramTemple,
        },
        {
          name: "Rajahmundry Boat Rides",
          desc: "River cruise experience.As the boat glides across the vast expanse of the river, travelers are treated to breathtaking views of lush green landscapes, distant temple spires, and gentle waves reflecting the golden hues of sunrise or sunset. The Godavari Boat Rides are not just about sightseeing—they are a journey through the heart of Andhra Pradesh’s heritage. The sound of the flowing water, the cool breeze brushing your face, and the sight of fishermen casting their nets all come together to create a truly unforgettable atmosphere.A boat ride in Rajahmundry is one of the most memorable ways to experience the serene beauty of the Godavari River. As the boat glides over the calm waters, the cool breeze and peaceful river ambiance create a refreshing escape from the busy city life. The journey provides stunning views of lush green banks, small islands, and historic structures along the river. Many cruises also take travelers through the iconic Godavari bridges, making it a perfect moment for photography and relaxation",
          map: "https://www.google.com/maps?q=Rajahmundry+Boat+Rides",
          img: rajahmundryBoatRides,
        },
        {
          name: "Kadiyam Gardens",
          desc: "Beautiful botanical garden.Kadiyam Gardens in Rajahmundry is a colorful paradise filled with a wide variety of flowering plants, nurseries, and lush greenery. Known as the heart of horticulture in Andhra Pradesh, this place welcomes visitors with vibrant rows of roses, jasmine, marigolds, and countless other ornamental plants. Walking through the gardens feels refreshing as the air is filled with the gentle fragrance of blooming flowers. Many travelers come here not only to enjoy the beauty but also to explore plant nurseries and learn about cultivation.Kadiyam Gardens is not just a tourist attraction; it’s also an important horticultural hub. Many of the plants grown here are exported to different parts of India and even abroad. The local farmers and gardeners have mastered the art of cultivation, nurturing each plant with care and tradition passed down through generations.",
          map: "https://www.google.com/maps?q=Kadiyam+Gardens",
          img: kadiyamGardens,
        },
        {
          name: "Vasishta Godavari",
          desc: "Sacred river confluence spot.Vasista Godavari is one of the sacred branches of the mighty Godavari River, flowing peacefully through the scenic landscapes near Rajahmundry. This river stream is deeply connected to ancient mythology, believed to be named after the revered sage Vasishta who performed penance along its banks. Surrounded by gentle hills, greenery, and tranquil villages, the Vasista Godavari offers a calm and divine atmosphere that attracts pilgrims and nature lovers alike. The riverbanks are home to temples and spiritual spots where visitors can relax, meditate, or simply enjoy the soothing sound of flowing water.Vasishta Godavari is especially enchanting at sunrise and sunset when the golden hues of the sky reflect on the shimmering waters, creating a truly mesmerizing sight. The area is rich in local culture, with traditional fishermen, temples resonating with devotional chants, and the aroma of local food adding to the charm. Whether you visit for spiritual solace, natural beauty, or cultural exploration, Vasishta Godavari offers a deeply peaceful and memorable experience — a perfect blend of divinity and nature’s grace. ",
          map: "https://www.google.com/maps?q=Vasishta+Godavari",
          img: vasishtaGodavari,
        },
        {
          name: "Papikonda National Park",
          desc: "Wildlife and trekking experience.Papikonda National Park, located along the majestic Godavari River, is a treasure of untouched wilderness and breathtaking landscapes. Covered with dense forests and rolling hills, the park is a haven for rich wildlife, including tigers, leopards, spotted deer, and several rare bird species. The lush greenery, fed by the river and seasonal streams, makes the area scenic and vibrant throughout the year. Travelers often enjoy boat routes running adjacent to the park, giving them a unique chance to admire its beauty from the water while spotting animals near the riverbanks.The park is home to a wide variety of flora and fauna, making it an important area for biodiversity conservation. Towering teak, bamboo, and sandalwood trees dominate the landscape, providing shelter to numerous species of animals like tigers, leopards, sambar deer, Indian gaur, wild boars, and several species of monkeys. Birdwatchers will find this place especially delightful, as it is home to rare and colorful birds such as hornbills, peafowls, and parakeets.",
          map: "https://www.google.com/maps?q=Papikonda+National+Park",
          img: papikondaNationalPark,
        },
      ],
    },

    {
      id: 7,
      name: "Vizianagaram",
      img: vijayanagaram,
      places: [
        {
          name: "Vizianagaram Fort",
          desc: "18th-century historical fort and landmark.Vizianagaram Fort stands as a proud symbol of the region’s royal heritage and architectural brilliance. Built in the 18th century by the Vizianagaram rulers, the fort reflects a blend of traditional and military-style construction that once protected an entire kingdom. The massive entrance, known as the “Nagar Khana,” welcomes visitors with its grandeur while the surrounding walls still showcase strength and artistry from the past. Inside the fort complex, several historic structures, temples, and royal buildings tell stories of the rulers who shaped Vizianagaram’s culture and identityInside the fort, visitors can explore ancient temples, royal courtyards, and administrative buildings that were once the center of governance and culture. The grand victory arch, known as “Alivelu Mangamma Talli Toranam,” stands proudly at the entrance, narrating tales of valor and devotion.",
          map: "https://www.google.com/maps?q=Vizianagaram+Fort",
          img: VizianagaramFort,
        },
        {
          name: "Thatipudi Reservoir",
          desc: "Picnic spot and dam on the Gosthani river.Thatipudi Reservoir is a peaceful retreat nestled in the scenic landscapes near Vizianagaram. Surrounded by rolling hills, calm waters, and fresh countryside air, it is the perfect destination for travelers seeking a relaxing getaway in nature. The reservoir was built across the Gosthani River, and today it not only supplies water to nearby regions but also serves as a favorite spot for picnics and weekend outings. Visitors can enjoy beautiful views of the lake, watch the sunset paint the sky with vibrant colors, and spend quiet moments by the water.Built across the Gosthani River, the reservoir was primarily constructed to supply drinking water and irrigation to the surrounding villages, but over time it has also become a scenic retreat for nature lovers.",
          map: "https://www.google.com/maps?q=Thatipudi+Reservoir",
          img: ThatipudiReservoir,
        },
        {
          name: "Ramatheertham Temple",
          desc: "Ancient hill temple with scenic views and Jain remnants.Ramatheertham Temple is a famous and sacred pilgrimage site located near Vizianagaram in Andhra Pradesh. Surrounded by the serene hills of the Eastern Ghats, the temple offers a peaceful atmosphere that beautifully blends spirituality with nature. The place holds great significance in the Ramayana, as it is believed that Lord Rama, Sita, and Lakshmana once stayed here during their exile. The temple on the Bodhikonda hill is dedicated to Lord Rama, while the nearby temples of Lord Shiva and Lord Vishnu add to its divine charm.The temple houses idols of Lord Rama, Sita, and Lakshmana carved from a single block of black stone, showcasing exquisite ancient craftsmanship. Nearby, one can also find the remains of Buddhist relics, indicating that the site has been a center of spiritual importance for various faiths over centuries.",
          map: "https://www.google.com/maps?q=Ramatheertham+Temple",
          img: RamatheerthamTemple,
        },
        {
          name: "Ganta Stambham",
          desc: "Iconic clock tower in the heart of Vizianagaram.Ganta Stambham, is one of the most recognized landmarks in Rajahmundry, symbolizing the city’s rich heritage and timeless charm. Located at the heart of the town, this elegant structure stands proudly as a reminder of the city’s colonial past and cultural identity. The tower’s design and classic architecture attract visitors who love to explore historic sites and capture memorable photographs. It serves as a popular meeting point for locals and a starting spot for travelers exploring nearby attractions in the city Built during the British era, this historic structure has witnessed the transformation of Visakhapatnam from a quiet coastal town into a bustling modern city. The elegant architecture of Ganta Stambham reflects a blend of old-world charm and timeless craftsmanship, with its tall, slender design and classic clock faces that have marked time for generations.",
          map: "https://www.google.com/maps?q=Ganta+Stambham",
          img: GantaStambham,
        },
        {
          name: "Kumili Fort",
          desc: "Site of the erstwhile Vizianagaram Kingdom's first fort.Kumili Fort is a historic landmark that carries the legacy of the region’s ancient rulers. Surrounded by greenery and rocky landscapes, the fort stands as a reminder of the architectural strength and strategic importance it once held. Walking through the fort area, visitors can feel the echoes of past battles and royal life, making it a fascinating spot for history lovers and explorers. The old walls, gateways, and scenic views from the fort create a peaceful yet adventurous atmosphere. With its blend of nature and heritage.Kumili Fort can enjoy a peaceful and reflective atmosphere, far from the bustle of city life. The surrounding countryside and serene environment make it a great spot for photography and heritage walks. Standing atop the fort’s remnants, one can almost feel the echoes of its royal past and imagine the stories that once unfolded within its walls.",
          map: "https://www.google.com/maps?q=Kumili+Fort",
          img: KumiliFort,
        },
        {
          name: "Govindapuram Hill",
          desc: "Beautiful viewpoint and nature spot with a prominent temple.Govindapuram Hill is a peaceful getaway surrounded by nature, offering a refreshing escape from the busy routine of everyday life. As you travel up the hill, the cool breeze and greenery create a calming atmosphere that immediately relaxes the mind. The hill provides a beautiful view of the surrounding landscapes, especially during sunrise and sunset when the sky glows with vibrant colors. It is also a place where many visitors come to meditate, pray, and enjoy moments of quiet reflection.From the top of Govindapuram Hill, visitors can enjoy a breathtaking panoramic view of the surrounding landscape — a blend of green valleys, distant villages, and the soft hues of sunrise or sunset that paint the sky in beautiful shades. The gentle breeze and calm surroundings add to the charm, creating a soothing experience for every traveler.",
          map: "https://www.google.com/maps?q=Govindapuram+Hill",
          img: GovindapuramHill,
        },
        {
          name: "Vizianagaram Museum",
          desc: "Showcases local heritage, artifacts, and royal history.The Vizianagaram Museum is a wonderful place for anyone interested in history and heritage. Located in the royal town of Vizianagaram, the museum showcases the rich culture, traditions, and legacy of the region’s past rulers. Inside the halls, visitors can explore rare collections of weapons, coins, sculptures, paintings, and ancient manuscripts that reflect centuries of craftsmanship and knowledge. Many of the exhibits are linked to the Bobbili and Vizianagaram kingdoms, offering a deeper understanding of local valor, art, and royal lifestyle.The Vizianagaram Museum stands as a proud symbol of the city’s rich cultural and historical heritage. Nestled in the heart of Vizianagaram, this museum offers visitors a fascinating journey through time, showcasing the region’s glorious past, traditions, and artistry. The museum is known for its impressive collection of ancient artifacts, sculptures, coins, traditional weapons, and inscriptions that reflect the legacy of the royal families and the local dynasties that once flourished here.",
          map: "https://www.google.com/maps?q=Vizianagaram+Museum",
          img: VizianagaramMuseum,
        },
        {
          name: "Pydithalli Ammavaru Temple",
          desc: "Famous temple known for the annual Sirimanu Utsavam festival.Pydithalli Ammavaru Temple in Vizianagaram is a sacred symbol of faith and culture, attracting thousands of devotees throughout the year. Dedicated to Goddess Pydithalli, who is believed to be the guardian deity of the region, this temple holds a special place in the hearts of locals. The atmosphere is filled with devotion as people gather to offer prayers and seek blessings for good health, prosperity, and protection from difficulties. The temple becomes even more vibrant during the famous Sirimanotsavam festival, when the entire town celebrates with grand rituals.According to legend, Pydithalli Ammavaru was a royal princess of the Vizianagaram dynasty who sacrificed her life for the welfare of her people. After her passing, devotees began to experience her divine presence in the form of miracles, and a temple was later built in her honor. The temple thus stands as a symbol of faith, devotion, and gratitude to the goddess who is believed to watch over the people of Vizianagaram.",
          map: "https://www.google.com/maps?q=Pydithalli+Reservoir",
          img: Pydithalliammavaru,
        },
      ],
    }, {
      id: 8,
      name: "Kadapa",
      img: kadapa,
      places: [
        {
          name: "Gandikota Fort",
          desc: "Gandikota Fort, often called the “Grand Canyon of India,” is a magnificent historical site located on the banks of the Pennar River in the Kadapa district of Andhra Pradesh. This ancient fort stands majestically amidst stunning natural surroundings, with deep gorges and rugged hills creating a breathtaking landscape. Built during the 13th century by the Pemmasani Nayakas, Gandikota was once a stronghold of the powerful Vijayanagara Empire and played an important role in regional history.Gandikota Fort, often called the “Grand Canyon of India,” stands majestically on the banks of the Penna River in Andhra Pradesh. This ancient fort showcases a blend of natural beauty and historical grandeur, with massive stone walls, watchtowers, ancient temples, and the striking deep gorge that makes the place so iconic. As you walk through its grand gateways and old structures, you can feel the stories of powerful dynasties that once ruled here. The breathtaking view from the cliff, overlooking the dramatic canyon-like valley, makes Gandikota a paradise for photographers and adventure lovers",
          map: "https://www.google.com/maps?q=Gandikota+Fort",
          img: GandikotaFort,
        },
        {
          name: "Belum Caves",
          desc: "Belum Caves is one of the most fascinating natural wonders of Andhra Pradesh, located near Belum Village in the Kurnool district. These ancient caves are the second-largest cave system in India, stretching over three kilometers, and are famous for their unique limestone formations, underground passages, and spacious chambers. Carved naturally by the flow of underground water over millions of years, the Belum Caves offer an awe-inspiring experience of nature’s artistry beneath the earth’s surface.Second-largest caves in India.Belum Caves in Andhra Pradesh is one of the largest and most fascinating underground cave systems in India, known for its stunning natural formations created over millions of years. Walking through the long passages and spacious chambers feels like entering a mysterious world with unique stalactites, stalagmites, and intricate limestone patterns. The caves are beautifully lit to highlight their natural beauty, and the cool temperature inside adds to the adventure.Visitors can explore interesting spots like Patalaganga, where a stream flows deep within the cave, and meditation halls once used by Buddhist monks.",
          map: "https://www.google.com/maps?q=Belum+Caves",
          img: BelumCaves,
        },
        {
          name: "Ameen Peer Dargah",
          desc: "The atmosphere around Ameen Peer Dargah is filled with deep spiritual energy. As one enters, the rhythmic chants, the scent of incense, and the serene environment create an aura of devotion and calmness. People believe that sincere prayers offered here are always answered, and many visit the shrine to fulfill vows or express gratitude for blessings received.Symbol of communal harmony.Ameen Peer Dargah in Rajahmundry is a sacred and peaceful place known for its spiritual significance and centuries-old traditions. People of all faiths visit this holy site to seek blessings and pray for their wishes to come true. The Dargah is dedicated to the Sufi saints Peerullah Hussaini and Arifullah Hussaini, whose teachings of love and harmony continue to inspire devotees. The atmosphere here is calm and soulful, filled with the fragrance of incense, devotional music, and a deep sense of faith. Visitors often tie threads of hope and light candles as symbolic gestures of their prayers.",
          map: "https://www.google.com/maps?q=Ameen+Peer+Dargah",
          img: AmeenPeerDargah,
        },
        {
          name: "Vontimitta Temple",
          desc: "Vijayanagara-style architecture temple.Vontimitta Temple, located in the serene town of Vontimitta in Andhra Pradesh, is a magnificent example of ancient South Indian temple architecture. Dedicated to Lord Sri Rama, the temple stands proudly with beautifully carved pillars and grand stone structures that reflect the craftsmanship of the 16th century.Built entirely out of a single block of stone, the Vontimitta Sri Kodandarama Swamy Temple showcases intricate carvings and sculptural brilliance that reflect the craftsmanship of ancient artisans. The sanctum houses idols of Lord Rama, Sita, and Lakshmana — all carved from a single stone, which is a rare and remarkable feature. The temple’s towering gopuram (gateway) and spacious courtyard create an atmosphere of devotion and peace, inviting pilgrims and tourists alike to admire its divine aura.The calm surroundings and spiritual aura make it a peaceful place for devotees and visitors alike. According to local legends, the temple was built by two ardent devotees who crafted the structure with their devotion and skill. The temple is especially famous during Sri Rama Navami celebrations.",
          map: "https://www.google.com/maps?q=Vontimitta+Temple",
          img: VontimittaTemple,
        },
        {
          name: "Pushpagiri Temple",
          desc: "Pushpagiri Temple, located on the banks of the beautiful River Pennar near Kadapa in Andhra Pradesh, is one of the region’s most revered spiritual destinations. Known for its ancient architecture, divine atmosphere, and cultural heritage, this temple complex is often referred to as the “Southern Varanasi.” It is a sacred site for devotees of Lord Shiva and is surrounded by several smaller shrines dedicated to different deities, making it an important pilgrimage center for Hindus.Scenic temple with panoramic views.Pushpagiri Temple, located near Kadapa in Andhra Pradesh, is a sacred and ancient pilgrimage destination known for its historic temples and peaceful spiritual atmosphere. Situated beautifully on the banks of the Pennar River, this place carries a rich heritage dating back to the Chola period, with temples dedicated to Lord Shiva, Vishnu, and other deities. The architecture reflects detailed stone carvings, age-old sculptures, and traditional South Indian craftsmanship that reveal the devotion and artistry of the past. Pilgrims come here to seek blessings, enjoy the calm surroundings, and feel connected to divine energy.",
          map: "https://www.google.com/maps?q=Pushpagiri+Temple",
          img: PushpagiriTemple,
        },
        {
          name: "Siddhavattam Temple",
          desc: "Siddhavattam Temple is a serene and spiritually rich destination located on the banks of the Pennar River in the Kadapa district of Andhra Pradesh. This ancient temple is dedicated to Lord Shiva, worshipped here as Sri Siddheswara Swamy, and is believed to date back to several centuries. The temple is renowned not only for its deep religious significance but also for its architectural beauty, which reflects the fine craftsmanship of early South Indian temple builders.Ancient temple near river.Siddhavattam Temple, located on the banks of the Pennar River in Andhra Pradesh, is a peaceful and spiritually rich destination known for its ancient architecture and sacred atmosphere. Surrounded by natural rock formations and greenery, the temple offers a calm and divine setting that attracts devotees throughout the year. The main deity here is Lord Shiva, worshipped as Sri Kotilingeswara Swamy, and the temple’s stone carvings reflect the craftsmanship of early dynasties who once ruled the region. The river flowing beside the temple adds a serene charm, especially during mornings and festive days",
          map: "https://www.google.com/maps?q=Siddhavattam+Temple",
          img: SiddhavattamTemple,
        },
        {
          name: "Rayalaseema Barrage",
          desc: "The Rayalaseema Barrage, located near Kadapa in Andhra Pradesh, is an impressive irrigation and water conservation structure built across the Penna River. This modern engineering marvel was developed to improve water management in the drought-prone regions of Rayalaseema, which historically suffered from water scarcity. The barrage plays a vital role in ensuring that the surrounding agricultural lands receive a steady and reliable supply of water, helping thousands of farmers cultivate crops even during dry seasons.Popular local picnic spot.Rayalaseema Barrage, built across the majestic River Godavari, stands as a significant engineering marvel that supports irrigation and water supply across the region. Surrounded by scenic river views and peaceful natural landscapes, the barrage has become an inviting spot for visitors who enjoy leisurely walks and relaxing time by the water. During the evenings, the pleasant ambiance with cool breezes and the sight of flowing river water creates a perfect place to unwind with family and friends. The location also gives a glimpse of the region’s agricultural importance, ",
          map: "https://www.google.com/maps?q=Rayalaseema+Barrage",
          img: RayalaseemaBarrage,
        },
        {
          name: "Kailasanatha Swamy Temple",
          desc: "The Kailasanatha Swamy Temple is one of the most ancient and revered temples, dedicated to Lord Shiva, the supreme deity known as the destroyer and transformer in Hindu mythology. The temple stands as a remarkable example of traditional South Indian architecture, blending spiritual depth with artistic brilliance. Built centuries ago, it reflects the devotion, craftsmanship, and cultural richness of the era in which it was constructed.Historic hilltop temple.Kailasanatha Swamy Temple is a revered and ancient shrine dedicated to Lord Shiva, known for its peaceful spiritual ambiance and beautiful architecture. The temple’s intricate carvings and traditional design reflect the rich cultural heritage of the region, drawing visitors who seek both devotion and history. Surrounded by a calm environment, the temple offers devotees a space to pray, meditate, and feel connected to divinity. Festivals like Maha Shivaratri bring the temple to life with vibrant rituals and celebrations, showcasing the deep faith of the local community",
          map: "https://www.google.com/maps?q=Kailasanatha+Swamy+Temple",
          img: KailasanathaSwamyTemple,
        },
      ],
    },
  ]

  const city = cityData.find((c) => c.id === parseInt(id));


  if (!city) {
    return (
      <Container className="text-center mt-5 text-white">
        <h2>City not found</h2>
        <Button onClick={() => navigate("/")}>Go Back</Button>
      </Container>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${city.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      ></div>

      {/* Navbar - your existing navbar code */}
      <Navbar
        style={{
          backgroundColor: "white",
          minHeight: "40px",
          position: "fixed",
          top: -15,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        expand="lg"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="fw-bold"
            style={{
              fontSize: "1.8rem",
              color: "#2b2b2b",
            }}
          >
            <img src={logo} alt="Destination Discoveries" className="logo"
              style={{ height: "90px", marginRight: "90px" }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto d-flex align-items-center">
              <Button
                style={{
                  backgroundColor: "#6e40ecff",
                  border: "1px solid #ccc",
                  fontSize: "1.1rem",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  color: "#cbf1e5ff",
                }}
                onClick={() => navigate("/home")}
              >
                🏠 Home
              </Button>

              <Button
                style={{
                  backgroundColor: "#6e40ecff",
                  border: "none",
                  fontSize: "1.1rem",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
                className="ms-3"
                onClick={() => navigate("/")}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container style={{ position: "relative", zIndex: 2, paddingTop: "100px", paddingBottom: "50px" }}>

        {/* City Title and Scroll Button */}
        <div className="text-center mb-5">
          <h2 className="mb-4 text-white fw-bold display-4">{city.name}</h2>
          <Button
            size="lg"
            onClick={scrollToPlaces}
            style={{
              backgroundColor: "#6e40ecff",
              border: "none",
              fontSize: "1.3rem",
              padding: "15px 40px",
              borderRadius: "50px",
              boxShadow: "0 8px 20px rgba(110, 64, 236, 0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(110, 64, 236, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(110, 64, 236, 0.4)";
            }}
          >
            View Places to Visit
          </Button>
        </div>

        {/* Places Section */}
        <div id="places-section" style={{ paddingTop: "20px", marginTop: "60px" }}>
          <h3 className="mb-4 text-white fw-bold text-center">
            Popular Destinations in {city.name}
          </h3>

          <Row>
            {city.places.map((place, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Card
                  className="shadow-lg border-0 rounded-4 overflow-hidden"
                  style={{
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                  }}
                >
                  {/* Place Image Section */}
                  <div
                    style={{
                      height: "200px",
                      backgroundImage: `url(${place.img || city.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                      transition: "all 0.3s ease"
                    }}
                    className="rounded-top-4"
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        transition: "all 0.3s ease"
                      }}
                    ></div>

                    <h3
                      className="text-white fw-bold text-center px-3"
                      style={{
                        fontSize: "1.5rem",
                        textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
                        position: "absolute",
                        bottom: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1,
                      }}
                    >
                      {place.name}
                    </h3>

                    <div
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                        fontSize: "2rem",
                        opacity: 0.7,
                        zIndex: 1,
                      }}
                    >
                      {place.name.toLowerCase().includes("beach") ?"" :
                        place.name.toLowerCase().includes("temple") ? "" :
                          place.name.toLowerCase().includes("fort") ? "" :
                            place.name.toLowerCase().includes("waterfall") || place.name.toLowerCase().includes("falls") ? "" :
                              place.name.toLowerCase().includes("museum") ? "" :
                                place.name.toLowerCase().includes("park") || place.name.toLowerCase().includes("garden") ? "" :
                                  place.name.toLowerCase().includes("hill") ? "" :
                                    place.name.toLowerCase().includes("cave") ? "" :
                                      ""}
                    </div>
                  </div>

                  <Card.Body className="bg-white">
                    <Card.Text
                      className="text-muted text-start"
                      style={{
                        height: "230px",
                        overflowY: "scroll", // <--- CHANGE THIS
                        textAlign: "justify",
                      }}
                    >
                      {place.desc}
                    </Card.Text>

                    <Button
                      variant="primary"
                      className="w-100"
                      onClick={() => handleShowModal(place)}
                      style={{ transition: "all 0.3s ease" }}
                    >
                      More Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      {/* Modal - your existing modal code */}
      {selectedPlace && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",

          }}
          onClick={handleCloseModal}
        >
          <Card
            className="shadow-lg border-0 rounded-4 overflow-hidden"
            style={{
              maxWidth: "800px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch", // ✅ allows smooth scroll on iOS
              overscrollBehavior: "contain",    // ✅ prevents background from moving
              transform: "scale(1)",
              animation: "popupScale 0.3s ease-out",
              scrollBehavior: "smooth"
            }}
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                zIndex: 10,
                background: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "24px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              ×
            </button>

            {/* Place Image Section */}
            <div
              style={{
                height: "350px",
                backgroundImage: `url(${selectedPlace.img || city.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)"
                }}
              ></div>

              <h2
                className="text-white fw-bold text-center px-3"
                style={{
                  fontSize: "2.5rem",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                  width: "90%"
                }}
              >
                {selectedPlace.name}
              </h2>

              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  fontSize: "3rem",
                  opacity: 0.9,
                  zIndex: 1,
                }}
              >
                {selectedPlace.name.toLowerCase().includes("beach") ? "" :
                  selectedPlace.name.toLowerCase().includes("temple") ? "" :
                    selectedPlace.name.toLowerCase().includes("fort") ? "" :
                      selectedPlace.name.toLowerCase().includes("waterfall") || selectedPlace.name.toLowerCase().includes("falls") ? "" :
                        selectedPlace.name.toLowerCase().includes("museum") ? "" :
                          selectedPlace.name.toLowerCase().includes("park") || selectedPlace.name.toLowerCase().includes("garden") ? "" :
                            selectedPlace.name.toLowerCase().includes("hill") ? "" :
                              selectedPlace.name.toLowerCase().includes("cave") ? "" :
                                ""}
              </div>
            </div>

            <Card.Body className="bg-white p-4">
              <h5 className="mb-3 fw-bold">About this place</h5>
              <Card.Text className="text-muted mb-4" style={{
                lineHeight: "1.8",
                fontSize: "1.1rem"
              }}>
                {selectedPlace.desc}
              </Card.Text>

              <Button
                variant="success"
                size="lg"
                className="w-100"
                onClick={() => window.open(selectedPlace.map, "_blank")}
                style={{
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                 View on Google Maps
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}

      <style>
        {`
          @keyframes popupScale {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default CityDetails;