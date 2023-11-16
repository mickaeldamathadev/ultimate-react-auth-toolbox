import RestrictedRoute from './AUTHENTICATION/components/RestrictedRoute'
import ScopedComponent from './AUTHENTICATION/components/ScopedComponent'
import UserContextProvider, {
  UserContext,
} from './AUTHENTICATION/context/UserContext'
import rolesAndPermsLoader from './AUTHENTICATION/loaders/roleAndPermsLoader'
import usersLoader from './AUTHENTICATION/loaders/usersLoader'
import Forgot from './AUTHENTICATION/views/Forgot'
import Login from './AUTHENTICATION/views/Login'
import LogoutButton from './AUTHENTICATION/views/LogoutButton'
import Register from './AUTHENTICATION/views/Register'
import Reset from './AUTHENTICATION/views/Reset'
import Validate from './AUTHENTICATION/views/Validate'
import permissionLoader from './PERMISSIONS/loaders/permLoader'
import CreatePermission from './PERMISSIONS/views/CreatePermission'
import PermissionCard from './PERMISSIONS/views/PermissionCard'
import Permissions from './PERMISSIONS/views/Permissions'
import rolesLoader from './ROLES/loaders/rolesLoader'
import CreateRole from './ROLES/views/CreateRole'
import RoleCard from './ROLES/views/RoleCard'
import Roles from './ROLES/views/Roles'
export {
  CreatePermission,
  CreateRole,
  Forgot,
  Login,
  LogoutButton,
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
  permissionLoader,
  rolesAndPermsLoader,
  rolesLoader,
  usersLoader,
}
