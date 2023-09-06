import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-items-stretch justify-between p-24 bg-[#f8f8f8]">
      <div className="z-10 max-w-5xl w-full items-center justify-between  font-mono text-black text-4xl lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto">
          Lily Baird
        </p>
      </div>

      <div className='place-self-end'>
        <Image
          src="/partyhatfrog.jpeg"
          alt="fatfroggo Logo"
          width={450}
          height={350}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl text-black font-semibold`}>
            Portfolio{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-black text-sm opacity-50`}>
            See example projects I have worked on using a variety of languages and frameworks
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl text-black font-semibold`}>
            Contact{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-black text-sm opacity-50`}>
            Links to stuff here
          </p>
        </a>

      </div>
    </main>
  )
}
