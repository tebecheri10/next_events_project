import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";
import ErrorAlert from "@/components/ui/error-alert";
import Button from "@/components/ui/Button";

const FilteredEvents = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  const MAX_YEAR = 2023;
  const MIN_YEAR = 2021;
  const MAX_MONTH = 12;
  const MIN_MONTH = 1;

  if (!filterData) {
    return <h3 style={{ textAlign: "center" }}>...loading</h3>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > MAX_YEAR ||
    numYear < MIN_YEAR ||
    numMonth < MIN_MONTH ||
    numMonth > MAX_MONTH
  ) {
    return (
      <>
        <ErrorAlert>
          <p style={{ textAlign: "center" }}>
            Invalid Filter , please adjust your values
          </p>
        </ErrorAlert>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button link={"/events"}>Back To events list</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter</p>
        </ErrorAlert>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button link={"/events"}>Back To events list</Button>
        </div>
      </>
    );
  }
  console.log("filtered eevents", filteredEvents)
  return (
    <div>
      <EventList 
       items={filteredEvents}
      />
    </div>
  );
};

export default FilteredEvents;
