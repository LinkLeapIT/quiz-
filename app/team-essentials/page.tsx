import Link from 'next/link'
import React from 'react'
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";

const page = () => {
  return (
    <>
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Team Essentials</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                UNIFORMS
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    Uniforms must be worn at all times. There are two uniforms at MISC. depending on where you are working: Restaurant or Events.
                    <br/><br/>
                    Uniforms must be clean and pressed, shoes clean as well. A high standard of personal presentation is also required.
                    <br/><br/>
                    Those with dirty or unpressed uniforms will be sent home!
                    <br/><br/>
                    When you work at MISC., you will pay a $50 deposit for ONE uniform set. If you require more sets to keep up with your shifts, they can be purchased at $50 each. Your deposit/s will be returned IF you return your uniforms in a good condition.
                </dd>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                VIBES!
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    Your high vibes are needed on every shift! Bring your A game in, your smile, your positivity, your teamwork and can do attitude!
                    <br/><br/>
                    A happy team is an efficient team, use work as an escape from the outside world, consider yourself an actor in a show, and bring your positive attitude at all times!
                    <br/> <br/>
                    When you arrive on shift, greet all your teammates, including those in the kitchen. Get to know your team!
                </dd>
                </div>
                <div className="relative sm:pl-5 lg:pl-16">
                <dt className="text-base font-bold leading-7 text-teal-600">
                FLOOR PLAN/CARRYING 3 PLATES/CARRYING TRAYS
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                    You are expected to know the floor plan after your first shift. Floor plans are located around the venue and also on the POS screens. You are also expected to carry 3 plates at then end of your first week and be skillful with the tray. Spend as much time practicing these basics.
                </dd>
                </div>
            </dl>
            </div>
        </div>
    </div>

    <div className=" flex items-center justify-around text-teal-50 font-bold">

        <Link href="/shifts-rosters" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
            <TbPlayerTrackPrevFilled /> Shifts & rosters
        </Link>

        <Link href="/sequence-of-service" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
        Sequence of service <TbPlayerTrackNextFilled />
        </Link>

    </div>
    </>
  )
}

export default page
