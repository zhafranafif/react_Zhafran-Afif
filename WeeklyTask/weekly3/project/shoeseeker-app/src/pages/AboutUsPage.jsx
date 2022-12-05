import React from 'react'
import AboutUs from '../component/AboutUs'
import { useQuery } from '@apollo/client';
import { getAllUsers } from '../graphql/query';

const AboutUsPage = () => {
    const { data } = useQuery(getAllUsers)
    
  return (
      <div className='mt-5'>
          <AboutUs />
          <h2 className='text-center mt-3'>Our Team</h2>
          <div className='user-container mb-3'>
              {data?.aboutus_aboutus_list.map((users) => (
                  <div key={users.id} className='users'>
                      <img src={users.Avatar} alt={users.name} />
                      <h2>{users.Name}</h2>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default AboutUsPage