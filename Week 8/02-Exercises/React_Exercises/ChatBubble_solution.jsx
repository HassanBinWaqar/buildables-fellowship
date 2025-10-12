import React from 'react';

export default function ChatBubble({ text, isOwn }) {
  const base = 'max-w-xs p-2 rounded-md break-words';
  return (
    <div className={'flex ' + (isOwn ? 'justify-end' : 'justify-start')}>
      <div className={base + ' ' + (isOwn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900')}>
        {text}
      </div>
    </div>
  );
}
