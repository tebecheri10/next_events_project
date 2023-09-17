import Link from 'next/link'
import classes from './event-item.module.css'
import Button from '../ui/Button'

const EventItem = ({event}) => {
 const { title, image, date, location, id } = event
 const exploreId = `/events/${id}`

 const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month: "long",
    year: "numeric"
 })

  return (
    <li key={id} id={id} className={classes.item}>
        <img src={`/${image}`} alt="" />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{ title }</h2>
                <div className={classes.date}>
                    <time>{ readableDate }</time>
                </div>
                <div className={classes.address}>
                    <address>{ location }</address>
                </div>
            </div>
            <div className={classes.actions}>
            <Button link={exploreId}>
                Explore Event
            </Button>
            </div>
        </div>
    </li>
  )
}

export default EventItem