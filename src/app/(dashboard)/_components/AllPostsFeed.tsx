'use client';
import FeedPosts from '@/Features/Post/FeedPosts'
import useUserAllFeed from '@/api/Posts/useUserAllFeed';
import React from 'react'

const AllPostsFeed = () => {
  const {data, status} =  useUserAllFeed()
  return (
    <FeedPosts 
      status={status}
      posts={data?.feed.map(post => ({
        body: post.body,
        id: post.id,
        images: post.images ?? [],
        likes: post.likes?.map(l => ({
          user:{
            id: l.user?.id ?? '',
            firstName: l.user?.firstName ?? '',
            lastName: l.user?.lastName ?? '',
            profileImage: l.user?.profileImage ?? undefined,
          }
        })) ?? [],
        channel:{
          id: post.channel?.id ?? '',
          title: post.channel?.title ?? ''
        },
        comments: post.comments?.map(c => ({
          content: c.content,
          user: {
            id: c.user.id,
            firstName: c.user.firstName,
            lastName: c.user.lastName,
            email: c.user.email,
            profileImage: c.user.profileImage ?? undefined,
          }
        })) ??[],
      })) || []}
    />
  )
}

export default AllPostsFeed