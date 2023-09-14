import EventItem from "./event-item"
import classes from "../../styles/event-list.module.css"
function EventList({ events }) {
    return (
        <ul className={classes.list}>
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