import React from 'react';

//  this a functional Controller for Image - note: ES6 syntax
//  too few stuff to use a class Controller

const Image = (props) => {
  //  show us the props
  const img = props.imgurl;
  //  conditional rendering
    if (img) {
     return( <div><h3 className="author">Author: <a target="_blank" title="author's page" href={props.author_url}>{props.author}</a>, URL: <a target="_blank" title="author's page" href={props.author_url}>{props.author_url}</a></h3><a title="image's page" target="_blank" href={props.imgurl}><img src={img} height="600" alt="Picsum API" /></a></div> )
    } else {
      return (<div />)
    }
}

export default Image;