import Link from 'next/link'
import React from 'react'
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";

const page = () => {
  return (
    <>
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SEQUENCE OF SERVICE</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                SOS is everything! It’s the foundation of everything we do and a door to our guests having a great experience. It is of utmost importance that you follow SOS at all times to keep our service consistent and up to standard.
            </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                    GREET
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    Greet everyone within 10 seconds. <br />
                    Introduce yourself, welcome them to MISC., ask if they’re celebrating anything. <br />
                    Ask if they’d like still or sparkling water to start with, or if they’d like any drinks straight up. <br />
                    Recommend a couple of your favourite wines/cocktails. <br />
                    Give them two minutes to decide on drinks.
                </dd>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                    DRINK ORDER
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    Take drink orders, recommend a few favourite food items and/or explain how the feed me menu works. Talk about specials and give them 2-5 minutes to decide on food. Ask about any allergies.
                </dd>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                    CHECKUP 1
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    Make sure first drinks land within 5 minutes, after a couple of sips check on the table and ask them how their drinks are. Get feedback and/or adjust if needed.
                </dd>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                    FOOD ORDER
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    Take food order, make sure it’s a good flow (coursing) and just the right amount in each course (not too little not too much) repeat the food order back.
                </dd>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                    CHECKUP 2
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                Once food lands, after <strong>two bites</strong> go back to the table to ask how their meals are going, are they missing anything, what’s their favourite or not so favourite. Adjust if needed. <strong>This is also an opportunity to sell more drinks.</strong>
                </dd>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                    CHECKUP 3
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    When ¾ of the mains are eaten, check on the table, check on how they’re going, if they need more bread for the sauces, or if they’re ready for dessert. Recommend a few dessert items.
                </dd>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                    DESSERT ORDER
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    When taking dessert order, offer more drinks or coffee.
                </dd>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                    CHECKUP 4
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    Check on how their final drinks and desserts are going, leave for a bit to chill and ask if they need anything else. If not, offer the bill and thank them for their visit.
                </dd>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                    GOODBYE
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    This is just as important as the greeting. Make sure you are saying bye to all your tables. Say bye with enthusiasm, thank them for their visit and ask them for a review, to follow our instagram or to book in soon!
                </dd>
                </div>
            </dl>
            </div>
        </div>
    </div>

    <div className=" flex items-center justify-around text-teal-50 font-bold">

        <Link href="/team-essentials" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
            <TbPlayerTrackPrevFilled /> team-essentials
        </Link>

        <Link href="/priorities" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
        Priorities <TbPlayerTrackNextFilled />
        </Link>

    </div>

    </>
  )
}

export default page
