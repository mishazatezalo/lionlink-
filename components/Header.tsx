import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          LionLink
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/events" className="hover:underline">Events</Link></li>
            <li><Link href="/profile" className="hover:underline">Profile</Link></li>
            <li><Link href="/chat" className="hover:underline">Chat</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

