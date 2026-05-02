import contentful from 'contentful'

const accessToken = import.meta.env.DEV
  ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
  : import.meta.env.CONTENTFUL_DELIVERY_TOKEN

export const hasContentfulConfig = Boolean(
  import.meta.env.CONTENTFUL_SPACE_ID && accessToken
)

export const contentfulClient = hasContentfulConfig
  ? contentful.createClient({
      space: import.meta.env.CONTENTFUL_SPACE_ID,
      accessToken,
      host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
      environment: 'development', // espacio de trabajo contenful
    })
  : null
