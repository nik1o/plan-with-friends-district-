import { RestaurantDetailPage } from "@/components/restaurant-detail-page"

export default function RestaurantPage({ params }: { params: { id: string } }) {
  return <RestaurantDetailPage id={params.id} />
}
