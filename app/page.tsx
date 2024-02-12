"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useChat } from "ai/react";
import { AlignLeft } from "lucide-react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-md py-4 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="flex flex-row mt-10 items-center gap-2">
        <AlignLeft className=""></AlignLeft>
        <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Answer
        </h2>
      </div>
      {messages.map((m) => (
        <div key={m.id} className="break-words">
          <span className="font-bold">
            {m.role === "user" ? "User: " : "AI: "}
          </span>
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex items-center w-full justify-center">
          <div className="flex flex-row fixed w-full max-w-md bottom-0 border border-gray-300 rounded shadow-xl p-2 gap-2">
            <Label htmlFor="messageInput" className="sr-only">
              Ask anything...
            </Label>
            <Input
              id="messageInput"
              type="text"
              className="flex-grow"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask anything..."
            />
            <Button type="submit" className="rounded-full flex-1">
              Send
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
