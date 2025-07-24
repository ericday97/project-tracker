import { atom } from 'jotai'

export type GoogleUser = {
  name: string
  email: string
  picture: string
}

// Read from localStorage to initialize
const storedUser = localStorage.getItem('user')
const initialUser = storedUser ? (JSON.parse(storedUser) as GoogleUser) : null

// Create a base writable atom
export const userAtom = atom<GoogleUser | null>(initialUser)

// Create a derived atom for reading/writing + syncing to localStorage
export const userWithPersistenceAtom = atom(
  (get) => get(userAtom),
  (_get, set, newUser: GoogleUser | null) => {
    set(userAtom, newUser)
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser))
    } else {
      localStorage.removeItem('user')
    }
  }
)
