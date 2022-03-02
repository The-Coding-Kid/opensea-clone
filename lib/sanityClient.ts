import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'pb8p1qka',
  dataset: 'production',
  apiVersion: '2022-03-02',
  token:
    'sk3dPBnth74wwxQ817ZLeJ3ofJk9LYHtZ40TmAPJpa1HQzwnygwG3ZTmwyZMP9mrpLeTac2wVhwFP8pfWblUYRaQefFo2VpPSLo5JgP7yUzdFCwcNR5UMZX2loUzI4FynTLGa3HNdpMnZj3Z1kgHjlXM6sdeXQlJ1wtsN5yrtKMCslw3wTP8',
  useCdn: false,
})
