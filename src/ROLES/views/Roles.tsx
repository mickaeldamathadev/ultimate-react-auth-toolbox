import { useRouteLoaderData } from 'react-router'
import DocumentTable from 'ultimate-react-mongo-table'

export default function Roles(props: { action: (id: string) => void }) {
  const roles = useRouteLoaderData('roles')

  return (
    <div className="roles flex-start">
      <DocumentTable<any> documents={roles as any[]} action={props.action} />
    </div>
  )
}
