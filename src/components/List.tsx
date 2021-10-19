import Image from 'next/image'
import { Board } from '@/libs/Data/Board'

export default function List({ items }: { items: typeof Board }) {
  return (
    <div className="overflow-hidden sm:rounded-xl">
      <ul role="list" className="divide-y divide-white">
        {items.map((item) => (
          <li key={item.name} className="px-4 py-4 sm:px-6">
            <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
              <div className="overflow-hidden aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4 rounded-xl">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="5px 20%"
                />
              </div>
              <div className="sm:col-span-2">
                <div className="">
                  <div className="space-y-1">
                    <h3>{item.name}</h3>
                    <p className="text-blue-400">{item.role}</p>
                  </div>
                  <div className="text-lg">
                    <p className="text-gray-50">{item.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
