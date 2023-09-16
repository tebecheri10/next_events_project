import { getFeaturedEvents } from "@/dummy-data"
import EventsList from '../components/events/EventList.jsx'
import classes from '../styles/Home.module.css'

export default function Home() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
      <h1>Featured Events</h1>
      <EventsList 
       items={featuredEvents}
      />
    </div>
  )
}
