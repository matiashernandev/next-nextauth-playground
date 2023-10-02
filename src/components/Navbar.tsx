"use client"

import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()
  console.log(session)

  return (
    <nav className="bg-slate-900 flex items-center py-3 justify-between px-24 text-white">
      <Link href="/">
        <h1>NextGoogle</h1>
      </Link>
      {session?.user ? (
        <div className="flex gap-x-2 items-center">
          <Link href="/dashboard">Dashboard</Link>
          <p>
            {session.user.name} {session.user.email}{" "}
          </p>
          <img
            src={session.user.image ?? ""}
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <button
          onClick={() => signIn()}
          className="bg-sky-500 px-3 py-2 rounded"
        >
          Sign in
        </button>
      )}
    </nav>
  )
}
