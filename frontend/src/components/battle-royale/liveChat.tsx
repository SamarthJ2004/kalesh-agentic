"use client";
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useParams } from "next/navigation";
import dotenv from "dotenv";
dotenv.config();

const socket = io(
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3001"
);

interface Message {
  userId: string;
  text: string;
}

export default function LiveChat() {
  const { id: roomId } = useParams();
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [uuid, setUuid] = useState("");

  useEffect(() => {
    import("uuid").then(({ v4 }) => {
      setUuid(v4().slice(0, 4));
    });

    if (roomId) {
      socket.emit("join_room", roomId);
      socket.on("prev_msgs", (history: Message[]) => setMessages(history));
      socket.on("receive_message", (msg: Message) => {
        setMessages((prev) => [...prev, msg]);
      });
    }

    return () => {
      socket.off("prev_msgs");
      socket.off("receive_message");
    };
  }, [roomId]);

  const send = () => {
    if (chat.trim() !== "") {
      const newMessage = { roomId, userId: uuid, text: chat.trim() };
      socket.emit("send_message", newMessage);
      setChat("");
    }
  };

  return (
    <aside className="h-[92vh] fixed top-16 right-0 border border-gray-700 overflow-hidden flex flex-col">
      <div className="bg-red-600 p-4 font-bold text-black text-center">
        LIVE CHAT ROOM {roomId}
      </div>

      <div className="flex-1 p-3 space-y-2 bg-gray-100 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-auto h-auto rounded-l bg-blue-100 p-2">
              {msg.userId}:
            </div>
            <div className="p-2.5 bg-gray-200 rounded-3xl px-4">{msg.text}</div>
          </div>
        ))}
      </div>

      <div className="p-3 flex bg-gray-300">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 pl-6 bg-gray-200 rounded-full outline-none p-2.5"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full"
          onClick={send}
        >
          Send
        </button>
      </div>
    </aside>
  );
}
