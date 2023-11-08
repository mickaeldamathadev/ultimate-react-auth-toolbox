import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { patch, put } from 'ultimate-react-apirequests'
import { useRoutes } from 'ultimate-react-mongo-requests'
import DocumentTable from 'ultimate-react-table'
import { CallbackProps } from '../../AUTHENTICATION/data/types'
import { IPermission } from '../../PERMISSIONS/data/types'
import { IRole } from '../data/Role'

export default function RoleCard({ onError, onSuccess }: CallbackProps) {
  const permissions: any = useLoaderData()
  const { getDoc } = useRoutes<IRole>('/role')
  const [rolePerms, setRolePerms] = useState<any>([])
  const { id } = useParams()
  const updateRolePerms = async () => {
    try {
      console.log('update')
      const request = await getDoc(id!)
      console.log(request)
      if (request.error) {
        throw new Error(request.error)
      }
      const dbrole = request.data as any
      setRolePerms([
        ...dbrole.role.scopes.map((scope: any) => {
          return {
            _id: scope._id,
            ressource: scope.ressource,
            action: scope.action,
          }
        }),
      ])

      onSuccess(request.data)
    } catch (error) {
      onError(error.message)
    }
  }

  const addPermToRole = async (perm_id: string) => {
    try {
      console.log('add')
      const request = await put('/role', {}, { role: id, scope: perm_id })
      if (request.error) {
        throw new Error(request.error)
      }
      await updateRolePerms()
      onSuccess(request.data)
    } catch (error) {
      onError(error.message)
    }
  }

  const deletePermToRole = async (perm_id: string) => {
    try {
      console.log('DELETE')
      const request = await patch('/role', {}, { role: id, scope: perm_id })
      if (request.error) {
        throw new Error(request.error)
      }
      await updateRolePerms()
      onSuccess(request.data)
    } catch (error) {
      onError(error.message)
    }
  }

  useEffect(() => {
    updateRolePerms()
  }, [])

  return (
    <div className="role">
      <div className="flex-start-row">
        <div>
          <h3>Permissions du rôle</h3>
          <DocumentTable<IPermission>
            documents={rolePerms as any[]}
            action={deletePermToRole}
          />
        </div>
        <div>
          <h3>Permissions de l'application</h3>
          <DocumentTable<IPermission>
            documents={permissions.data as any[]}
            action={addPermToRole}
          />
        </div>
      </div>
    </div>
  )
}
