import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/recipe/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/recipe/$id"!</div>
}
