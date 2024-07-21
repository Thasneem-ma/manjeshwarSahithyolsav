'use client'
import React,{useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

function Page() {
  const [result,setResult]=useState({
    category: '',
    item: '',
    firstName: '',
    firstUnit: '',
    secondName: '',
    secondUnit: '',
    thirdName: '',
    thirdUnit: '',
  })

  const units = ['Vorkady','Bakrabail','Manjeshwar','Meenja','Kunjathur','Kedumbady' ,
    'Kadambar','Daigoli',]

  const categories = ['Lower Primary','Upper Primary','High School','Higher Secondary','Junior','Senior','General',]

  let items = [];

  switch (result.category) {
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
      items = ['Elocution M','Elocution E','Mappilappattu','Madh Ganam','Poem Recitation M','Poem Recitation A','Poem Recitation U',
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

  const onSubmit = async(e)=>{
    e.preventDefault();

    try {
      const res = await axios.post('/api/result/',{
        category : result.category,
        item : result.item,
        firstName : result.firstName,
        firstUnit: result.firstUnit,
        secondName : result.secondName,
        secondUnit: result.secondUnit,
        thirdName : result.thirdName,
        thirdUnit: result.thirdUnit,
      });

      if (res.statusText === 'OK') {
        toast.success('Successfully uploaded.');
      }

      setResult({
        category: '',
        item: '',
        firstName: '',
        firstUnit: '',
        secondName: '',
        secondUnit: '',
        thirdName: '',
        thirdUnit: '',
      })
    } catch (error) {
      toast.error('Failed to add the participant')
      console.log("failed to Post the participant",error);
    }
  }

  return (
    <form className='flex flex-col min-h-screen space-y-12 p-14 pt-24 md:p-28 '>
      <h1 className='font-bold text-3xl'>Upload Results Here</h1>
      <div className='flex flex-col space-y-3'>
      <div className='flex gap-3 md:gap-24 w-full '>
      <div className='flex flex-col gap-2'>
        <label htmlFor="result Number" className='text-lg'>Category</label>
        <select 
        required
        value={result.category}
        onChange={(e)=>setResult({...result, category: e.target.value})}
        className='bg-slate-50 h-full hover:bg-slate-100 p-2 rounded border-2 ' name="" id="">
          <option value="">Select Category</option>
          {categories.map((category,i) =><option key={i} value={category}>{category}</option>)}
        </select>
      </div>
      </div>

      <div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="result Number" className='text-lg'>Item</label>
        <select 
        required
        value={result.item}
        onChange={(e)=>setResult({...result, item: e.target.value})}
        className='bg-slate-50 h-full hover:bg-slate-100 p-2 rounded border-2 w-fit' name="" id="">
          <option value="">Select Item</option>
          {items.map((item,i) =><option key={i} value={item}>{item}</option>)}
        </select>
      </div>
      </div>

      <div className='flex flex-col md:flex-grow gap-4 pt-5 md:flex-row '>
      {/* first */}
      <div className='flex flex-col'>
        <h1 className='font-semibold text-lg'>First Place</h1>
        <div className='flex flex-col gap-1 md:flex-row'>
          <div className='flex flex-col gap-2'>
          <label htmlFor="result Number" className='text-lg'>Name</label>
          <input 
          required
          value={result.firstName}
          onChange={(e) => setResult({...result, firstName: e.target.value})}
          className='bg-slate-50 hover:bg-slate-100 p-2 rounded border-2 ' type="text" />
          </div>
        <div className='flex flex-col gap-2'>
        <label htmlFor="result Number" className='text-lg'>Sector</label>
        <select 
        required
        value={result.firstUnit}
        onChange={(e)=> setResult({...result, firstUnit: e.target.value})}
        className='bg-slate-50 h-full hover:bg-slate-100 p-2 rounded border-2 ' name="" id="">
          <option value="">Select Sector</option>
          {units.map((unit,i) =><option key={i} value={unit}>{unit}</option>)}
        </select>
        </div>
        </div>
      </div>

      {/* second */}
      <div className='flex flex-col'>
        <h1 className='font-semibold text-lg'>Second Place</h1>
        <div className='flex flex-col gap-1 md:flex-row'>
          <div className='flex flex-col gap-2'>
          <label htmlFor="result Number" className='text-lg'>Name</label>
          <input 
          required
          value={result.secondName}
          onChange={(e) =>setResult({...result, secondName: e.target.value})}
          className='bg-slate-50 hover:bg-slate-100 p-2 rounded border-2 ' type="text" />
          </div>
        <div className='flex flex-col gap-2'>
        <label htmlFor="result Number" className='text-lg'>Sector</label>
        <select 
        required
        value={result.secondUnit}
        onChange={(e) =>setResult({...result, secondUnit: e.target.value})}
        className='bg-slate-50 h-full hover:bg-slate-100 p-2 rounded border-2 ' name="" id="">
          <option value="">Select Sector</option>
          {units.map((unit,i) =><option key={i} value={unit}>{unit}</option>)}

        </select>
        </div>
        </div>
      </div>

      {/* third */}
      <div className='flex flex-col'>
        <h1 className='font-semibold text-lg'>Third Place</h1>
        <div className='flex flex-col gap-1 md:flex-row'>
          <div className='flex flex-col gap-2'>
          <label htmlFor="result Number" className='text-lg'>Name</label>
          <input 
          required
          value={result.thirdName}
          onChange={(e)=>setResult({...result, thirdName: e.target.value})}
          className='bg-slate-50 hover:bg-slate-100 p-2 rounded border-2 ' type="text" />
          </div>
        <div className='flex flex-col gap-2'>
        <label htmlFor="result Number" className='text-lg'>Sector</label>
        <select 
        required
        value={result.thirdUnit}
        onChange={(e)=>setResult({...result, thirdUnit: e.target.value})}
        className='bg-slate-50 h-full hover:bg-slate-100 p-2 rounded border-2 ' name="" id="">
          <option value="">Select Sector</option>
          {units.map((unit,i) =><option key={i} value={unit}>{unit}</option>)}

        </select>
        </div>
        </div>
      </div>
      </div>
      </div>

      <button onClick={onSubmit} className='bg-black w-fit p-3 font-semibold text-xl rounded px-12 hover:bg-gray-800 shadow-md text-white' type='submit'>Submit</button>
    </form>
  )
}

export default Page
