export const ROLES_KEY : string = 'roles'
export const TOKEN : string = 'jwt'
const localStorage : Storage = window.localStorage

export function setInStore (key: string, value: string) {
  const stringData = JSON.stringify(value)
  localStorage.setItem(key, stringData)

  return true
}

export function getInStore (key: string) {
  const stringData = localStorage.getItem(key)
  if (stringData) {
    return JSON.parse(stringData)
  }
  return false
}

export function removeInStore (key: string) {
  localStorage.removeItem(key)

  return true
}
