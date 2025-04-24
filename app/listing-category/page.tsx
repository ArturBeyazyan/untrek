'use client'
import { useRouter } from 'next/router'
import { businessdirectoryItem } from '@/app/models/selectItems' // change path
import {  useMemo } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
const Page = () => {
  const params = useParams()
  const path = params?.path // t
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const data = useMemo(() => {
    if (!id || typeof id !== 'string') return []

    if (path === 'business-directory') {
      return businessdirectoryItem.filter((item) => item.id === id)
    }
    
    return []
  }, [path, id])
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="font-bold mb-2">{path}</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id} className="py-1">{item.label}</li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-4">
        <h1>{id}page</h1>
      </main>
    </div>
  )
}

export default Page
