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

interface ChatOptionModalProps {
  children: React.ReactNode;
  option: IChatOption;
}

const ChatOptionModal = ({ children, option }: ChatOptionModalProps) => {
  console.log(option);
  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>{children}</DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{option?.name}</DialogTitle>

              <DialogDescription>
                <p>Enter a topic to master your skills in {option.name}</p>
              </DialogDescription>

              <Textarea
                className="mt-5"
                placeholder="Type your message here."
              />

              <h3 className="text-xl text-left mt-6">Select Ai Agent</h3>
              <div className="grid grid-cols-3 gap-3">
                {agents.length > 0 &&
                  agents.map((agent, index) => {
                    return <AgentCard key={index} agent={agent} />;
                  })}
              </div>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default ChatOptionModal;
