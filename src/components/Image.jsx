import React, { useState } from 'react'

function Image() {

    const [img,setImg] = useState('');
    const[loading, setLoading] = useState(false);

    const fetchDog = async () => {
        setLoading(true)
        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await res.json()
        setImg(data.message)
        setLoading(false)

    }

  return (
    <div className="wrapper">
    <button className='rejectbtn' onClick={fetchDog}>❌</button>
    
    <div className="image">
    {loading ? (<p>Loading...</p>): (
      <>
        <img src={img} alt='Random dog pic'/>
        </>
    )}
    </div>

    <button className='acceptbtn' onClick={fetchDog}>💓</button>
    </div>
  )
}

export default Image    