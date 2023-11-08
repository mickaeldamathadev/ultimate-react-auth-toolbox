import { useLoaderData } from 'react-router'
import DocumentTable from 'ultimate-react-mongo-table'

export default function Roles(props: { action: (id: string) => void }) {
  const roles = useLoaderData()

  return (
    <div className="roles flex-start">
      <DocumentTable<any> documents={roles as any[]} action={props.action} />
    </div>
  )
}
