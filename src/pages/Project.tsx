
import React from 'react';
import { useRouter } from 'next/router'

const Project = () => {
  const router = useRouter()

  console.log(router.query)

  return (
    <div>
      <h1> Project Gallery</h1>
    </div>
  )
}


export default Project