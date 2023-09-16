import { getAllEvents } from "@/dummy-data"
import EventsList from "@/components/events/EventList"
import EventsSearch from "@/components/events/EventsSearch"
import { useRouter } from 'next/router'

const EventsMainPage = () => {
  const router = useRouter()
  const events = getAllEvents()

  const eventsHandler = (year, month) =>{
      const fullPath = `/events/${year}/${month}`
      router.push(fullPath)
  }

  return (
    <div>
      <EventsSearch 
      onSearch={eventsHandler}
      />
      <EventsList
       items={events}
      />
    </div>
  )
}

export default EventsMainPage