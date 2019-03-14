import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }

  render() {
    console.log('hello')
    return (
      <div>
        <EventDetails onDelete={this.onDelete} event={this.props.event} />

      </div>)
  }
}

const mapStateToProps = state => ({
  event: state.eventFetchedReducer
})

export default connect(mapStateToProps, {loadEvent, deleteEvent})(EventDetailsContainer)
