"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-md py-24 px-4 sm:px-6 lg:px-8 flex flex-col">
      {messages.map((m) => (
        <div key={m.id} className="break-words">
          <span className="font-bold">
            {m.role === "user" ? "User: " : "AI: "}
          </span>
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex items-center w-full">
          <div className="flex flex-col fixed inset-x-0  max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2">
            <Label htmlFor="messageInput" className="sr-only">
              Ask anything...
            </Label>
            <Input
              id="messageInput"
              type="text"
              className=""
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
