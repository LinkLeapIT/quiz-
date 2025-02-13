import Link from "next/link";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";

const Page = () => {
    return (
        <>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SHIFTS AND ROSTERS</p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                        <div className="relative sm:pl-5 lg:pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                            SHIFTS
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                            You are expected to come in 10 minutes before your shift to have enough time to get ready, have a coffee and say hi to your team. If you arrive on time or even 2 minutes after - you’re late! <br/> <br/>

                            If you are going to be late for a good reason, communicate with management why so they can make adjustments. It is bad practice just to rock up late without notice. <br/> <br/>

                            Once you arrive, sign on to your shift with the small iPad, click on your name, snap a photo and start working! If this is your first shift, please ask management how to get your Deputy code if you don’t have it already. <br/> <br/>

                            Use the ipad to sign on to your breaks and sign off. You can also write any messages in the message box (for example, if you started earlier or later etc.) <br/> <br/>

                            It’s important that you sign on and off on the ipad on every shift.

                            </dd>
                        </div>
                        <div className="relative sm:pl-5 lg:pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                            ROSTERS
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                            Rosters come out on Wednesday/Thursday for the week after. Make sure your availabilities are always updated on Deputy. <br/> <br/>

                            <strong>IF IT’S NOT ON DEPUTY - IT DOESN’T EXIST!</strong> <br/> <br/>

                            Phone calls, emails, texts, and verbal notifications of availability are not considered - it is your responsibility to make sure your availabilities are updated before the roster is published. <br/> <br/> 

                            To add leave on Deputy, on your app, select “leave” and select the dates and the days you can’t work, be as specific as possible. If you intend to go for more than 4-5 days, please give management at last a week’s notice. <br/> <br/>

                            Once the roster is published, if you can’t make a shift, you have to organise a replacement yourself. The replacement has to be of equal or higher skill. Call your teammates and ask them to replace your shift, texts are impersonal and might get buried under other things, plus people tend to ignore them. <br/> <br/>

                            If you find a suitable replacement, confirm with management first to approve the swap. <br/> <br/>

                            While we appreciate that getting sick happens, calling in sick a few hours or right before your shift sets the whole team back. No shows are not tolerated!

                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

        <div className=" flex items-center justify-around text-teal-50 font-bold">

            <Link href="/introduction" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
                <TbPlayerTrackPrevFilled /> Introduction
            </Link>

            <Link href="/team-essentials" className='flex items-center justify-center gap-2 bg-teal-600 px-2 py-2 rounded-md hover:bg-teal-700 hover:text-teal-100 duration-200'>
                Team essentials <TbPlayerTrackNextFilled />
            </Link>

        </div>
        </>
    );
}

export default Page;
