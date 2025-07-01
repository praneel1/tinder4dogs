import React, { useState } from 'react'

function Image() {

    const [img,setImg] = useState('');
    const[loading, setLoading] = useState(false);


  return (
    <>
    {loading ? (<p>Loading...</p>): (
        <>
        <button className='rejectbtn'>❌</button>
        <img src={img} alt='Random dog pic'/>
        <button className='acceptbtn'>💓</button>
        </>
    )}
    </>
  )
}

export default Image    