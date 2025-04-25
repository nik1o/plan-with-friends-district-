import { ReviewSplitPage } from "@/components/review-split-page"

export default function ReviewPage({ params }: { params: { id: string } }) {
  return <ReviewSplitPage id={params.id} />
}
