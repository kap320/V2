import React from 'react'
import { poppinsMedium } from 'utils/Fonts/fonts'
import { AnimeCard } from 'components'

const RecentAnimes = ({ recentAnimes, title }) => {
  return (
    <div className='w-[100vw] flex flex-col justify-center items-center'>
      <div className='w-[90vw]'>
        <p className={`${poppinsMedium.className} text-white text-[20px] font-bold`}>
          {title || '🔥 LATEST EPISODES'}
        </p>
        <div className='mt-[1rem] flex gap-[3rem] justify-center md:justify-center flex-wrap w-[90vw] '>

          {
            recentAnimes.map((anime, index) => {
              const { animeId, name: animeTitle, episodeId, episodeNum: episodeNumber, imgUrl: image } = anime
              return (
                <div key={animeId}>
                  <AnimeCard id={animeId} image={image} title={animeTitle} release={new Date().getFullYear()} other={`Eps. ${episodeNumber}`} />
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default RecentAnimes