import { EventCreationPage } from "@/components/event-creation-page"

export default function CreateEventPage({ params }: { params: { id: string } }) {
  return <EventCreationPage id={params.id} />
}
