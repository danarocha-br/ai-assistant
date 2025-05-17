"use client";

import { useState, FormEvent, useEffect } from "react";
import {
  Bot,
  Paperclip,
  Mic,
  CopyPlus,
  MoreVertical,
  Clock3,
  Send,
  List,
  User,
  Calendar,
  BarChart,
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
import { mockData, TalentItem, MessageItem } from "@/app/mock-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { cn } from "@workspace/ui/lib/utils";

const initialMessages = mockData.filter(message => message.type !== 'talent');
const talentMessages = mockData.filter((message): message is TalentItem => message.type === 'talent');

export function Chat() {
  const [messages, setMessages] = useState<(MessageItem | TalentItem)[]>(initialMessages);
  const [selectedTalents, setSelectedTalents] = useState<TalentItem[]>([]);
  let talentCardCount = 0;

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showTalentCards, setShowTalentCards] = useState(false);
  const [animatingTalentCards, setAnimatingTalentCards] = useState(false);

  // Effect to trigger animation when showTalentCards becomes true
  useEffect(() => {
    if (showTalentCards) {
      setAnimatingTalentCards(true);
      // Optional: set a timeout to reset animating state if needed
      // const timer = setTimeout(() => setAnimatingTalentCards(false), 500);
      // return () => clearTimeout(timer);
    } else {
      setAnimatingTalentCards(false);
    }
  }, [showTalentCards]);

  const handleTalentSelect = (talent: TalentItem) => {
    setSelectedTalents((prev) => {
      const exists = prev.find((t) => t.id === talent.id);
      if (exists) {
        // If talent is already selected, remove it and hide suggestions if no talents are left
        const newSelection = prev.filter((t) => t.id !== talent.id);
        if (newSelection.length === 0) {
          setShowSuggestions(false);
        }
        return newSelection;
      }
      // If talent is not selected, add it and show suggestions
      const newSelection = [...prev, talent];
      setShowSuggestions(true);
      return newSelection;
    });
  };

  const getTalentSuggestions = () => {
    if (selectedTalents.length === 0) return [];
    
    const suggestions = [];
    for (const talent of selectedTalents) {
      suggestions.push(
        {
          text: `View ${talent.content.name}'s full profile`,
          icon: <User className="size-4 text-muted-foreground" />,
          action: () => {
            setMessages((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                content: `Let me show you ${talent.content.name}'s complete profile.`,
                sender: "user",
              },
            ]);
            setShowSuggestions(false);
          }
        },
        {
          text: `Check ${talent.content.name}'s availability`,
          icon: <Calendar className="size-4 text-muted-foreground" />,
          action: () => {
            setMessages((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                content: `I'd like to check ${talent.content.name}'s availability for our campaign.`,
                sender: "user",
              },
            ]);
            setShowSuggestions(false);
          }
        },
        {
          text: `Analyze ${talent.content.name}'s performance`,
          icon: <BarChart className="size-4 text-muted-foreground" />,
          action: () => {
            setMessages((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                content: `Can you analyze ${talent.content.name}'s performance metrics?`,
                sender: "user",
              },
            ]);
            setShowSuggestions(false);
          }
        }
      );
    }
    return suggestions;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      content: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setShowTalentCards(false); // Hide talent cards when a new message is sent
    setSelectedTalents([]); // Clear selected talents
    setShowSuggestions(false); // Hide suggestions

    if (input.trim().toLowerCase() === "find recommendations") {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, content: "I'd be happy to help you find the perfect talent for this clean beauty skincare launch. Based on your requirements for creators who focus on sustainability, I have several recommendations:", sender: "ai" },
        ]);
        setIsLoading(false);
        setShowTalentCards(true); // Show talent cards
      }, 1000);
    } else {
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
    }
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
            {messages.map((message, index) => {
              // Render non-talent messages and AI responses in the main list
              if (message.type !== "talent") {
                return (
                  <ChatBubble
                    key={`message-${message.id}`}
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

            {/* Render talent cards separately when showTalentCards is true */}
            {showTalentCards && (
              <div className="flex flex-col gap-3">
                {talentMessages.map((talentMessage, index) => {
                  talentCardCount++;
                  // Limit to 3 talent cards for rendering purposes if needed, but render all for selection
                  if (talentCardCount <= 3) {
                    return (
                      <TalentCard
                        key={`talent-${talentMessage.id}`}
                        className={cn(
                          "ml-12 transition-all duration-500 ease-out",
                          animatingTalentCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                        talent={talentMessage.content}
                        onSelect={() => handleTalentSelect(talentMessage)}
                        isSelected={selectedTalents.some(t => t.id === talentMessage.id)}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            )}

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
            className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
          >
            <div className="flex justify-between items-center pr-2">
              <ChatInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
              />
                
                <Button type="submit" size="icon" disabled={!input} className="ml-auto size-9">
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

              <DropdownMenu open={showSuggestions} onOpenChange={setShowSuggestions}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    type="button"
                    className="hover:bg-primary-foreground text-xs"
                  >
                    <List className="size-4" /> Suggestions
                    {selectedTalents.length > 0 && (
                      <span className="ml-1 text-xs bg-primary text-primary-foreground rounded-full px-1.5">
                        {selectedTalents.length}
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" side="top" className="max-w-80 bg-popover">
                  {selectedTalents.length === 0 ? (
                    <div className="p-2 text-sm text-muted-foreground">
                      Select a talent to see suggestions
                    </div>
                  ) : (
                    getTalentSuggestions().map((suggestion, index) => (
                      <DropdownMenuItem
                        key={index}
                        onClick={suggestion.action}
                        className="flex items-center gap-2"
                      >
                        {suggestion.icon}
                        <span>{suggestion.text}</span>
                      </DropdownMenuItem>
                    ))
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </form>
        </ExpandableChatFooter>
      </ExpandableChat>
    </div>
  );
}
