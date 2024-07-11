'use client'
import React from 'react'
import Image from "next/image";
import temp from "@/public/assets/temp1.jpg";
import { useRef, useEffect, useState } from "react";
import axios from "axios";


function Result() {

  const [dbResults,setDbResults] = useState([])
  const [displayedResult,setDisplayedResult] = useState([])
  const [imageLoaded, setImageLoaded] = useState(false);
  const [notUploaded,setNotUploaded] = useState(false)
  const [category, setCategory] = useState('')
  const [item,setItem]=useState('')
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);

  const categories = ['Lower Primary','Upper Primary','High School','Higher Secondary','Junior','Senior','General',]
  let items = [];

  switch (category) {
    case 'Lower Primary':
      items = ['Elocution','Madh Song', 'Quiz', 'Story Telling','Pencil Drawing','Water Color',
        'Language Game','Reading Ml','Reading Arb-Ml', 'Book Test', 'Pencil Drawing G', 'Water Color G', 
        'Handwriting M G'];
      break;

      case 'Upper Primary':
      items = ['Elocution','Mappilappattu','Story Writing', 'Quiz', 'Story Telling','Ganitha Keli',
        'Pencil Drawing','Water Color','Spelling Bee','Reading Eng', 'Book Test', 'Pencil Drawing G', 
        'Water Color G', 'Book Test G','Story Writing G'];
      break;
  
      case 'High School':
      items = ['Elocution M','Elocution E','Mappilappattu','Madh Ganam','Poem Recitation A','Poem Recitation U',
        'Story Writing', 'Quiz','Poem Making','Essay Writing M','News Reading','Pencil Drawing','Water Color',
        'Caption Writing','Language Game E', 'Book Test','Embroidery', 'Pencil Drawing G', 'Water Color G', 
        'Book Test G','Story Writing G','Poem Making G'];
      break;

      case 'Higher Secondary':
        items = ['Elocution M','Mappilappattu','Bakthi Ganam','Poem Recitation U','Story Writing', 'Quiz',
          'Poem Making','Essay Writing M','Essay Writing E','News Writing','Calligraphy','Pencil Drawing',
          'Water Color','Caption Writing', 'Book Test','Calligraphy G', 'Story Writing G', 'Poem Making G', 
          'Book Test G',];
        break;

        case 'Junior':
          items = ['Elocution M','Elocution A','Elocution E','Mappilappattu','Reading A','Story Writing', 
            'Quiz','Poem Making','Essay Writing M','Essay Writing A','Mudravakya Rachana','Madh Gaana Rachana',
            'Translatoin A','Calligraphy','feature Writing','Social Text','Sahithya Samvadam','Hadees Musabaqa', 
            'Book Test',];
          break;

          case 'Senior':
          items = ['Elocution M','Elocution U','Elocution E','Mappilappattu','Hamd Urdu','Poem Recitaton E',
            "Musha'ara Alfiya", 'Quiz','Poem Making','Poem Making E','Essay Writing M','Essay Writing E',
            'Essay Writing U','Mudravakya Rachana','Madh Gaana Rachana','Translatoin E','Poster Designing',
            'feature Writing','Social Text','E Poster','Survey Tool','Digital Illustration', 'Book Test',];
          break;

          case 'General':
            items = ['Spot Magazine','Daff','Arabana','Group Song A','Group Song B','Moulid','Qaseeda',
              'Viplava Gaanam','Chumarezuth','Malappatt','Risala Quiz','Qawali','Viplava gaana rachana',
              'Mapilappatt Rachana','Project','Collage','Nasheeda','Sufi Geetham','Family Magazine',];
            break;

    default:
      break;
  }

  const fetchResults = async()=>{
    try {
      const res = await axios.get('/api/result/');
      // console.log(fetchedResults);
      const fetchedResults = res.data.results;
      setDbResults(fetchedResults);
      
      
    } catch (error) {
      console.log(error);
      
    }
  }


  useEffect(()=>{
    fetchResults();
  },[])


  useEffect(() => {
    if (canvasRef.current && imageRef.current) {
      setCanvas(canvasRef.current);
      setImage(imageRef.current);
    }
  }, [imageLoaded,displayedResult]);

  
  useEffect(() => {
if (imageLoaded && canvas && image && displayedResult.length > 0) {
      const context = canvas.getContext("2d");

      if (context) {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Function to draw text with wrapping
        const drawText = (text, x, y, maxWidth, lineHeight) => {
          const words = text.split(' ');
          let line = '';
          let lineCount = 0;
          for (let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = context.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
              context.fillText(line, x, y);
              line = words[n] + ' ';
              y += lineHeight;
              lineCount++;
            } else {
              line = testLine;
            }
          }
          context.fillText(line, x, y);
          lineCount++;
          return lineCount;
        };

        context.font = "600 65px Poppins, sans-serif";
          context.fillStyle = "black";
          const lines = drawText(displayedResult[0].item, 160, 200, 500, 70);

          context.font = "400 40px Poppins, sans-serif";
          context.fillStyle = "black";
          drawText(displayedResult[0].category, 160, 180 + lines * 70, 500, 45);

          context.font = "400 45px Poppins, sans-serif";
          context.fillStyle = "black";
          context.fillText("1", 160, 450);

          context.font = "600 50px Poppins, sans-serif";
          context.fillStyle = "black";
          context.fillText(displayedResult[0].firstName, 210, 450);

          context.font = "400 25px Poppins, sans-serif";
          context.fillStyle = "black";
          context.fillText(displayedResult[0].firstUnit, 210, 480);

          context.font = "400 45px Poppins, sans-serif";
          context.fillStyle = "black";
          context.fillText("2", 160, 550);

          context.font = "600 50px Poppins, sans-serif";
          context.fillStyle = "black";
          context.fillText(displayedResult[0].secondName, 210, 550);

          context.font = "400 25px Poppins, sans-serif";
          context.fillStyle = "black";
          context.fillText(displayedResult[0].secondUnit, 210, 580);

          context.font = "400 45px Poppins, sans-serif";
          context.fillStyle = "black";
          context.fillText("3", 160, 650);

          context.font = "600 50px Poppins, sans-serif";
          context.fillStyle = "black";
          context.fillText(displayedResult[0].thirdName, 210, 650);

          context.font = "400 25px Poppins, sans-serif";
          context.fillStyle = "black";
          context.fillText(displayedResult[0].thirdUnit, 210, 680);
      }
    }
}, [displayedResult,items]);
// dbResults,items,category

  useEffect(()=>{
    if (dbResults.length > 1) {
      setNotUploaded(false);
      const filteredResults = dbResults.filter(result => result.category === category && result.item === item);
      setDisplayedResult(filteredResults);
      // console.log(filteredResults);
      if (filteredResults.length === 0) {
        setNotUploaded(true);
      }      
    }
  },[item, category, dbResults]);

  const handleDownload = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpeg");
      link.download = "filtered_image.jpg";
      link.click();
    }
  };

  return (
    <div className="w-full ">
        <h1 className="font-bold text-4xl px-10 md:p-0 md:px-56">Results</h1>
        <div className="flex md:flex-row flex-col md:justify-between space-y-1.5 md:space-y-0 pt-1 p-10 md:px-56">
          <div className="flex flex-col items-start">
            <label htmlFor="" className="text-lg">Category</label>
            <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setItem('');
              items = [] ;
          }}
            className="bg-black text-white md:text-lg p-2 md:p-3 font-medium  md:px-8 rounded">
              <option value="">Select Category</option>
              {categories.map((category,i)=><option key={i} value={category}>{category}</option>)}
            </select>
          </div>
          <div className="flex flex-col items-start">
            <label className="text-lg" htmlFor="">Item</label>
            <select 
            value={item}
            onChange={(e)=>setItem(e.target.value)}
            className="bg-black text-white md:text-lg p-2 md:p-3 font-medium  md:px-8 rounded">
              <option value="">Select Item</option>
              {items.map((item,i) => <option key={i} value={item}>{item}</option>)}
            </select>
          </div>
        </div>


        <div className="mt-0 md:mt-8 bg-yellow-50 p-10 md:px-56">
        {displayedResult.length > 0 && <div className="flex flex-col w-full pt-4">

        <div className="flex flex-col md:flex-row p-8 gap-4">
          <div className="flex items-center gap-5">
            <h1 className="text-xl font-semibold ">1</h1>
            <div className="-space-y-2">
              <h1 className="text-2xl font-bold">{displayedResult[0].firstName}</h1>
              <h1>{displayedResult[0].firstUnit}</h1>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <h1 className="text-xl font-semibold">2</h1>
            <div className="-space-y-2">
              <h1 className="text-2xl font-bold">{displayedResult[0].secondName}</h1>
              <h1>{displayedResult[0].secondUnit}</h1>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <h1 className="text-xl font-semibold">3</h1>
            <div className="-space-y-2">
              <h1 className="text-2xl font-bold">{displayedResult[0].thirdName}</h1>
              <h1>{displayedResult[0].thirdUnit}</h1>
            </div>
          </div>
        </div>
        {/* Hidden image for canvas drawing */}
        <Image 

        // objectFit='contain'
        priority
        fill
        quality={100}
        sizes="100vw"
        src={temp.src}
          alt="temp"
          className='w-full hidden'
          onLoad={() => setImageLoaded(true)}
          ref={imageRef}
        />

        {/* Canvas for rendering and downloading */}
        <canvas ref={canvasRef} className="shadow-lg"></canvas>

        {/* Download button */}
        <button
          className="bg-black text-white w-full p-3 text-xl font-semibold"
          onClick={handleDownload}
        >
          Download
        </button>
        </div> }

        {item === '' && <h1>Please Select Your Item</h1>}

        {notUploaded && item ? <h1>Sorry.. This result isn&apos;t uploaded yet.</h1> : null}

          
        </div>
      </div>
  )
}

export default Result
