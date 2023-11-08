import RestrictedRoute from './AUTHENTICATION/components/RestrictedRoute'
import ScopedComponent from './AUTHENTICATION/components/ScopedComponent'
import UserContextProvider, {
  UserContext,
} from './AUTHENTICATION/context/UserContext'
import Forgot from './AUTHENTICATION/views/Forgot'
import Login from './AUTHENTICATION/views/Login'
import Register from './AUTHENTICATION/views/Register'
import Reset from './AUTHENTICATION/views/Reset'
import Validate from './AUTHENTICATION/views/Validate'
import CreatePermission from './PERMISSIONS/views/CreatePermission'
import PermissionCard from './PERMISSIONS/views/PermissionCard'
import Permissions from './PERMISSIONS/views/Permissions'
import CreateRole from './ROLES/views/CreateRole'
import RoleCard from './ROLES/views/RoleCard'
import Roles from './ROLES/views/Roles'

export {
  CreatePermission,
  CreateRole,
  Forgot,
  Login,
  PermissionCard,
  Permissions,
  Register,
  Reset,
  RestrictedRoute,
  RoleCard,
  Roles,
  ScopedComponent,
  UserContext,
  UserContextProvider,
  Validate,
}
