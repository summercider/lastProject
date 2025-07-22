// 'use client';
// import { useMutation } from '@tanstack/react-query';
// import React, { useState } from 'react';

// interface Message {
//   sender: 'user' | 'AI';
//   text: string;
// }
// export default async function chatapi() {
//   const [chat, setChat] = useState(false); // 챗봇창
//   const [messages, setMessages] = useState<Message[]>([
//     { sender: 'AI', text: '안녕하세요! 무엇을 도와드릴까요?' },
//   ]);

//   const url = 'https://api.yjins-aws.com';

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ message: inpMsg.trim() }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     const aiMessage: Message = {
//       sender: 'AI',
//       text: data.response || '응답 없음',
//     };
//     setMessages((prev) => [aiMessage, ...prev]);
//   } catch (error) {
//     console.error('Error:', error);
//     setMessages((prev) => [
//       { sender: 'AI', text: '오류가 발생했어요. 다시 시도해 주세요.' },
//       ...prev,
//     ]);
//   }

//   // tanstack 쓰기

//   return <div>{data.text}</div>;
// }
