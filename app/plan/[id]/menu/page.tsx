import { MenuSelectionPage } from "@/components/menu-selection-page"

export default function MenuPage({ params }: { params: { id: string } }) {
  return <MenuSelectionPage id={params.id} />
}
