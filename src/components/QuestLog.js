import { useState } from "react"
import Quest from "./Quest"
import QuestList from "./QuestList"

export default function QuestLog() {
    const [selectedQuest, setSelectedQuest] = useState(null);

    return (
        <div className="grid grid-cols-3">

            <QuestList
                selectedQuest={selectedQuest}
                setSelectedQuest={setSelectedQuest} />
            <Quest quest={selectedQuest} />
        </div>
    )
}