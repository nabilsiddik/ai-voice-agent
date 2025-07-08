import type { IChatOption } from "@/types/chatOption.type"

interface OptionCardProps{
    option: IChatOption
}

const OptionCard = ({option}: OptionCardProps) => {
  return (
    <div className="p-5 border rounded-md bg-amber-600 text-white cursor-pointer">
      <img className="w-[50px] mx-auto" src={option?.icon} alt="icon" />
      <h3 className="text-lg font-bold">{option?.name}</h3>
    </div>
  )
}

export default OptionCard
