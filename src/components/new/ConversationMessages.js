import DemoPageStatusbar from "components/DemoPageStatusbar";
import DemoPageUserbar from "components/DemoPageUserbar";
import React, { useState, useEffect } from "react";
import { Button, Img, Input, Text } from "components";
import DemoPageRowtail from "components/DemoPageRowtail";
import DemoPageColumnexplainone from "components/DemoPageColumnexplainone";
import apiCalls from "apiCalls";
import ReplySmsGrey from "components/DemoPageRowtail";
import PromptSmsBlue from "./PromptSmsBlue";

const ConversationMessages = ({ showStatic, messagesList }) => {
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const [msgSent, setMsgSent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowComponent1(true), 4000);
    setTimeout(() => setShowComponent2(true), 8000);
  }, [showStatic]);

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
          {showStatic && (
            <>
            {showComponent1 && (
              <>
                <div className="flex flex-col items-start justify-end pl-2.5 w-full">
                  <ReplySmsGrey
                    key={index}
                    messagetext={
                      "TelecomGPT received your message. Generating a response..."
                    }
                    className="flex flex-row items-end justify-start w-[255px]"
                  />
                </div>
              </>
            )}
            {showComponent2 && (
              <>
                <div className="flex flex-col items-start justify-end pl-2.5 w-full">
                  <ReplySmsGrey
                    key={index}
                    messagetext={
                      "Thank you for using the AI-powered SMS service from you telecom provide. Your prompt have been processed and this is a reply to your request. -Powered by TelecomGPT-"
                    }
                    className="flex flex-row items-end justify-start w-[255px]"
                  />
                </div>
              </>
            )}
            </>
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
