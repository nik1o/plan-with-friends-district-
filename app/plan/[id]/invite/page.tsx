import { AddFriendsPage } from "@/components/add-friends-page"

export default function InviteFriendsPage({ params }: { params: { id: string } }) {
  return <AddFriendsPage id={params.id} />
}
