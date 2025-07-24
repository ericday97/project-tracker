// src/components/GoogleLogin.tsx
import { useEffect, useRef } from 'react'
import { useSetAtom } from 'jotai'
import { userWithPersistenceAtom } from '../state/auth'
import { loadGoogleScript } from '../services/googleAuth'

const CLIENT_ID = '864537611518-ihck2uq95nc2dg17tjbtr64d2q9ctpff.apps.googleusercontent.com'

export function GoogleLogin() {
  const divRef = useRef<HTMLDivElement>(null)
  const setUser = useSetAtom(userWithPersistenceAtom)

  useEffect(() => {
    loadGoogleScript().then(() => {
      if (!window.google || !divRef.current) return

      window.google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: (response: { credential: string }) => {
          const decoded = parseJwt(response.credential)
          setUser({
            name: decoded.name,
            email: decoded.email,
            picture: decoded.picture,
          })
        },
      })

      window.google.accounts.id.renderButton(divRef.current, {
        theme: 'outline',
        size: 'large',
      })
    })
  }, [setUser])

  return <div ref={divRef}></div>
}

function parseJwt(token: string) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  )
  return JSON.parse(jsonPayload)
}
