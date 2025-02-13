import Link from 'next/link'
import React from 'react'
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";

const page = () => {
  return (
    <>

    <div className="bg-white py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">PRIORITIES</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                At MISC. we operate with a priority system, your main priority is your main focus and target for the day, this could be hosting, being on a section, or even running. Every job has a description, if the main priority is fulfilled, go down the list. However, if your main priority pops up, you are expected to focus on that.
                <br/> <br/>
                <strong>
                    Here is a breakdown of priorities in some key roles at the venue:
                </strong>
            </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                <div className="relative sm:pl-5 lg:pl-16">
                    <dt className="text-base font-bold leading-7 text-teal-600">
                        DRINK ORDER
                    </dt>
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">Greeting & Seating </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Greet guests, seat bookings, work on walk ins, control the flow</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">Touching on tables</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">A quick scan of the area to see if there are any guests that have been missed or need anything</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">Clearing/Resetting</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Only clear and reset if there’s absolutely no guests to touch on or to greet at the door</dd>
                        </div>
                    </dl>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                    <dt className="text-base font-bold leading-7 text-teal-600">
                        SECTION WAITER
                    </dt>
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">Guests in your section</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Eyes up and always scanning guests in your section, make sure their every need is met, refill waters, offer more drinks, ask for feedback, build rapport.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">Upselling</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Do another round and upsell, suggest more drinks and food, offer a round of drinks if people are vibing and having fun</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">Clearing/Resetting</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Make sure your tables are ready for next guests</dd>
                        </div>
                    </dl>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                    <dt className="text-base font-bold leading-7 text-teal-600">
                        RUNNERS
                    </dt>
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">FOOD</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Run Food - Rund Drinks - Clear/Reset</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">DRINKS</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Run Drinks - Run Food - Clear/Reset</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">RESET</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Clear/Reset - Run Food - Run Drinks</dd>
                        </div>
                    </dl>
                </div>
            </dl>
            </div>
        </div>
    </div>

    <div className=" flex items-center justify-around text-teal-50 font-bold">

        <Link href="/sequence-of-service" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
            <TbPlayerTrackPrevFilled /> Sequence of service
        </Link>

        <Link href="/service-guide" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
        Service guide <TbPlayerTrackNextFilled />
        </Link>

    </div>

    </>
  )
}

export default page
