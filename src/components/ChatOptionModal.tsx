import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { IChatOption } from "@/types/chatOption.type";
import { Textarea } from "./ui/textarea";
import { agents } from "@/data/Agents";
import AgentCard from "./AgentCard";
import { useState } from "react";

interface ChatOptionModalProps {
  children: React.ReactNode;
  option: IChatOption;
}

const ChatOptionModal = ({ children, option }: ChatOptionModalProps) => {
  const [selectedAgent, setSelectedAgent] = useState('')
  const [topic, setTopic] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle Next Button
  const handleNext = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <form>
          <DialogTrigger asChild>{children}</DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{option?.name}</DialogTitle>

              <DialogDescription>
                <p>Enter a topic to master your skills in {option.name}</p>
              </DialogDescription>

              <Textarea onChange={(e) => {
                setTopic(e.target.value)
              }}
                className="mt-5"
                placeholder="Type your topic here..."
              />

              <h3 className="text-xl text-left mt-6">Select Ai Agent</h3>
              <div className="grid grid-cols-3 gap-3">
                {agents.length > 0 &&
                  agents.map((agent, index) => {
                    return <div className={selectedAgent === agent.name ? 'border-2 rounded-md border-black' : ''} onClick={()=> {
                      setSelectedAgent(agent.name)
                    }} key={index}>
                      <AgentCard agent={agent} />
                    </div>
                  })}
              </div>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button disabled={!topic || !selectedAgent} onClick={handleNext}>Next</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default ChatOptionModal;
