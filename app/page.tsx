import { AudioEgg } from "@/components/audio-egg";
import Section from "@/components/section";
import Teams from "@/components/teams";
import { Navbar } from "@/components/ui";
import Image from "next/image";

export default function FreelancerHome() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative w-full h-[300px] md:h-[400px] xl:h-[600px]">
        <Image
          src="/img/full.jpg"
          alt="Beach Slam Logo"
          fill
          className="object-cover"
        />
        <AudioEgg />
      </div>
      <Section title="About" colour="white" id="about">
        <div className="container mx-auto px-12 max-w-3xl text-lg">
          <div className="md:columns-2">
            <p className="text-justify">
              Beach Slam is a beach volleyball tournament that takes place at
              Campbell&apos;s Orchards. The tournament was started over 10 years
              ago and continues to grow and evolve every year.{" "}
              <strong>There is a small registration fee</strong> that goes
              towards food and prizes for the tournament. Teams play in a best
              two of three match to 21. Win by two. Normal beach volleyball
              rules apply. You must rotate the serve to every player on your
              roster and substitute them accordingly.
            </p>
          </div>
        </div>
      </Section>
      <Section title="Registration" colour="secondary" id="registration">
        <div className="container mx-auto px-12 max-w-3xl text-lg">
          <div className="flex flex-col items-center gap-2">
            <p className="text-center">
              Thank you for registering for Beach Slam. Registration is now
              closed.
            </p>
            {/* <a
              href="https://forms.gle/Aa5YKB5foos2JAp6A"
              className="rounded-md bg-cyan-600 px-3 py-1 hover:bg-cyan-500 transition-colors"
              target="_blank"
            >
              Register
            </a> */}
          </div>
        </div>
      </Section>
      <Section title="Teams" colour="primary" id="teams">
        <div className="container mx-auto text-lg">
          <Teams />
          {/* <p className="text-lg text-center">
            The teams will be posted here once registration closes.
          </p> */}
        </div>
      </Section>
      <Section title="Schedule & Bracket" colour="white" id="schedule">
        <div className="container flex flex-col gap-8 items-center">
          <iframe
            className="rounded-md mx-auto overflow-hidden w-full h-[600px]"
            src="https://challonge.com/beachslam25/module"
          ></iframe>
          <p className="text-lg text-center">
            Games start at 10:00am sharp! Please arrive on time and warm up
            before your game.
          </p>
          <div>
            <a
              className="font-semibold rounded-md text-white bg-cyan-600 px-4 py-2 hover:bg-cyan-500 transition-colors text-center shadow-md"
              href="https://docs.google.com/spreadsheets/d/1TfcSg9wrS2asHaWp6DpH9hZxhZDxD5KZo-Ruw3VASYU/edit?usp=sharing"
              target="_blank"
            >
              Full Schedule
            </a>
          </div>
        </div>
      </Section>
      <footer className="footer">
        <div className="container mx-auto px-12 w-full text-lg flex flex-col lg:flex-row gap-20 justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 uppercase text-center">
              Location
            </h2>
            <p className="text-justify">
              Campbell&apos;s Orchards is located at{" "}
              <strong>1633 County Rd 3, Carrying Place, ON K0K 1L0</strong>. The
              tournament will take place on the beach volleyball courts located
              on the property.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 uppercase text-center">
              Event
            </h2>
            <p className="text-center mb-4">
              Checkout the facebook event page for more information.
            </p>
            <a
              href="https://www.facebook.com/events/1312748843147480"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mx-auto flex items-center gap-2 rounded-md bg-blue-500 hover:bg-blue-400 transition-colors duration-200 px-3 py-1">
                Event Page
                <i className="fab fa-facebook-square text-4xl text-gray-100 hover:text-gray-300 transition-colors duration-200" />
              </button>
            </a>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 uppercase text-center">
              Committee
            </h2>
            <ul className="list-none text-center">
              <li>Matt Oskamp</li>
              <li>Amelia Campbell</li>
              <li>John Campbell</li>
              <li>Justin D&apos;Anna</li>
              <li>Adam Radziwinowski</li>
              <li>Madison Johnson</li>
              <li>Logan Ringham</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
