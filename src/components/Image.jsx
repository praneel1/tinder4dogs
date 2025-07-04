import React, { useEffect, useState } from 'react'

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

    useEffect(()=>(fetchDog),[])

  return (
    <div className="wrapper">
  <div className="image">
    {loading ? <p>Loading...</p> : <img src={img} alt="Random dog" />}
  </div>
  <div className="buttons">
    <button className="rejectbtn" onClick={fetchDog}>❌</button>
    <button className="acceptbtn" onClick={fetchDog}>💓</button>
  </div>
</div>
  )
}

export default Image    