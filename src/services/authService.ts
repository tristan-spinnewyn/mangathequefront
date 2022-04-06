import { getInStore, removeInStore, setInStore, TOKEN, ROLES_KEY } from './store'

export const setUserLocalStorage = (data: any) => {
  const roles = []
  roles.push('ROLE_USER')
  if(data.role === true){
    roles.push('ROLE_ADMIN')
  }
  setInStore(ROLES_KEY, roles.toString())
  setInStore(TOKEN, data.access_token)
}

export const isConnected = () => {
  const token = getInStore(TOKEN)
  if (token) {
    return true
  }
  return false
}

export const getRoles = () => {
  return getInStore(ROLES_KEY)
}

export const getToken = () => {
  return getInStore(TOKEN)
}

export const logout = () => {
  removeInStore(ROLES_KEY)
  removeInStore(TOKEN)
}

export const hasRoles = (role: string) => {
  return getRoles().include(role)
}
