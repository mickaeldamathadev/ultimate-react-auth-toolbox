import { Link, useLoaderData } from 'react-router-dom'
import DocumentTable from 'ultimate-react-mongo-table'

export default function Roles() {
  const { roles }: any = useLoaderData()

  return (
    <div className="roles flex-start">
      <Link className="add-role" to="/app/admin/roles/new">
        +
      </Link>
      <DocumentTable<any> documents={roles.data as any[]} action={() => null} />
    </div>
  )
}
