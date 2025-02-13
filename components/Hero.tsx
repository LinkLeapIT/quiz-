import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" 
          alt="Background Image" 
          layout="fill"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div 
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" 
          aria-hidden="true"
        >
          <div 
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-teal-700 to-gray-50 opacity-20" 
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
          ></div>
        </div>
        <div 
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" 
          aria-hidden="true"
        >
          <div 
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-teal-600 to-gray-50 opacity-20" 
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
          ></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">MISC. Bible</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">Welcome to MISC.,</p>
            <p className="mt-2 text-lg leading-8 text-gray-300">Vibe check - welcome to the team!</p>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              We’re a casual fine dining, high energy, restaurant and event space. That’s what MISC. is all about. We hope you find your time here full of learning, challenges, camaraderie and a perpetual passion for hospitality, food and drink.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <Link href="introduction">
                Introduction <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="shifts-rosters">
                Shifts & rosters <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="team-essentials">
                Team essentials <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="sequence-of-service">
                Sequence of service <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="priorities">
                Priorities <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="service-guide">
                Service guide <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="putting-orders-through">
                Putting orders through <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
