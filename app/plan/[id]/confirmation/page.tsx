import { ConfirmationPage } from "@/components/confirmation-page"

export default function Confirmation({ params }: { params: { id: string } }) {
  return <ConfirmationPage id={params.id} />
}
