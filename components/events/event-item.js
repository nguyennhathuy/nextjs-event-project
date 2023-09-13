function EventItem({ event }) {
    const { date, id, image, location, title, description } = event
    const localeDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return (
        <li>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={`/${image}`} alt={title} />
            <time>{localeDate}</time>
        </li>
    )
}

export default EventItem