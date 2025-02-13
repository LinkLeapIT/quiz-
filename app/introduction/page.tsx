import Link from 'next/link'
import React from 'react'
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";

const page = () => {
  return (
    <>
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Introduction</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                We’re a casual fine dining, high energy, restaurant and event space. That’s what MISC. is all about. We hope you find your time here full of learning, challenges, camaraderie and a perpetual passion for hospitality, food and drink.
            </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                    SOP’s
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    SOP’s (Standard Operating Procedures) is a list of systems and procedures we expect you to follow while being employed with us. <br/><br/>
                    SOP’s are important for running a successful business like a well-oiled machine, it’s important that you follow and remember these SOP’s, to become an important part of the team that delivers an amazing dining experience every time. <br/><br/>
                    SOP’s not only cover front facing operations, but back of house operations as well such as weekly cleaning, maintenance, uniforms, where to store things, how to ask for leave, rostering, RSAs and Food Safety Certificates.
                </dd>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                    THREE STRIKE SYSTEM
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    Now - on a serious note. We operate on a 3-strike rule at MISC. This applies to not following the SOPs or rules laid out by management or in this document. Repeat offenders will be given a NWA (Nudge - Warning - Action).
                    <br/><br/> For example: <br/> 
                    consistently running late; Nudge is a small chat about rocking up 10 minutes early to your shift.<br/> Warning is if it happens a second time and Action is being sent home or taken off the roster if it happens the third time.
                </dd>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                    CULTURE
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    Our team culture is the most valuable asset we have, and something we pride ourselves on. <br/> Our culture is driven and passionate about service, and giving our guests an amazing experience. It’s bringing high energy and positivity every shift. <br/> It’s being a total team player, not complaining, gossiping, or forming cliques.<br/> One team one dream gets the job done!
                </dd>
                </div>
            </dl>
            </div>
        </div>
    </div>

    <div className=" flex items-center justify-around text-teal-50 font-bold">

        <Link href="/" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
            <TbPlayerTrackPrevFilled /> Home
        </Link>

        <Link href="/team-essentials" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
        Shifts & rosters <TbPlayerTrackNextFilled />
        </Link>

    </div>
    </>
  )
}

export default page
