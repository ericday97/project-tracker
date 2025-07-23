import { GoogleLogin } from "components/GoogleLogin";
import { useAtom } from "jotai";
import { userAtom } from "state/auth";

export function Welcome() {
  const [user, setUser] = useAtom(userAtom);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
        <h1 className="text-2xl font-semibold">Project Tracker</h1>
        
        {user ? (
          <div className="space-y-2">
            <div>
              <img
                src={user.picture}
                alt={user.name}
                className="mx-auto w-12 h-12 rounded-full"
              />
              <p className="mt-2 text-sm">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
            <button
              onClick={() => setUser(null)}
              className="mt-4 px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
            >
              Sign out
            </button>
          </div>
        ) : (
          <GoogleLogin />
        )}
      </nav>
    </main>
  );
}
