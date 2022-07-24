import { useState } from "react"
import Quest from "./Quest"
import QuestList from "./QuestList"

export default function QuestLog() {
    const [selectedQuest, setSelectedQuest] = useState(null);

    return (
        <div className="flex">

            <QuestList
                selectedQuest={selectedQuest}
                setSelectedQuest={setSelectedQuest} />
            <Quest quest={selectedQuest} />
        </div>
    )
}