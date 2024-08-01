import React from 'react';
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import { User } from '@prisma/client';

interface NavItemProps {
  mobile?: boolean;
  currentUser?: User | null;
}

export default function NavItem({
  mobile,
  currentUser,
}: NavItemProps) {
  return (
    <ul
      className={`text-md justify-center flex gap-4 w-full items-center ${
        mobile && 'flex-col h-full'
      }`}
    >
      <li className='py-2 text-center border-b-2 cursor-pointer'>
        <Link href='/admin'>Admin</Link>
      </li>
      <li className='py-2 text-center border-b-2 cursor-pointer'>
        <Link href='/user'>User</Link>
      </li>
      {currentUser ? (
        <li className='py-2 text-center border-b-2 cursor-pointer'>
          <button onClick={() => signOut()}>Signout</button>
        </li>
      ) : (
        <li className='py-2 text-center border-b-2 cursor-pointer'>
          <button onClick={() => signIn()}>Signin</button>
        </li>
      )}
    </ul>
  );
}
