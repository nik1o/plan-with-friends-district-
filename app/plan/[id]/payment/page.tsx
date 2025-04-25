import { PaymentEntryPage } from "@/components/payment-entry-page"

export default function PaymentPage({ params }: { params: { id: string } }) {
  return <PaymentEntryPage id={params.id} />
}
