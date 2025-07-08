import type { IAgent } from "@/types/agent.type"

interface AgentsCardProps{
    agent: IAgent
}

const AgentCard = ({agent}: AgentsCardProps) => {
  return (
    <div className="p-5 border rounded-md cursor-pointer">
      <img className="w-[50px] mx-auto" src={agent?.avatar} alt="icon" />
      <h3 className="text-lg font-bold">{agent?.name}</h3>
    </div>
  )
}

export default AgentCard
