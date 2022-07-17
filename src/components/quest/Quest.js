export default function Quest() {
    return (
        <div className="Quest">
            <div className="QuestHeader">
                <h1>Setup controller for listing tasks</h1>
            </div>
            <div className="QuestRequirements">
                <h2>Requirements</h2>
                <ul>
                    <li>Ruby neophyte</li>
                    <li>Rails neophyte</li>
                </ul>
            </div>
            <div className="QuestDescription">
                <h2>Description</h2>
                <p>The new guy who joins our conversation has been successful for a longer time, though. He runs a podcast I’ve heard of, and a lady next to me says “Oh I haven’t seen you since Jerry’s wedding in the south of Italy”. I ask him how he got where he is, and he says well, he actually is in real estate, and this is where he makes most of his money, and that’s how he throws these parties. Oh, this party is his party. I pry further, and he says he got into real estate after spending a few years working in finance on Wall Street.</p>
                <p>How do you even get into finance?</p>
            </div>
            <div className="QuestObjectives">
                <h2>Objectives</h2>
                <ul>
                    <li>Create route</li>
                    <li>Create controller</li>
                    <li>Write index action</li>
                </ul>
            </div>
            <div className="QuestRewards">
                <h2>Rewards</h2>
                <ul>
                    <li>Ruby XP +1</li>
                    <li>Rails XP +1</li>
                </ul>
            </div>
            <div className="QuestActions">
                <button>Accept</button>
                <button>Question</button>
            </div>
        </div>
    )
}