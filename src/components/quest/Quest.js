export default function Quest() {
    return (
        <div className="flex flex-col p-4 text-white col-span-2">
            <div className="text-4xl text-center mb-12 font-bold">
                <h1>Setup controller for listing tasks</h1>
            </div>
            <div className="my-5">
                <h2 className="text-3xl font-semibold">Requirements</h2>
                <ul className="py-3 pl-5">
                    <li>Ruby neophyte</li>
                    <li>Rails neophyte</li>
                </ul>
            </div>
            <div className="my-5">
                <h2 className="text-3xl font-semibold">Description</h2>
                <div className="mt-2 text-justify">
                    <p>The new guy who joins our conversation has been successful for a longer time, though. He runs a podcast I’ve heard of, and a lady next to me says “Oh I haven’t seen you since Jerry’s wedding in the south of Italy”. I ask him how he got where he is, and he says well, he actually is in real estate, and this is where he makes most of his money, and that’s how he throws these parties. Oh, this party is his party. I pry further, and he says he got into real estate after spending a few years working in finance on Wall Street.</p>
                    <p>How do you even get into finance?</p>
                </div>
            </div>
            <div className="my-5">
                <h2 className="text-3xl font-semibold">Objectives</h2>
                <ul className="py-3 pl-5">
                    <li>Create route</li>
                    <li>Create controller</li>
                    <li>Write index action</li>
                </ul>
            </div>
            <div className="my-5">
                <h2 className="text-3xl font-semibold">Rewards</h2>
                <ul className="py-3 pl-5">
                    <li>Ruby XP +1</li>
                    <li>Rails XP +1</li>
                </ul>
            </div>
            <div className="flex gap-x-7">
                <button className="rounded-lg bg-indigo-500 py-3 px-7 shadow-md ring-2 ring-white">Accept</button>
                <button className="rounded-lg bg-indigo-500 py-3 px-7 shadow-md ring-2 ring-white">Make a question</button>
            </div>
        </div>
    )
}