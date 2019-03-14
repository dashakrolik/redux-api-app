import * as React from 'react'
import { Link } from 'react-router-dom'

export default function EventsList(props) {
  console.log(props.events)
    if (props.events) {
      return (<div>
        <ul>{props.events.map((item, index) => {
            const { name, description, id } = item
            return <li key={id}><Link to={`/events/${id}`} >{name}</Link></li>
          })}
        </ul>
        
        </div>
    )
  } else {
    return <p>'Loading...'</p>
  }
}
