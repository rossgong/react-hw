import React, { Component } from 'react'

export default function ImageTile(props) {
  return (
    <div style={{ height: 400 }} onClick={props.onClick} >
      <img style={{ height: "inherit" }} src={props.image} alt={props.name} />
    </div>
  )
}