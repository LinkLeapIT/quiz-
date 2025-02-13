import Link from 'next/link'
import React from 'react'
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";

const page = () => {
  return (
    <>

    <div className="bg-white py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Putting orders through</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                The way you put an order through dictates how good of a dining experience our guests get.
                <br/> <br/>
                If there’s too much food on the table, things are going to get cold.
                <br/> <br/>
                If there’s not enough food on the table, guests might still be hungry.
                <br/> <br/>
                The menu is designed for small plates to be eaten together, then broken up with a hot entree or pasta before the mains roll through.
                <br/> <br/>
                We discourage “bring all together” dining, while it might seem like a good idea for the guest (for example, a family that wants food all together), this is not our style of dining. Because of our shared concept, it is recommended that small/entrees come out first, followed by a bigger entree, followed by mains and then desserts.
                <br/> <br/>
                Orders need to be put through in COURSES, dictating a good flow of food, so there’s always something at the table. Don’t forget to call your courses away so the guests isn’t waiting for too long without food.
            </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                <div className="relative sm:pl-5 lg:pl-16">
                    <dt className="text-base font-bold leading-7 text-teal-600">
                        Here’s how the orders need to be put through in terms of priority: 
                    </dt>
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">SNACKS</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Zucchini flowers, intercostal, scallops, gildas, etc.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">RAWS</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Oysters, sashimi, tartare</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">SMALL PLATES</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Breads, antipasto</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">ENTREES</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Calamari, octopus, pastas</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">MAINS</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Any mains and sides</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-bold leading-6 text-gray-900">DESSERTS</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Any desserts</dd>
                        </div>
                    </dl>
                </div>
            </dl>
            </div>
        </div>
    </div>

    <div className=" flex items-center justify-around text-teal-50 font-bold">

        <Link href="/service-guide" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
            <TbPlayerTrackPrevFilled /> Service guide
        </Link>

        <Link href="/quiz" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
            Start Quiz <TbPlayerTrackNextFilled />
        </Link>

    </div>

    </>
  )
}

export default page
