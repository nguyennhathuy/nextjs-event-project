import EventItem from "./event-item"

function EventList({ events }) {
    return (
        <ul>
            {
                events.map((event, index) => (
                    <EventItem 
                        key={index}
                        event={event}
                    />
                ))
            }
        </ul>
    )
}

export default EventList