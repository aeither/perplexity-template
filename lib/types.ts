type Role = "user" | "assistant";

// Define a type for an individual message
interface Message {
  role: Role;
  content: string;
}

// Define a type for a collection of messages
export interface MessageThread {
  messages: Message[];
}
