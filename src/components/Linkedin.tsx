import ClappingHandsIcon from '@/assets/images/ClappingHandsIcon'
import HeartIcon from '@/assets/images/HeartIcon'
import LinkedinIcon from '@/assets/images/LinkedinIcon'
import ThumbsUpIcon from '@/assets/images/ThumbsUpIcon'
import Image from 'next/image'

type LinkedinProps = {
  text: JSX.Element | string
  name: string
  author: string
  media: string
  created_at: string
  likes: string
  comments: string
  image?: string
  postUrl?: string
}

export default function Linkedin({
  text,
  name,
  author,
  media,
  created_at,
  likes,
  comments,
  image,
  postUrl,
}: LinkedinProps) {
  const authorUrl = `https://www.linkedin.com/in/${author}`
  return (
    <div className="pr-2">
      <div className="w-full">
        <div className="px-6 py-4 my-4 bg-white border border-gray-300 rounded-xl">
          <div className="flex items-center">
            <a className="flex w-12 h-12" href={postUrl} target="_blank" rel="noopener noreferrer">
              <Image
                width="400"
                height="400"
                objectFit="scale-down"
                alt=""
                src={media}
                className="rounded-full"
              />
            </a>
            <a
              href={postUrl}
              className="flex flex-col ml-2 author"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center font-bold leading-5 text-gray-900" title={name}>
                {name}
              </span>
              <span className="text-gray-500" title={author}>
                @{author}
              </span>
              <span className="text-gray-500">{created_at}</span>
            </a>
            <a
              className="ml-auto self-baseline"
              href={authorUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
          </div>
          <div className="mt-2 mb-2 text-base text-black whitespace-pre-wrap">
            {text}
            {image && (
              <Image
                alt=""
                width="400"
                height="240"
                objectPosition="top"
                layout="responsive"
                objectFit="cover"
                className="mt-2 rounded-xl max-h-60"
                src={image}
              />
            )}
          </div>
          <div className="flex items-center mt-2 text-gray-700">
            <a
              className="flex items-center text-gray-500 transition hover:text-red-600 hover:underline mr-1"
              href={postUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ThumbsUpIcon />
              <ClappingHandsIcon />
              <HeartIcon />
              <span>{likes}</span>
            </a>
            <span className="like-separator"></span>
            <a
              className="flex items-center mr-4 text-gray-500 transition hover:text-blue-600 hover:underline"
              href={postUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{comments} Comments</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
