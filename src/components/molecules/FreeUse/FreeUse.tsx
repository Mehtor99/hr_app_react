import React from 'react'
import './FreeUse.css'
import { useNavigate } from 'react-router-dom';

function FreeUse() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/register'); // Yönlendirme yapılacak sayfa
  };

  return (
    <>
    <div className="col-2">

</div>

<div className="col-8 freeuse mb-5" >
   {/* Sol Üst Daire */}
   <div className="circle circle-left"></div>

   {/* Sağ Alt Daire */}
   <div className="circle circle-right"></div>
   
  <div className="row align-items-center mt-3">
  <i className="fa-solid fa-hands-clapping" style={{color: '#FFD43B', fontSize: '70px'}}></i>
  </div>
  <div className="row mt-3">
    <h3 style={{color:'black'}}>Hemen 30 gün ücretsiz deneyin </h3>
  </div>
  <div className="row mt-3">
    <h5 style={{color:'black'}}>Hiçbir kurulum ve kredi kartı gerektirmeden kullanmaya başlayın.</h5>
  </div>
  <div className="row align-center center-row" >
    
    <button type="button" className="btn-deneme mt-3" onClick={handleButtonClick}>Ücretsiz Deneyin</button>
    
   
  </div>
  </div>

  

 

<div className="col-2"></div>
    </>
    
  )
}

export default FreeUse