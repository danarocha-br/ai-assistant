import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { Chat } from "../components/chat";
import { Bot, LayoutGrid } from "lucide-react";
import CardList from "./card-list";

export default function Page() {
  return (
    <div className="relative bg-gradient-to-bl from-blue-50 via-purple-50 to-orange-50 flex justify-center min-h-svh w-full">
      <Tabs defaultValue="chat" className="w-full pt-6 flex items-center">
        <TabsList className="grid w-full grid-cols-2 w-60">
          <TabsTrigger value="chat">
            <Bot className="h-5 w-5" />
            Chat
          </TabsTrigger>
          <TabsTrigger value="list">
            <LayoutGrid className="h-5 w-5" /> List
          </TabsTrigger>
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
