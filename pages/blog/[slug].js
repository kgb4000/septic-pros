import Link from 'next/link'
import styled from 'styled-components'
import Header from '../../components/Header'
import BlogHeroBox from '../../components/BlogHeroBox'
import Button from '../../components/Button'
import SEO from '../../next-seo.config'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import FreeEstimateForm from '../../components/FreeEstimateForm'
import { getSlugs, getPosts, getPost } from '../../lib/data'
import { RichText } from '@graphcms/rich-text-react-renderer'

export const getStaticPaths = async () => {
  const slugsRes = await getSlugs()
  const slugs = slugsRes.posts
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  const data = await getPosts()
  return {
    props: {
      post: post.posts[0],
      data,
    },
  }
}

export default function Post({ post }) {
  const SEO = {
    title: 'Home Septic Pros',
    titleTemplate: `post.title | %s`,
    description: `post.excerpt`,
    canonical: `https://homesepticpros.com/blog/${post.slug}`,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `https://homesepticpros.com/blog/${post.slug}`,
      site_name: 'Home Septic Pros',
    },
  }
  console.log(post)
  return (
    <>
      <ArticleJsonLd
        url={`https://homesepticpros.com/blog/${post.slug}`}
        title={post.title}
        images={[post.coverImage.url]}
        datePublished={post.date}
        authorName={[post.author.name]}
        description={post.description}
      />
      <NextSeo {...SEO} />
      <BlogHeroBox
        backgroundHeight="30vh"
        backgroundImage={post.coverImage.url}
        heroText="Septic Pros Blog"
      />
      <Main>
        <div className="container">
          <div className="blog-post">
            <div className="blog-header">
              <div className="blog-header-title">
                <h1>{post.title}</h1>
                <div className="author-info">
                  <img className="avatar" src={post.author.image.url} />
                  <span>{post.author.name}</span>
                  <span>
                    <em>
                      {new Date(post.date).toLocaleDateString('en-us', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </em>
                  </span>
                </div>
              </div>
              <img src={post.coverImage.url} className="blog-img" />
            </div>
            <RichText content={post.content.raw.children} />
          </div>
          <div className="btn">
            <Button>More Resources &#8594;</Button>
          </div>
        </div>
      </Main>
    </>
  )
}

const Main = styled.main`
  .septic-services {
    color: #fff;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(/images/plastic-septic-tanks.jpeg);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .blog-post {
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 3rem;

    .blog-header {
      display: flex;
      justify-content: center;
    }

    .blog-img {
      max-width: 45%;
      height: auto;
      margin-left: 2rem;
    }

    .author-info {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;

      span {
        margin-left: 1rem;
      }

      .avatar {
        max-width: 50px;
        display: inline-block;
        border: 2px solid #e67e22;
        border-radius: 50%;
      }
    }
  }
  

  .blog-post h3 {
        font-size: 1.6rem;


  .blog-section {
    .btn {
      text-align: left;
    }
  }

  
`
