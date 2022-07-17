/**
 * https://adarsonmez-portfolio.sanity.studio/
 */

import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.REACT_APP_SANITY_TOKEN,
  apiVersion: '2022-02-01',
  useCdn: true, // `false` if you want to use the Insanity API
})

export const builder = imageUrlBuilder(client)

export const getImageUrl = (source: any) => builder.image(source)
