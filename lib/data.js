import { GraphQLClient, gql } from 'graphql-request'

export const getPosts = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckvtq4d1z09fn01z09wd89lcl/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts(first: 3, orderBy: date_DESC) {
        title
        date
        slug
        excerpt
        content {
          text
        }
        coverImage {
          url
          width
          height
        }
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `
  return await graphQLClient.request(query)
}

export const getPost = async (slug) => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckvtq4d1z09fn01z09wd89lcl/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getPost($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        date
        slug
        excerpt
        content {
          raw
        }
        coverImage {
          url
          width
          height
        }
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `

  const variables = {
    slug,
  }

  return await graphQLClient.request(query, variables)
}

export const getSlugs = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckvtq4d1z09fn01z09wd89lcl/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts {
        slug
      }
    }
  `

  return await graphQLClient.request(query)
}
