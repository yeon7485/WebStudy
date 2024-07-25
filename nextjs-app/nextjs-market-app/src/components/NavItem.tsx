import React from 'react';
import Link from 'next/link';

export default function NavItem({ mobile }: { mobile?: boolean }) {
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
      <li className='py-2 text-center border-b-2 cursor-pointer'>
        <button>Signout</button>
      </li>
      <li className='py-2 text-center border-b-2 cursor-pointer'>
        <button>Signin</button>
      </li>
    </ul>
  );
}
