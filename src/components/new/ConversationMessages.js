import DemoPageStatusbar from "components/DemoPageStatusbar";
import DemoPageUserbar from "components/DemoPageUserbar";
import React, { useState } from "react";
import { Button, Img, Input, Text } from "components";
import DemoPageRowtail from "components/DemoPageRowtail";
import DemoPageColumnexplainone from "components/DemoPageColumnexplainone";
import apiCalls from "apiCalls";
import ReplySmsGrey from "components/DemoPageRowtail";
import PromptSmsBlue from "./PromptSmsBlue";

const ConversationMessages = ({ messagesList }) => {
  const [typedMessage, setTypedMessage] = useState("");
  const [msgSent, setMsgSent] = useState(false);

  const handleNewMessage = async (e) => {
    e.preventDefault();

    const request = {
      conversationId: "a28f2790-299d-46bc-a325-2260d48f5c71",
      messageContent: typedMessage,
    };

    const response = await apiCalls.sendMessage(request);
    console.log(response);
    setMsgSent(true);
  };

  return (
    <div className="flex flex-col gap-2.5 items-center justify-start mt-3.5 p-2.5 w-[367px]">
      {messagesList.map((message, index) => (
        <>
          {message.isReceived ? (
            <div
              key={index}
              className="flex flex-col items-start justify-end pl-2.5 w-full"
            >
              <PromptSmsBlue
                key={index}
                messagetext={message.messageContent}
                className="flex flex-row items-end justify-start w-[255px]"
              />
            </div>
          ) : (
            <div
              key={index}
              className="flex flex-col items-start justify-end pl-2.5 w-full"
            >
              <ReplySmsGrey
                key={index}
                messagetext={message.messageContent}
                className="flex flex-row items-end justify-start w-[255px]"
              />
            </div>
          )}
        </>
      ))}

      {msgSent && (
        <div className="flex flex-col items-center justify-end w-[366px]">
          <div className="bg-blue-A200 flex flex-col h-[100px] md:h-auto items-end justify-start px-3 py-1.5 rounded-[18px] w-[242px]">
            <Text
              className="leading-[22.00px] max-w-[218px] md:max-w-full text-[17px] text-white-A700 tracking-[-0.41px]"
              size="txtPoppinsRegular17"
            >
              {typedMessage}
            </Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationMessages;
