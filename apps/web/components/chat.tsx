"use client";

import { useState, FormEvent } from "react";
import {
  Bot,
  Paperclip,
  Mic,
  CornerDownLeft,
  CopyPlus,
  MoreVertical,
  Clock3,
  Send,
  List,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@workspace/ui/components/chat-bubble";
import { ChatInput } from "@workspace/ui/components/chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@workspace/ui/components/expandable-chat";
import { ChatMessageList } from "@workspace/ui/components/chat-message-list";
import { TalentCard } from "@workspace/ui/components/talent-card";
import { mockData } from "@/app/mock-data";

export function Chat() {
  const [messages, setMessages] = useState(mockData);
  let talentCardCount = 0; // Initialize counter

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: input,
        sender: "user",
      },
    ]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: "This is an AI response to your message.",
          sender: "ai",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const handleAttachFile = () => {
    //
  };

  const handleMicrophoneClick = () => {
    //
  };

  return (
    <div className="h-[600px] relative">
      <ExpandableChat
        position="bottom-right"
        icon={<Bot className="h-5 w-5" />}
      >
        <ExpandableChatHeader>
          <Button variant="ghost" size="icon">
            <CopyPlus />
          </Button>
          <h1 className="font-medium ml-10">Foam Assistant</h1>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon">
              <Clock3 />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical />
            </Button>
          </div>
        </ExpandableChatHeader>

        <ExpandableChatBody>
          <ChatMessageList>
            {messages.map((message) => {
              if (message.type === "talent" && talentCardCount < 3) {
                talentCardCount++;
                return (
                  <TalentCard
                    key={message.id}
                    className="ml-12"
                    talent={message.content}
                  />
                );
              } else if (message.type !== "talent") {
                return (
                  <ChatBubble
                    key={message.id}
                    variant={message.sender === "user" ? "sent" : "received"}
                  >
                    <ChatBubbleAvatar
                      isUser={message.sender === "user"}
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop"
                      fallback={message.sender === "user" ? "US" : "AI"}
                    />
                    <ChatBubbleMessage
                      variant={message.sender === "user" ? "sent" : "received"}
                    >
                      {typeof message.content === "string"
                        ? message.content
                        : ""}
                    </ChatBubbleMessage>
                  </ChatBubble>
                );
              }
              return null;
            })}

            {isLoading && (
              <ChatBubble variant="received">
                <ChatBubbleAvatar
                  className="h-8 w-8 shrink-0"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                  fallback="AI"
                />
                <ChatBubbleMessage isLoading />
              </ChatBubble>
            )}
          </ChatMessageList>
        </ExpandableChatBody>

        <ExpandableChatFooter>
          <form
            onSubmit={handleSubmit}
            className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring "
          >
            <div className="flex justify-between items-center pr-2">
              <ChatInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <Button type="submit" size="icon" className="ml-auto size-9">
                <Send className="size-4" />
              </Button>
            </div>
            <div className="flex items-center px-3 py-px gap-2 bg-muted border-t rounded-b-md">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                className="hover:bg-primary-foreground"
                onClick={handleAttachFile}
              >
                <Paperclip className="size-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                type="button"
                className="hover:bg-primary-foreground"
                onClick={handleMicrophoneClick}
              >
                <Mic className="size-4" />
              </Button>

              <Button
                variant="ghost"
                type="button"
                className="hover:bg-primary-foreground text-xs"
                onClick={handleMicrophoneClick}
              >
                <List className="size-4" /> Suggestions
              </Button>
            </div>
          </form>
        </ExpandableChatFooter>
      </ExpandableChat>
    </div>
  );
}
