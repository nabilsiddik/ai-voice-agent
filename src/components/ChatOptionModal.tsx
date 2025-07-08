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
import type { IChatOption } from "@/types/chatOption.type";
import { Textarea } from "./ui/textarea";
import AgentCard from "./AgentCard";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { agents } from "@/data/agents";

interface ChatOptionModalProps {
  children: React.ReactNode;
  option: IChatOption;
}

const ChatOptionModal = ({ children, option }: ChatOptionModalProps) => {
  const [selectedAgent, setSelectedAgent] = useState("");
  const [topicDetails, setTopicDetails] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navitage = useNavigate();

  // Handle Next Button
  const handleNext = async () => {
    try {
      const discussion = {
        topicName: option?.name,
        topicDetails: topicDetails,
        agent: selectedAgent,
      };

      // Create Discussion room in database
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URI}/discussion-rooms`,
        discussion
      );

      if (data.success) {
        setIsModalOpen(false);
        navitage(`/discussion-room/${data?.data?._id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <form>
          <DialogTrigger asChild>{children}</DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{option?.name}</DialogTitle>

              <DialogDescription>
                Enter a topic to master your skills in {option.name}
              </DialogDescription>

              <Textarea
                onChange={(e) => {
                  setTopicDetails(e.target.value);
                }}
                className="mt-5"
                placeholder="Type your topic here..."
              />

              <h3 className="text-xl text-left mt-6">Select Ai Agent</h3>
              <div className="grid grid-cols-3 gap-3">
                {agents.length > 0 &&
                  agents.map((agent, index) => {
                    return (
                      <div
                        className={
                          selectedAgent === agent.name
                            ? "border-2 rounded-md border-black"
                            : ""
                        }
                        onClick={() => {
                          setSelectedAgent(agent.name);
                        }}
                        key={index}
                      >
                        <AgentCard agent={agent} />
                      </div>
                    );
                  })}
              </div>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                disabled={!setTopicDetails || !selectedAgent}
                onClick={handleNext}
              >
                Next
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default ChatOptionModal;
