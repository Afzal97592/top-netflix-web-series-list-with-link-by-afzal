import React from 'react';
import ReactDOM from 'react-dom';


import Card from './Cards';
import Sdata from './Sdate';

import './index.css';


// console.log(Sdata[0]);

ReactDOM.render(
 <>
   <h1 className='heading_style'>List Of Top Six Netflix series in 2020 </h1>
   
   <div className="cards">
  <Card 
   imgsrc = {Sdata[0].imgsrc}
   title  = {Sdata[0].title}
   sname  = {Sdata[0].sname} 
   link   = {Sdata[0].link}
   />


  <Card
  imgsrc = {Sdata[1].imgsrc}
  title  = {Sdata[1].title}
  sname  = {Sdata[1].sname} 
  link   = {Sdata[1].link}
   />


  <Card 
   imgsrc = {Sdata[2].imgsrc}
   title  = {Sdata[2].title}
   sname  = {Sdata[2].sname} 
   link   = {Sdata[2].link}
  />

  <Card 
   imgsrc = {Sdata[3].imgsrc}
   title  = {Sdata[3].title}
   sname  = {Sdata[3].sname} 
   link   = {Sdata[3].link}
  />

  <Card 
  imgsrc = {Sdata[4].imgsrc}
  title  = {Sdata[4].title}
  sname  = {Sdata[4].sname} 
  link   = {Sdata[4].link}
 />

 <Card 
 imgsrc = {Sdata[5].imgsrc}
 title  = {Sdata[5].title}
 sname  = {Sdata[5].sname} 
 link   = {Sdata[5].link}
/>
  </div>
 
  </>,
  document.getElementById('root')
);