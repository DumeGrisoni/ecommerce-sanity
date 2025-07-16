'use client';

import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/nextjs';
import Link from 'next/link';
import Form from 'next/form';
import { PackageIcon, TrolleyIcon, UserIcon } from '@sanity/icons';

import { Button } from './ui/button';

const Header = () => {
  const { user } = useUser();

  return (
    <header className="flex flex-wrap justify-center  items-center px-4 py-2">
      <div className="flex flex-wrap w-full justify-center items-center">
        <Link
          href={'/'}
          className="text-2xl font-bold hover:opacity-70 cursor-pointer mx-auto sm:mx-0 transi"
        >
          <span className="text-nova">N</span>ova
          <span className="text-nova">M</span>arket
        </Link>
        <Form
          action={'/search'}
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0 flex items-center justify-center"
        >
          <input
            type="text"
            name="query"
            className="bg-gray-50 text-gray-800 px-4 py-1 rounded focus:outline-none focus:ring-1 focus:ring-black focus:ring-opacity-50 border w-full max-w-4xl"
            placeholder="Rechercher..."
          />
        </Form>

        <div className="flex items-center space-x-4 mt-4 justify-center sm:flex-none">
          <Link
            href={'/cart'}
            className="flex-1 relative flex justify-center items-center sm:justify-start sm:flex-none space-x-2"
          >
            <Button
              variant={'outline'}
              size={'default'}
              className="rounded-lg cursor-pointer text-white bg-nova hover:bg-nova-hover transi"
            >
              <TrolleyIcon color="white" />
              Mon panier
            </Button>
          </Link>
          <ClerkLoaded>
            <SignedIn>
              <Link
                href={'/orders'}
                className="flex-1 relative flex justify-center items-center sm:justify-start sm:flex-none space-x-2"
              >
                <Button
                  variant={'outline'}
                  size={'icon'}
                  className="rounded-full cursor-pointer btn-nova bg-nova hover:bg-nova-hover transi"
                >
                  <PackageIcon color="white" />
                </Button>
              </Link>
            </SignedIn>

            {user ? (
              <div className="flex flex-1 items-center justify-center space-x-2 ">
                <UserButton afterSwitchSessionUrl="/" appearance={{}} />

                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Bon retour parmis nous !</p>
                  <p className="font-bold text-sm">{user.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <Button
                  variant={'outline'}
                  className="flex items-center justify-center cursor-pointer btn-nova transi"
                >
                  <UserIcon color="white" />
                  Connexion
                </Button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;
