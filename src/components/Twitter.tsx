import TwitterCommentIcon from '@/assets/images/TwitterCommentIcon'
import TwitterHeartIcon from '@/assets/images/TwitterHeartIcon'
import TwitterRetweetIcon from '@/assets/images/TwitterRetweetIcon'
import TwitterVerifiedIcon from '@/assets/images/TwitterVerifiedIcon'
import Image from 'next/image'

type TwitterProps = {
  text: JSX.Element | string
  id: string
  name: string
  author: string
  media: string
  created_at: string
  likes: string
  retweets: string
  comments: string
  image?: string
}

export default function Twitter({
  text,
  id,
  name,
  author,
  media,
  created_at,
  likes,
  retweets,
  comments,
  image,
}: TwitterProps) {
  const authorUrl = `https://twitter.com/${author}`
  const tweetUrl = `https://twitter.com/${author}/status/${id}`

  return (
    <div className="pr-2">
      <div className="w-full">
        <div className="px-6 py-4 my-4 bg-white border border-gray-300 rounded-xl">
          <div className="flex items-center">
            <a className="flex w-12 h-12" href={tweetUrl} target="_blank" rel="noopener noreferrer">
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
              href={tweetUrl}
              className="flex flex-col ml-2 author"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center font-bold leading-5 text-gray-900" title={name}>
                {name}
                <TwitterVerifiedIcon />
              </span>
              <span className="text-gray-500" title={author}>
                {' '}
                @{author}{' '}
              </span>
            </a>
            <a className="ml-auto" href={authorUrl} target="_blank" rel="noopener noreferrer">
              <svg
                viewBox="328 355 335 276"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A 65, 65 0 0 1 630, 425 Z"
                  fill="#3BA9EE"
                />
              </svg>
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
          <a
            className="text-sm text-gray-500 hover:underline"
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            {created_at}{' '}
          </a>
          <div className="flex mt-2 text-gray-700">
            <a
              className="flex items-center mr-4 text-gray-500 transition hover:text-blue-600 hover:underline"
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterCommentIcon />
              <span>{comments}</span>
            </a>
            <a
              className="flex items-center mr-4 text-gray-500 transition hover:text-green-600 hover:underline"
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterRetweetIcon />
              <span>{retweets}</span>
            </a>
            <a
              className="flex items-center text-gray-500 transition hover:text-red-600 hover:underline"
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterHeartIcon />
              <span>{likes}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
