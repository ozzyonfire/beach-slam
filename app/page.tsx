import Section from '@/components/section'
import { Navbar } from '@/components/ui'
import Image from 'next/image'

export default function FreelancerHome() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className='relative w-full h-[300px] md:h-[400px]'>
        <Image
          src="/img/full.jpg"
          alt="Beach Slam Logo"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
        <video className="opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out" style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
        }} src="/img/moshed-banner.mp4" loop playsInline autoPlay muted preload="auto"></video>
      </div>
      <Section title="About" colour='white' id="about">
        <div className="container mx-auto px-12 max-w-3xl text-lg">
          <div className="md:columns-2">
            <p className="text-justify">
              Beach Slam is a beach volleyball tournament that takes place at Campbell&apos;s Orchards. The tournament was started over 10 years ago and continues to grow and evolve every year. <strong>There is a small registration fee</strong> that goes towards food and prizes for the tournament.
              Teams play in a best two of three match to fifteen. Win by two. Normal beach volleyball rules apply. You must rotate the serve to every player on your roster and substitute them accordingly.
            </p>
          </div>
        </div>
      </Section>
      <Section title="Registration" colour='secondary' id="registration">
        <div className="container mx-auto px-12 max-w-3xl text-lg">
          <div className="flex flex-col items-center gap-2">
            <p className='text-center'>
              Registration is now open! Please fill out the form below to register your team.
            </p>
            <a href="https://forms.gle/5fpehp7RhkSCiFP28" className="rounded-md bg-cyan-600 px-3 py-1 hover:bg-cyan-500 transition-colors" target='_blank'>Register</a>
          </div>
        </div>
      </Section>
      <Section title="Teams" colour='primary' id="teams">
        <div className="container mx-auto text-lg">
          <p className='text-center'>
            No teams are registered yet. Check back soon!
          </p>
        </div>
      </Section>
      <Section title="Schedule & Bracket" colour='white' id="schedule">
        <div className="container mx-auto text-lg">
          <p className='text-center'>
            The schedule and bracket will be posted here once registration closes.
          </p>
        </div>
      </Section>
      <footer className="footer">
        <div className="container mx-auto px-12 w-full text-lg flex gap-20 justify-between flex-wrap">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 uppercase text-center">Location</h2>
            <p className="text-justify">
              Campbell&apos;s Orchards is located at <strong>1633 County Rd 3, Carrying Place, ON K0K 1L0</strong>. The tournament will take place on the beach volleyball courts located on the property.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 uppercase text-center">Event</h2>
            <p className="text-center mb-4">
              Checkout the facebook event page for more information.
            </p>
            <a href='https://www.facebook.com/events/774330714247525' target='_blank' rel='noreferrer'>
              <button className="mx-auto flex items-center gap-2 rounded-md bg-blue-500 hover:bg-blue-400 transition-colors duration-200 px-3 py-1">
                Event Page
                <i className='fab fa-facebook-square text-4xl text-gray-100 hover:text-gray-300 transition-colors duration-200' />
              </button>
            </a>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 uppercase text-center">Committee</h2>
            <ul className="list-none text-center">
              <li>Matt Oskamp</li>
              <li>Amelia Campbell</li>
              <li>John Campbell</li>
              <li>Justin D&apos;Anna</li>
              <li>Adam Radziwinowski</li>
              <li>Jacob Radziwinowski</li>
              <li>Maddy Oskamp</li>
            </ul>
          </div>

        </div>
      </footer>
    </main >
  )
}