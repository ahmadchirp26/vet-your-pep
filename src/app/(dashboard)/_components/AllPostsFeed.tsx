'use client';
import FeedPosts from '@/features/Post/FeedPosts'
import useUserAllFeed from '@/api/Posts/useUserAllFeed';
import React from 'react'

interface Props {
  className?:string
}

const AllPostsFeed = ({className}:Props) => {
  const {data, status} =  useUserAllFeed()
  return (
    <FeedPosts 
      className={className}
      status={status}
      posts={data?.feed.map(post => ({
        body: post.body,
        id: post.id,
        createdAt: post.createdDate,
        images: post.images ?? [],
        likes: post.likes?.map(l => ({
          user:{
            id: l.user?.id ?? '',
            firstName: l.user?.firstName ?? '',
            lastName: l.user?.lastName ?? '',
            profileImage: l.user?.profileImage ?? undefined,
          }
        })) ?? [],
        customer:{
          id: post.customer?.id ?? '',
          firstName: post.customer?.firstName ?? '',
          lastName: post.customer?.lastName ?? '',
          email: post.customer?.email ?? '',
          profileImage: post.customer?.profileImage ?? undefined,
        },
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