import * as React from 'react'
import EventForm from './EventForm'

export default function EventDetails(props) {
  if(props.event) {
  return (
    <div>
      {props.editMode && <EventForm onChange={props.onChange} values={props.values} onSubmit={props.onSubmit}/>}
      {!props.editMode && <div>
      <h1>{props.event.name}</h1>
      <i>{props.event.date}</i>
      <p>{props.event.description}</p>
      <button type="button" onClick={props.onDelete}>Delete</button>
      <button type="button" onClick={props.onEdit}>Edit</button>
    </div>}
  </div>)
} else {
  return <p>Loading..</p>
}
}
