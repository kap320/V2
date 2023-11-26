import React from "react"
import Head from "next/head"

export default function SEO({
  author = "Dishant Sharma",
  meta,
  title = "Lynnflix and Chill: Where Anime Lovers Unite!"
}) {
  const metaData = [
    {
      name: `description`,
      content: `Watch your favorite anime series and movies online at Lynnflix. Enjoy high-quality streaming and a large collection of titles.`
    },
    {
      property: `og:title`,
      content: `Lynnflix - Watch Anime Streaming`
    },
    {
      property: `og:description`,
      content: `Watch your favorite anime series and movies online at Lynnflix. Enjoy high-quality streaming and a large collection of titles`
    },
    {
      property: `og:type`,
      content: `website`
    },
  ]
  .concat(meta)
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/Images/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}
