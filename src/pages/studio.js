import React from 'react'
import { Header, Footer, Donation } from '../components'
import studio_pic from '../Stock 2/Interior/pexels-pixabay-275484.jpg'
import person_1 from '../Stock 2/Monochrome/bg-black/pexels-bankole-adeoni-4152161.jpg'
import person_2 from '../Stock 2/Monochrome/bg-black/pexels-cottonbro-studio-7322301.jpg'
import person_3 from '../Stock 2/Monochrome/bg-black/pexels-despoina-apostolidou-15409648.jpg'
import person_4 from '../Stock 2/Monochrome/bg-black/pexels-masud-ananda-10929294.jpg'
import person_5 from '../Stock 2/Monochrome/bg-black/pexels-pingbo-luo-8894399.jpg'
import person_6 from '../Stock 2/Monochrome/bg-black/pexels-samad-ismayilov-735552.jpg'

const Studio = () => {
  return (
    <div className="h-full relative">
      <Header />
      <div className="mx-14">
        <img src={studio_pic} alt="studio-pic" className="w-full" />

        <h1 className="text-7xl font-normal my-20">Studio</h1>
        <div className=""><p className="text-2xl w-3/4">We earned a reputation for designing beautiful and innovative buildings that delight and inspire. We strive to deliver innovative solutions that have a minimal impact on the environment.</p></div>
        <div className="flex justify-between mt-14 mb-24">
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-base font-semibold">Address:</p>
              <p className="text-lg opacity-90">123 Example St, San Francisco,<br />CA 12345-6789</p>
            </div>
            <div>
              <p className="text-base font-semibold">Telephone:</p>
              <p className="text-lg opacity-90">123-456-7890</p>
            </div>
            <div>
              <p className="text-base font-semibold">Email:</p>
              <a className="text-lg opacity-90 hover:underline hover:cursor-pointer">contact@example.com</a>
            </div>
          </div>
          <div className="w-3/5"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50457.19868508666!2d-122.52281647832032!3d37.77656430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085874a311220bb%3A0x6a56ca6f837ff84e!2sUniversity%20of%20San%20Francisco!5e0!3m2!1sen!2sug!4v1692257419187!5m2!1sen!2sug" style={{border: 0, width: "100%", height: "450px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        </div>
      </div>

      <div className="bg-zinc-900 text-white px-12 pt-20 pb-20">
        <h1 className="text-6xl mb-10">People</h1>
        <div className="flex flex-col">
          <div className="flex gap-7 mb-7">
            <div className="w-1/3">
              <img src={person_1} alt="person-1" className="w-full" />
              <div className="flex flex-col my-7">
                <p className="text-base tracking-tight">Dylan Wheeler</p>
                <p className="text-base tracking-tight">Architect</p>
                <a className="text-base tracking-tight hover:underline hover:cursor-pointer">dylan.wheeler@example.com</a>
              </div>
              <p className="text-base tracking-tight">He plans, designs and oversees the construction of buildings. To practice, architecture means to provide services in connection with the creation of buildings and the space within the site surrounding the buildings that have human occupancy or use as their purpose.</p>
            </div>

            <div className="w-1/3">
              <img src={person_2} alt="person-2" className="w-full" />
              <div className="flex flex-col my-7">
                <p className="text-base tracking-tight">Selena Carroll</p>
                <p className="text-base tracking-tight">Project Manager</p>
                <a className="text-base tracking-tight hover:underline hover:cursor-pointer">selena.carroll@example.com</a>
              </div>
              <p className="text-base tracking-tight">She plans, designs and oversees the construction of buildings. To practice, architecture means to provide services in connection with the creation of buildings and the space within the site surrounding the buildings that have human occupancy or use as their purpose.</p>
            </div>

            <div className="w-1/3">
              <img src={person_3} alt="person-3" className="w-full" />
              <div className="flex flex-col my-7">
                <p className="text-base tracking-tight">Adele Lopez</p>
                <p className="text-base tracking-tight">Architect</p>
                <a className="text-base tracking-tight hover:underline hover:cursor-pointer">adele.lopez@example.com</a>
              </div>
              <p className="text-base tracking-tight">She plans, designs and oversees the construction of buildings. To practice, architecture means to provide services in connection with the creation of buildings and the space within the site surrounding the buildings that have human occupancy or use as their purpose.</p>
            </div>
          </div>

          <div className="flex gap-7">
            <div className="w-1/3">
              <img src={person_4} alt="person-4" className="w-full" />
              <div className="flex flex-col my-7">
                <p className="text-base tracking-tight">Levison Mcdougall</p>
                <p className="text-base tracking-tight">Project Manager</p>
                <a className="text-base tracking-tight hover:underline hover:cursor-pointer">levison.mcdougall@example.com</a>
              </div>
              <p className="text-base tracking-tight">He plans, designs and oversees the construction of buildings. To practice, architecture means to provide services in connection with the creation of buildings and the space within the site surrounding the buildings that have human occupancy or use as their purpose.</p>
            </div>

            <div className="w-1/3">
              <img src={person_5} alt="person-5" className="w-full" />
              <div className="flex flex-col my-7">
                <p className="text-base tracking-tight">Margaret Lewinsky</p>
                <p className="text-base tracking-tight">Architect</p>
                <a className="text-base tracking-tight hover:underline hover:cursor-pointer">margaret.lewinsky@example.com</a>
              </div>
              <p className="text-base tracking-tight">She plans, designs and oversees the construction of buildings. To practice, architecture means to provide services in connection with the creation of buildings and the space within the site surrounding the buildings that have human occupancy or use as their purpose.</p>
            </div>

            <div className="w-1/3">
              <img src={person_6} alt="person-6" className="w-full" />
              <div className="flex flex-col my-7">
                <p className="text-base tracking-tight">Izaak Travis</p>
                <p className="text-base tracking-tight">Project Manager</p>
                <a className="text-base tracking-tight hover:underline hover:cursor-pointer">izaak.travis@example.com</a>
              </div>
              <p className="text-base tracking-tight">She plans, designs and oversees the construction of buildings. To practice, architecture means to provide services in connection with the creation of buildings and the space within the site surrounding the buildings that have human occupancy or use as their purpose.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-14">
        <div className="mt-20 mb-40 flex gap-10">
          <div className="flex flex-col w-1/3">
            <h1 className="text-6xl">Awards</h1>
            <p className="text-2xl my-10">Our team has earned numerous awards, for both design and sustainability.</p>
            <p className="text-2xl">Our most recent and notable awards include:</p>
          </div>
          <div className="w-2/3 flex flex-col-reverse">
            <div className="flex gap-7">
              <div className="bg-gray-100 w-1/3 h-52 flex flex-col justify-center text-center">
                <p className="text-gray-400 text-4xl font-serif">International Sustainability</p>
                <p className="text-gray-400 text-3xl font-semibold">Awards 2023</p>
              </div>
              <div className="bg-gray-100 w-1/3 h-52 flex flex-col justify-center text-right pr-4">
                <p className="text-gray-400 text-4xl font-semibold">Green Housing</p>
                <p className="text-gray-400 text-3xl font-serif">Awards 2022</p>
              </div>
              <div className="bg-gray-100 w-1/3 h-52 flex flex-col justify-center text-left pl-4">
                <p className="text-gray-400 text-4xl font-serif">Sustainable Housing</p>
                <p className="text-gray-400 text-3xl font-semibold">AWARDS 2021</p>
              </div>
            </div>
          </div>
        </div>

        <Donation />
      </div>
      
      
      <Footer />
    </div>
  )
}

export default Studio