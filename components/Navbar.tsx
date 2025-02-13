"use client";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import UserMenu from "./UserMenu";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useUser();
    const userId = user?.id;

    return (
        <div className="pt-5">
            <div className="max-w-[1500px] mx-auto w-[90%] flex justify-between items-center border-b pb-5">
                <div className="md:hidden">
                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {menuOpen ? (
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
                <div>
                    <Link href="/" className="flex gap-1 items-center text-2xl">
                        <Image
                            className="h-8 w-auto"
                            src="/misc_logo.png"
                            width={50}
                            height={50}
                            alt="Your Company"
                        />
                        <h3 className="font-medium text-teal-600">Bible</h3>
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-dark hover:bg-teal-600 hover:text-white duration-200">
                        Home
                    </Link>
                    <Link href="/leaderboards" className="rounded-md px-3 py-2 text-sm font-medium text-dark hover:bg-teal-600 hover:text-white duration-200">
                        Leaderboards
                    </Link>
                    <Link href="/stats" className="rounded-md px-3 py-2 text-sm font-medium text-dark hover:bg-teal-600 hover:text-white duration-200">
                        Stats
                    </Link>
                    <Link href="/quiz-page" className="rounded-md px-3 py-2 text-sm font-medium text-dark hover:bg-teal-600 hover:text-white duration-200">
                        Quiz
                    </Link>
                    {userId === 'user_2jKDAc53rmU0WunQaia2PI6U6GE' && (
                        <Link href="/studio" className="rounded-md px-3 py-2 text-sm font-medium text-dark hover:bg-teal-600 hover:text-white duration-200">
                            Studio
                        </Link>
                    )}
                </div>
                <div className="flex items-center gap-3 justify-end">
                    <UserMenu />
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-teal-600 hover:text-white duration-200">
                            Home
                        </Link>
                        <Link href="/leaderboards" className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-teal-600 hover:text-white duration-200">
                            Leaderboards
                        </Link>
                        <Link href="/stats" className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-teal-600 hover:text-white duration-200">
                            Stats
                        </Link>
                        <Link href="/quiz-page" className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-teal-600 hover:text-white duration-200">
                            Quiz
                        </Link>
                        {userId === 'user_2jKDAc53rmU0WunQaia2PI6U6GE' && (
                            <Link href="/studio" className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-teal-600 hover:text-white duration-200">
                                Studio
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
