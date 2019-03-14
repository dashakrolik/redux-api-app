import * as React from 'react'

export default function EventDetails(props) {
  if(props.event) {
  return (
    <div>
      <h1>{props.event.name}</h1>
      <i>{props.event.date}</i>
      <p>{props.event.description}</p>
      <button tyep="button" onClick={props.onDelete}>Delete</button>
    </div>
  )
} else {
  return <p>Loading..</p>
}
}
