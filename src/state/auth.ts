import { atom } from 'jotai'

export type GoogleUser = {
  name: string
  email: string
  picture: string
}

export const userAtom = atom<GoogleUser | null>(null)
