import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

// Fetching articles using the hashnode graphql API
const endpoint = 'https://api.hashnode.com/'

const ARTICLE_QUERY = `{
    user(username: "Cheeh") {
      publication {
        posts(page: 0) {
          title
          brief
          slug
          coverImage
          dateAdded
        }
      }
    }
  }`

const Articles = () => {

     // Using react-query to fetch and cache the data
    const { isLoading, error, data } = useQuery("article", () => {
        return axios({
            url: endpoint,
            method: "POST",
            data: {
                query: ARTICLE_QUERY
            }
        }).then((response) => response.data.data)
    })

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error: {error.message}</div>

    return (
        <>

            <section className='my-28 bg-grey dark:bg-gray-900' id='blog'>
                <div className="flex flex-col py-14 gap-2 items-center">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cinder-light dark:text-white tracking-widest font-inter">MY ARTICLES</p>
                    </div>
                    <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">PERSONAL BLOG</p>
                </div>

                <div className='flex flex-col gap-20 xl:gap-0 xl:flex-row justify-evenly items-center py-16'>
                     {/* Mapping through the fetched articles */}
                    {data.user.publication.posts?.map((post, i) => (
                        <div key={i} className='flex flex-col gap-5 border dark:border-gray-900 rounded-sm'>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <img className='w-80 xl:w-96' src={post.coverImage} alt='blog-img-1' />
                                </div>
                                <div className='flex flex-col gap-2 pl-5'>
                                    <h3 className='text-sm w-72 xl:w-full xl:text-md font-bold text-cinder-dark dark:text-cinder-dark-mode font-pjs'>{post.title}</h3>
                                    <p className='text-cinder-light dark:text-white text-sm w-72 xl:w-80 font-inter'>{`${post.brief}`}</p>
                                </div>
                            </div>
                            <a className='text-cinder-light dark:text-gray-400 text-xs font-inter font-semibold text-center pb-5' href={`https://cheehdevworkshop.hashnode.dev/${post.slug}`} target='_blank'>Continue Reading</a>
                        </div>
                    ))}
                </div>

                {/* Alternative layout */}
                {/* <div className='grid grid-rows-2 grid-cols-2 gap-10 py-20'>
                    {data.user.publication.posts?.map((post, i) => (
                        <div key={i} className='flex flex-col gap-5 border rounded-sm w-96'>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <img className='w-80 xl:w-96' src={post.coverImage} alt='blog-img-1' />
                                </div>
                                <div className='flex flex-col gap-2 pl-5'>
                                    <h3 className='text-sm xl:text-md font-bold text-cinder-dark font-pjs'>{post.title}</h3>
                                    <p className='text-cinder-light text-sm w-72 xl:w-80 font-inter'>{`${post.brief}`}</p>
                                </div>
                            </div>
                            <a className='text-cinder-light text-xs font-inter font-semibold text-center pb-5' href={`https://cheehdevworkshop.hashnode.dev/${post.slug}`} target='_blank'>Continue Reading</a>
                        </div>
                    ))}
                </div> */}
            </section>
        </>
    )
}
export default Articles

