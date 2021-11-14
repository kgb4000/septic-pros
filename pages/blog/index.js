import Link from 'next/link'
import styled from 'styled-components'
import HeroBox from '../../components/HeroBox'
import Button from '../../components/Button'
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'
import FreeEstimateForm from '../../components/FreeEstimateForm'
import { getPosts } from '../../lib/data'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      posts: data.posts,
    },
  }
}

export default function Home({ posts }) {
  console.log(posts)
  return (
    <>
      <DefaultSeo {...SEO} />
      <HeroBox
        heroText="Expert Septic System Tips"
        subText="Resource to help you maintain your septic system."
        backgroundHeight="60vh"
        buttonText="Call (443) 456-6893"
        backgroundImage="/images/septic-truck-pumping-wastewater.jpeg"
      />
      <Main>
        <section>
          <div className="container">
            <div className="blog">
              {posts.map((post) => (
                <div className="blog-post" key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <a>
                      <div className="mobile">
                        <img src={post.coverImage.url} alt={post.title} />
                        <div className="title-author">
                          <h2>{post.title}</h2>
                          <div className="author-info">
                            <img
                              className="avatar"
                              src={post.author.image.url}
                            />
                            <span>{post.author.name}</span>
                            <span>
                              <em>
                                {new Date(post.date).toLocaleDateString(
                                  'en-us',
                                  {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                  }
                                )}
                              </em>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
            <div className="btn">
              <Button>More Resources &#8594;</Button>
            </div>
          </div>
        </section>
      </Main>
    </>
  )
}

const Main = styled.main`
  .blog {
    max-width: 900px;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
  .our-work {
    background-color: #ecf0f1;
  }

  .author-info {
    display: flex;
    align-items: center;

    span {
      margin-left: 1rem;
    }

    .avatar {
      max-width: 50px;
      display: inline-block;
      border: 2px solid #000;
      border-radius: 50%;
    }
  }

  .blog-post h3 {
    font-size: 1.6rem;
    margin: 0;
  }

  @media (min-width: 700px) {
    .title-author {
      margin-left: 2rem;

      H2 {
        margin: 1rem 0;
      }
    }
    img {
      max-width: 20rem;
    }
    .mobile {
      display: flex;

      .author-info {
      }
    }
    .blog {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .blog-post h3 {
        font-size: 1.6rem;
        margin: 1rem 0;
      }
    }

    .blog-section {
      .btn {
        text-align: left;
      }
    }
  }
`
