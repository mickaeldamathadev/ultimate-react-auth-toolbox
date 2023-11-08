import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import DocumentTable from 'ultimate-react-mongo-table'

export default function Roles(props: { action: (id: string) => any }) {
  const { roles }: any = useLoaderData()
  const nav = useNavigate()
  console.log(roles.data)

  return (
    <div className="roles flex-start">
      <Link className="add-role" to="/app/admin/roles/new">
        +
      </Link>
      <DocumentTable<any>
        documents={roles.data as any[]}
        action={props.action}
      />
    </div>
  )
}
