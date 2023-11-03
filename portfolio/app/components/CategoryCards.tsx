'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export type CategoryCardProps = {
  className?: string
  src: string
  primaryHref?: string
  primaryCTA?: string
  title?: string
  subtitle?: string
  secondaryHref?: string
  subcategories?: { name: string, href: string }[]
}

export const CategoryCard = ({
  src,
  className,
  subcategories,
  primaryHref,
  primaryCTA,
  title,
  subtitle,
  secondaryHref
}: CategoryCardProps) => {
 
  const [isClicked, setIsClicked] = useState(false)
    const router = useRouter()
  return (
    <div className={`${className} flex flex-col relative`}>
      {!isClicked ? (
        <>
          <div className='absolute z-10 w-full flex flex-col justify-end h-full bg-gradient-to-t from-black/90 to-60% to-transparent'>
            <div className={`w-full px-4 md:px-6 flex flex-col pb-4 md:pb-8`}>
              <div className='text-white capitalize pb-2 md:pb-1 lg:pb-2 sm:text-2xl md:text-xl xl:text-2xl font-semibold'>
                {title}
              </div>
              <div className='text-white capitalize sm:text-lg md:text-base xl:text-lg font-regular'>{subtitle}</div>
              <button
                onClick={() => {
                  if (primaryHref) router.push(primaryHref)
                  else setIsClicked(true)
                }}
                className='mt-4 md:px-20 px-10 py-4 md:py-2 xl:py-4 sm:text-base md:text-lg uppercase border border-white hover:border-secondary font-semibold bg-transparent text-white rounded-full text-center hover:bg-secondary hover:text-black'
              >
                {primaryCTA ? primaryCTA : 'Shop'}
              </button>
            </div>
          </div>
          <Image
            alt={'CategoryCard'}
            src={src}
            width={100}
            height={100}
          />
        </>
      ) : (
        <>
          {!primaryHref && subcategories && secondaryHref ? (
            <>
              <div className='absolute bg-black/80 flex flex-col justify-end w-full h-full z-10'>
                <div className='flex flex-col justify-between w-full  h-[70%] md:h-[75%] lg:h-[70%]'>
                  <div className='flex flex-col px-4 md:px-6'>
                    {subcategories.map((item, key) => {
                        return (
                            <Link
                      href={item.href}
                      className='m-1 py-2 sm:py-4 md:py-1 lg:py-2 xl:py-4 mb-2 2xl:mb-4 text-lg md:text-sm xl:text-lg uppercase border border-white hover:border-secondary whitespace-nowrap font-semibold bg-transparent text-white rounded-full text-center hover:bg-secondary hover:text-black'
                      key={key}
                    >
                      {item.name}
                    </Link>
                        )
                    })}
                  </div>
                  <div className='flex flex-col px-4 md:px-6 pb-4 md:pb-8'>
                    <Link
                      href={secondaryHref!}
                      className={`m-1 py-2 sm:py-4 md:py-2 xl:py-4 text-lg md:text-lg xl:text-lg uppercase font-semibold bg-secondary rounded-full text-center text-black`}
                    >
                      Shop All
                    </Link>
                  </div>
                </div>
              </div>
              <Image
                alt={'CategoryCard'}
                src={src}
                width={100}
                height={100}
              />
            </>
          ) : null}
        </>
      )}
    </div>
  )
}

