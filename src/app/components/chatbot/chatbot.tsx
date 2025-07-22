'use client';
import React, { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'AI', text: '안녕하세요! 무엇을 도와드릴까요?' },
  ]);
  const [inpMsg, setInpMsg] = useState('');

  // 제출하면 fetch
  const url = `${process.env.NEXT_PUBLIC_API_URL}/chat`;
  const handleSendMessage = async (
    e?: React.FormEvent<HTMLFormElement> | React.MouseEvent
  ) => {
    e?.preventDefault();

    if (!inpMsg.trim()) {
      alert('질문 내용이 없습니다.');
      return;
    }

    setMessages((prev) => [{ sender: 'user', text: inpMsg }, ...prev]);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inpMsg.trim() }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const aiMessage = { sender: 'AI', text: data.response || '응답 없음' };
      setMessages((prev) => [aiMessage, ...prev]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        { sender: 'AI', text: '오류가 발생했어요. 다시 시도해 주세요.' },
        ...prev,
      ]);
    }

    setInpMsg('');
  };

  return (
    <div>
      {/* 화면 */}
      <div className="flex flex-col-reverse gap-[8px] overflow-y-auto flex-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] p-[10px] rounded-[10px] text-[14px] break-keep 
                        ${
                          msg.sender === 'user'
                            ? 'bg-point1 text-white'
                            : 'bg-white text-black'
                        }`}
            >
              <p className="text-[10px] text-[#959596] mb-[5px] font-semibold">
                {msg.sender === 'user' ? '나' : 'AI'}
              </p>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* 입력 */}
      <div>
        <form onSubmit={handleSendMessage} className="flex">
          <input
            value={inpMsg}
            onChange={(e) => setInpMsg(e.target.value)}
            className="border-1 border-point1 w-full bottom-0 placeholder:text-center mt-[20px] placeholder:text-[#fff] text-[#fff] "
            placeholder="질문을 입력하세요"
          />
        </form>
        <button
          onClick={handleSendMessage}
          className=" border-1 block  bg-point1 border-point1 p-0 text-[12px] text-[#fff] w-full"
        >
          전송
        </button>
      </div>
    </div>
  );
}
