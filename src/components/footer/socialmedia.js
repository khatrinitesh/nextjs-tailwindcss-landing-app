import { socialIcons } from '@/constants/social-icons'
import Link from 'next/link'
import React from 'react'

const SocialMedia = () => {
  return (
    <>
     <ul>
        {socialIcons.map((val,index) => {
            return(
                <li key={index}>
                    <Link href={val.url} target="_blank" className="text-fsh14">
                        {val.icon} - {val.name}
                    </Link>
                </li>
            )
        })}
     </ul>
    </>
  )
}

export default SocialMedia