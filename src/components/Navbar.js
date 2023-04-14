import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { ImFacebook } from 'react-icons/im'
import { GrInstagram, GrYoutube } from 'react-icons/gr'
import vtnewslogo from '../assets/vtnewslogo.png'
import ipva from '../assets/ipva.gif'

const Navbar = () => {

  const [data, setData] = useState(new Date());

  function mudarData() {
    const amanha = new Date();
    amanha.setDate(amanha.getDate() + 1);
    setData(amanha);
  }

  return (
    <div className='container'>
      <nav>
        <p className='dateTitle'>{data.toLocaleDateString()}</p>
        <Link className='navTitle' to='/'>Ultimas notícias</Link>
        <Link className='navTitle' to='/policial'>Policial</Link>
        <Link className='navTitle' to='/politica'>Política</Link>
        <Link className='navTitle' to='/cotidiano'>Cotidiano</Link>
        <Link className='navTitle' to='/curiosidades'>Curiosidades</Link>
        <Link className='navTitle' to='/ciencia'>Ciência</Link>
        <Link className='navTitle' to='/agro'>Agro</Link>
        <Link className='navTitle' to='https://www.facebook.com/vtnewsnoticias'><ImFacebook /></Link>
        <Link className='navTitle' to='https://www.instagram.com/vtnews.com.br/'><GrInstagram /></Link>
        <Link className='navTitle' to='https://www.youtube.com/@vtnews5615'><GrYoutube /></Link>
      </nav>
      <div className='contentBG'>
        <div><img src={vtnewslogo}/></div>
        <div><img src={ipva}/></div>
      </div>
      <div className='contentBG'>
        <Link className='navSubTitle' to='/'>Ultimas notícias</Link>
        <Link className='navSubTitle' to='/policial'>Policial</Link>
        <Link className='navSubTitle' to='/politica'>Política</Link>
        <Link className='navSubTitle' to='/cotidiano'>Cotidiano</Link>
        <Link className='navSubTitle' to='/curiosidades'>Curiosidades</Link>
        <Link className='navSubTitle' to='/ciencia'>Ciência</Link>
        <Link className='navSubTitle' to='/agro'>Agro</Link>
      </div>
    </div>
  )
}

export default Navbar