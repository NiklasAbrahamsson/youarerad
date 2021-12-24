import Image from 'next/image'

type LinkedinProps = {
  text: JSX.Element | string
  id: string
  name: string
  author: string
  media: string
  created_at: string
  likes: string
  comments: string
  image?: string
}

export default function Linkedin({
  text,
  id,
  name,
  author,
  media,
  created_at,
  likes,
  comments,
  image,
}: LinkedinProps) {
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
              </span>
              <span className="text-gray-500" title={author}>
                @{author}
              </span>
              <span className="text-gray-500">
                {created_at}
              </span>
            </a>
            <a className="ml-auto" href={authorUrl} target="_blank" rel="noopener noreferrer">
              <svg
                viewBox="0 0 64 64"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z"
                  fill="#0666C2"
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
          <div className="flex mt-2 text-gray-700">
            <a
              className="flex items-center text-gray-500 transition hover:text-red-600 hover:underline mr-1"
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <g id="Like_16_NO_Ring_Consumption" fill="none" fillRule="evenodd">
                  <circle fill="#1485BD" cx="8" cy="8" r="7" />
                  <path d="M11.93 7.25h-.55c-.05 0-.15-.19-.4-.46-.37-.4-.78-.91-1.07-1.19a7.18 7.18 0 0 1-1.73-2.24c-.24-.51-.26-.74-.75-.74a.77.77 0 0 0-.67.81c0 .14.07.63.1.8a7.62 7.62 0 0 0 1 2.2h.54-4.28a.87.87 0 0 0-.88.94.91.91 0 0 0 .93.85h.16a.78.78 0 0 0-.76.8.81.81 0 0 0 .74.8.8.8 0 0 0 .33 1.42.79.79 0 0 0-.09.55.86.86 0 0 0 .85.63h2.29c.3 0 .599-.038.89-.11l1.42-.42h1.9c1.02-.04 1.29-4.64.03-4.64z" id="Path" fill="#E6F7FF" />
                  <path d="M7.43 6.43H4.11a.88.88 0 0 0-.88 1 .91.91 0 0 0 .93.84h.16a.78.78 0 0 0-.76.8.83.83 0 0 0 .74.81.81.81 0 0 0-.31.63.82.82 0 0 0 .65.8.81.81 0 0 0-.09.56.86.86 0 0 0 .85.62h2.29c.3 0 .599-.038.89-.11l1.42-.47h1.9c1 0 1.27-4.64 0-4.64a5 5 0 0 1-.55 0c-.05 0-.15-.19-.4-.46-.37-.4-.78-.91-1.07-1.19a7.18 7.18 0 0 1-1.7-2.25 2 2 0 0 0-.32-.52.83.83 0 0 0-1.16.09 1.39 1.39 0 0 0-.25.38 1.49 1.49 0 0 0-.09.3 2.38 2.38 0 0 0 .07.84c.064.288.155.569.27.84.188.353.41.688.66 1a.18.18 0 0 1 .07.08" id="Path" stroke="#004B7C" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" fillRule="evenodd">
                  <g>
                    <circle id="Oval" fill="#6DAE4F" cx="8" cy="8" r="7" />
                    <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0-1a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" id="Shape" fill="#FFF" fillRule="nonzero" />
                    <g id="Group-2" transform="translate(1.538 3.876)">
                      <path d="M10.595 5.348a9 9 0 0 0-.36-2.32 4.24 4.24 0 0 1-1.33-1.86c-.16-.53-.27-.72-.74-.73a.72.72 0 0 0-.65.8c.006.24.026.481.06.72.137.655.331 1.298.58 1.92l-4.5-3.42a.75.75 0 0 0-1.11.07.72.72 0 0 0 .27 1l2.25 1.7.59.56-3.57-2.71a.71.71 0 1 0-.85 1.12l2.25 1.7 1.35 1-2.92-2.19a.75.75 0 0 0-1.11.07c-.31.4-.06.81.26 1.06l2.25 1.69 1.13.85-2.25-1.7a.74.74 0 0 0-1.09 0 .75.75 0 0 0 .24 1.09l4.1 3c.594.447 2.07.833 2.72.268" id="Path" stroke="#165209" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.075 6.028l-.42-.37a6.91 6.91 0 0 0-.51-2.14 5.72 5.72 0 0 1-1.21-2.38c-.16-.53-.27-.72-.74-.73a.72.72 0 0 0-.65.8c.006.24.026.481.06.72.116.631.3 1.248.55 1.84l-.19-.11-4.31-3.31a.75.75 0 0 0-1.11.07.73.73 0 0 0 .27 1.06l2.2 1.69.64.51-3.57-2.71a.75.75 0 0 0-1.11.06.74.74 0 0 0 .26 1.06l2.25 1.7 1.35 1-2.92-2.18a.74.74 0 0 0-1.11.06.73.73 0 0 0 .26 1.06l2.25 1.69 1.13.85-2.25-1.69a.72.72 0 0 0-1.09 0 .74.74 0 0 0 .24 1.08l4.1 3.11a2.72 2.72 0 0 0 2.08.51c.539.312 1.009.312 1.41 0 .602-.469.404-.511.85-1.13a11.57 11.57 0 0 0 1.29-2.12z" id="Path" fill="#DCF0CB" />
                      <path d="M10.595 5.348a9 9 0 0 0-.36-2.32 4.24 4.24 0 0 1-1.33-1.86c-.16-.53-.27-.72-.74-.73a.72.72 0 0 0-.65.8c.006.24.026.481.06.72.137.655.331 1.298.58 1.92l-4.5-3.42a.75.75 0 0 0-1.11.07.72.72 0 0 0 .27 1l2.25 1.7.59.56-3.57-2.71a.71.71 0 1 0-.85 1.12l2.25 1.7 1.35 1-2.92-2.19a.75.75 0 0 0-1.11.07c-.31.4-.06.81.26 1.06l2.25 1.69 1.13.85-2.25-1.7a.74.74 0 0 0-1.09 0 .75.75 0 0 0 .24 1.09l4.1 3c.594.447 1.986.742 2.72.62" id="Path" stroke="#165209" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <g id="Group-3" transform="translate(3.947 5.168)">
                      <path d="M10.82 6.22a2.2 2.2 0 0 1-.46-.75c0-.22-.06-.43-.1-.65a2.39 2.39 0 0 0-.36-1.08 5.91 5.91 0 0 1-1.21-2.38C8.53.83 8.42.64 7.95.63a.72.72 0 0 0-.65.8c.006.24.026.481.06.72.18.92.37 1.68.39 1.73L3.46.67a.74.74 0 0 0-1.11.07.72.72 0 0 0 .26 1l2.25 1.7.68.56-3.6-2.71a.74.74 0 0 0-1.11.06.73.73 0 0 0 .26 1.06l2.25 1.7 1.35 1-2.93-2.19A.74.74 0 0 0 .66 3c-.31.4-.07.81.26 1.06l2.25 1.68 1.12.85L2 4.89a.73.73 0 0 0-1 .04A.74.74 0 0 0 1.2 6l4 3c.334.25.72.422 1.13.5l.58.09c.305.045.6.143.87.29a.83.83 0 0 0 .6.05 3.82 3.82 0 0 0 1.77-1.29 3.71 3.71 0 0 0 .7-2 .85.85 0 0 0-.03-.42z" id="Path" stroke="#165209" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.86 6.17l-.45-.34a6.64 6.64 0 0 0-.51-2.14 5.85 5.85 0 0 1-1.21-2.38C8.53.78 8.42.59 7.95.58a.72.72 0 0 0-.65.8c.006.24.026.481.06.72.18.93.37 1.69.39 1.73L3.46.62a.75.75 0 0 0-1.11.07c-.31.41-.06.81.26 1.06l2.25 1.69.68.56-3.6-2.76a.75.75 0 0 0-1.11.07c-.31.4-.06.81.26 1.06l2.25 1.69 1.35 1-2.93-2.19a.74.74 0 0 0-1.1.07A.72.72 0 0 0 .92 4l2.25 1.69 1.12.85L2 4.85a.71.71 0 0 0-1 .04A.73.73 0 0 0 1.2 6l4 3a4.2 4.2 0 0 0 2 .59A6 6 0 0 0 8 10a3.22 3.22 0 0 0 2-1.26 4.81 4.81 0 0 0 .86-2.57z" id="Path" fill="#DDF6D1" />
                      <path d="M1.19 5.15c.57.43 4.43 3.43 4.89 3.59.475.17.995.17 1.47 0a1.48 1.48 0 0 0 .47-.31" id="Path" opacity=".5" />
                      <path d="M10.82 6.22a2.2 2.2 0 0 1-.46-.75c0-.22-.06-.43-.1-.65a2.39 2.39 0 0 0-.36-1.08 5.91 5.91 0 0 1-1.21-2.38C8.53.83 8.42.64 7.95.63a.72.72 0 0 0-.65.8c.006.24.026.481.06.72.18.92.37 1.68.39 1.73L3.46.67a.74.74 0 0 0-1.11.07.72.72 0 0 0 .26 1l2.25 1.7.68.56-3.6-2.71a.74.74 0 0 0-1.11.06.73.73 0 0 0 .26 1.06l2.25 1.7 1.35 1-2.93-2.19A.74.74 0 0 0 .66 3c-.31.4-.07.81.26 1.06l2.25 1.68 1.12.85L2 4.89a.73.73 0 0 0-1 .04A.74.74 0 0 0 1.2 6l4 3c.334.25.72.422 1.13.5l.58.09c.305.045.6.143.87.29a.83.83 0 0 0 .6.05 3.82 3.82 0 0 0 1.77-1.29 3.71 3.71 0 0 0 .7-2 .85.85 0 0 0-.03-.42z" id="Path" stroke="#165209" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <path d="M8.829 2.818l-.73.92" id="Path" stroke="#165209" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.893 1.625L5.83 2.818" id="Path-Copy" stroke="#165209" strokeLinecap="round" strokeLinejoin="round" transform="matrix(-1 0 0 1 11.387 0)" />
                    <path d="M7.538 1.633l-.649 1.56" id="Path" stroke="#165209" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </g>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" fillRule="evenodd">
                  <circle id="Oval" fill="#DF704D" cx="8" cy="8" r="7" />
                  <path d="M7.71 5A2.62 2.62 0 0 0 4 5a2.65 2.65 0 0 0 0 3.75l4 4 4-4A2.65 2.65 0 0 0 12 5a2.59 2.59 0 0 0-1.85-.77A2.57 2.57 0 0 0 8.3 5l-.3.3-.29-.3z" id="Path" stroke="#77280C" fill="#FFF3F0" />
                  <path d="M11.43 5.18a2 2 0 0 1 .53.63c.9 1.67-.6 2.72-1.54 3.67-.6.61-1.22 1.22-1.85 1.8" id="Path" opacity=".6" />
                  <path d="M5.79 4.81a2.16 2.16 0 0 0-.79.11 1.77 1.77 0 0 0-1 .82A2.54 2.54 0 0 0 3.77 7a.28.28 0 0 0 0 .09" id="Path" opacity=".4" />
                  <path d="M7.71 5A2.6 2.6 0 0 0 4 5a2.65 2.65 0 0 0 0 3.7l4 4 4-4A2.65 2.65 0 0 0 12 5a2.58 2.58 0 0 0-3.7 0l-.3.25L7.71 5z" id="Path" stroke="#77280C" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <span>{likes}</span>
            </a>
            <span className='like-separator'></span>
            <a
              className="flex items-center mr-4 text-gray-500 transition hover:text-blue-600 hover:underline"
              href={tweetUrl}
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
