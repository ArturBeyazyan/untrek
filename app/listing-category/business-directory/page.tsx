"use client";
import { useRouter } from "next/router";
import { businessdirectoryItem } from "../../models/selectItems";
 import { useSearchParams } from 'next/navigation';
export default function Business() {
 

  const router = useSearchParams();
  const id = router.get('id');

  const selectedItems = businessdirectoryItem.filter(item => item.id === id)
  return (
    <div className="Home">
      
      <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        {businessdirectoryItem.map((item) => (
          <div
            key={item.id}
            onClick={() => router.get(`/listing-category/${item.path}?id=${item.id}`)}
            className={`cursor-pointer mb-2 ${
              item.id === id ? 'font-bold text-purple-700' : ''
            }`}
          >
            {item.label}
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-semibold mb-4">{id}</h1>
        {selectedItems.length > 0 ? (
          <div>Here are the items for: <strong>{selectedItems[0].label}</strong></div>
        ) : (
          <div>Select a category from the left.</div>
        )}
      </main>
    </div>
    </div>
  );
}
