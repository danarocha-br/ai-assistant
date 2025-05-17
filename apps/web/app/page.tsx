"use client";

import { useTheme } from "next-themes";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { Chat } from "../components/chat";
import { Bot, LayoutGrid, Sun, Moon } from "lucide-react";
import CardList from "./card-list";
import { LogoDanaRocha } from "@/components/logo-danarocha";

export default function Page() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="relative bg-gradient-to-bl from-blue-50 via-purple-50 to-orange-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-900 flex justify-center min-h-svh w-full">
     <LogoDanaRocha />
      <Tabs defaultValue="chat" className="w-full pt-6 flex items-center">
        <TabsList className="flex w-full w-60">
          <TabsTrigger value="chat">
            <Bot className="h-5 w-5" />
            Chat
          </TabsTrigger>
          <TabsTrigger value="list">
            <LayoutGrid className="h-5 w-5" /> List
          </TabsTrigger>
          <button
            className="flex items-center justify-center px-4 bg-muted h-full rounded-md"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>
        </TabsList>

        <TabsContent value="chat" className="w-full">
          <Chat />
        </TabsContent>
        <TabsContent value="list" className="w-full">
          <CardList />
        </TabsContent>
      </Tabs>
    </div>
  );
}
