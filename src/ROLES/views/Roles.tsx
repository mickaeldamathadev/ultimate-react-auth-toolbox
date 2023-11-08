import { Link } from 'react-router-dom'
import DocumentTable from 'ultimate-react-mongo-table'

export default function Roles(props: { roles: any[] }) {
  return (
    <div className="roles flex-start">
      <Link className="add-role" to="/app/admin/roles/new">
        +
      </Link>
      <DocumentTable<any>
        documents={props.roles as any[]}
        action={() => null}
      />
    </div>
  )
}
