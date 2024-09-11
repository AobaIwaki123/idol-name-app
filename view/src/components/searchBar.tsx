"use client";

import React, { useState } from 'react';

type Item = {
  id: number;
  name: string;
};

const SearchBar: React.FC = () => {
  // サンプルデータ
  const items: Item[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Grapes' },
  ];

  // 検索キーワードの状態
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // 検索キーワードに基づくフィルタリング
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // 入力を状態に反映
      />

      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
