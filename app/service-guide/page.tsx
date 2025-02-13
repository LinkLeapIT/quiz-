import Link from 'next/link'
import React from 'react'
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";

const page = () => {
  return (
    <>

    <div className="bg-white py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">MISC. Star Service Guide</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>
                    You’re part of the team at MISC. - this makes you a star!
                </strong>
                <br/> <br/>
                Imagine you’re performing every shift. You’re a model on the runway, an actor in a movie, a star in a musical…you get what we mean.
                <br/> <br/>
                MISC. section waiters hold the key to the most valuable thing our guests can get: their dining experience.
                <br/> <br/>
                Dining is an art, it’s impressing guests with suggestions, pre empting their needs, going above and beyond what they ask for, being friendly, assertive (but not pushy), selling more to those who want to have a good time, and making our guests feel welcome as if they’re dining at their own place with their own family.
            </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                <div className="relative sm:pl-5 lg:pl-16">
                    <dt className="text-base font-bold leading-7 text-teal-600">
                        Here’s a guide to becoming a floor general - a star: 
                    </dt>
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">GREET</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">with enthusiasm and big energy - <strong>EVERY time.</strong></dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">INTRODUCE </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Yourself, tell guests you’ll be taking care of them, build rapport.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">SUGGEST</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">A few things you like from our menu, it can be drinks and/or food or both. Ask if they feel like something to start with or if they’d rather browse the menu.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">COMMUNICATE </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Each step. For example; if you’re about to leave the table after taking first drinks say: “I’m gonna go pop your drink orders through and I’ll be back in 5 to take your food order, is that ok?”</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">FAMILIARISE</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Yourself with our menu, allergies, and how much food is acceptable to order between different group sizes. Make sure you have the info ready in your head, this makes for a quick solution. Put food through in order of courses, entrees first then mains then desserts. We don’t suggest “All together” because it’s not our dining style, we’re about shared entrees to start, followed by a pasta, followed by mains.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">SEND</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Courses away in a timely manner. The food quantity should be perfect, not too little, not too much. Put the food through the way YOU would like to eat if you were sitting down. Communicate this to the guest.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">ATTENTION TO DETAIL</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Is everything, take coats, pick up dropped cutlery, wipe the table between courses, clear plates when not needed, pour wines when glass is almost empty, suggest more drinks before people finish them and sit on an empty glass for a while.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">MAINTAIN</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Eye contact with your section at all times. It is through eye contact that you know if your guests need anything. Remember; not everyone is outgoing and most people will not call you over, IT IS YOUR JOB to go over and ask guests if they’re ok.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">TOUCH</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">On your tables at least 5 times during their visit.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">BILL AT THE TABLE</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Don’t let your guests get up and pay. This is part of SOS and just like taking an order. When done with dessert, ask if they’d like anything else or just the bill.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">WALK WITH A SENSE OF URGENCY</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Be efficient, multitask, have 3-4 things in your head that you intend to do next.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">HELP OUT</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">When needed, if your section is ot busy, support others so they can get ahead.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">SHOW PERSONALITY</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Keep chats professional, to the point, but be friendly and fun. Don’t discuss any personal things. <strong>NEVER COMPLAIN.</strong></dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">SAFTEY FIRST</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Stack with safety, pick up dropped items, attend to spills right away.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">CLEANLINESS</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">And organisation is your section shows. If you’re resetting systematically your section will look good. If you’re chaotic, your section will look like a mess.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">COMMUNICATE</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Any mistakes right away so there is a chance of solving the problem before it escalates.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">BE PROFESSIONAL</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">At all times. Hold a high standard of presentation, conversation. Be on high alert and be confident. We are not fine dining but we must be professional and service oriented.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">DO NOT</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">COMPLAIN IN FRONT OF GUESTS</dd>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">DISCUSS OR ASK PERSONAL THINGS</dd>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">MAKE INAPPROPRIATE JOKES OR INNUENDOS </dd>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">ACT A FOOL DURING SERVICE - THERE IS ALWAYS SOMEONE WATCHING!!!</dd>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">IGNORE DROPPED NAPKINS/CUTLERY/BREAKAGES/SPILLS</dd>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">IGNORE NEW GUESTS - GREET EVERYONE!</dd>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">IGNORE GUESTS IF THEY TRY TO MAKE EYE CONTACT</dd>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">IGNORE MISTAKES AND TRY TO HANDLE THE PROBLEM YOURSELF</dd>
                        </div>
                    </dl>
                </div>
            </dl>
            </div>
        </div>
    </div>

    <div className=" flex items-center justify-around text-teal-50 font-bold">

        <Link href="/priorities" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
            <TbPlayerTrackPrevFilled /> Priorities
        </Link>

        <Link href="/putting-orders-through" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
        Putting orders through <TbPlayerTrackNextFilled />
        </Link>

    </div>

    </>
  )
}

export default page
