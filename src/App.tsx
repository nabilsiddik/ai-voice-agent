import "./App.css";
import ChatOptionModal from "./components/ChatOptionModal";
import OptionCard from "./components/OptionCard";
import { chatOptions } from "./data/chatOptions";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-center gap-10">
        {chatOptions.length > 0 &&
          chatOptions.map((option, index) => {
            return (
              <ChatOptionModal key={index} option={option}>
                <div role="button" tabIndex={0}>
                  <OptionCard option={option} />
                </div>
              </ChatOptionModal>
            );
          })}
      </div>
    </>
  );
}

export default App;
