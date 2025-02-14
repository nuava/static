'use client'

import Image from "next/image"

export default function Home() {
  return (
    <main>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/main_video.mp4" type="video/mp4" />
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center">
          <h2 className="text-xl md:text-2xl tracking-widest mb-4">
            WELCOME TO
          </h2>
          <h1 className="text-5xl md:text-7xl font-light mb-8 font-serif">
            Rondo Sports
          </h1>
          <button className="border-2 border-white px-8 py-3 tracking-wider hover:bg-white hover:text-black transition-all duration-300">
            LEARN MORE
          </button>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-gray-700 text-center mb-16">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-start">
          {/* Mission */}
          <div className="space-y-8">
            <h3 className="text-2xl text-gray-700 mb-4 font-bold">Mission</h3>
            <p className="text-gray-600 leading-relaxed pb-16">
              Our mission at Rondo Sports Agency (RSA) is to represent talented Indian
              footballers and guide them towards opportunities at Europe&apos;s top football
              academies. We are dedicated to providing the support and resources
              needed to help them take the next step in their careers.
            </p>
            <Image
              src="/playing.jpg"
              alt="Football player in action"
              className="object-contain rounded-lg mt-4"
              width={200}
              height={150}
            />
          </div>

          {/* Center Content */}
          <div className="space-y-6">
            <Image
              src="/team_huddle.png"
              alt="Team huddle"
              className="rounded-lg object-cover w-[800px]"
              width={1200}
              height={800}
              priority
            />
            <div className="space-y-4">
              <p className="text-gray-600 italic">
                Johan Cruyff once said, &quot;Everything that goes on in a match, you can
                do in a rondo.&quot; The rondo is a world-famous football drill that
                sharpens skills, awareness, and decision-making.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Rondo Sports Agency (RSA), we bring this philosophy off the pitch
                —providing footballers with the guidance, resources, and support they
                need to reach their full potential. Our focus is to ensure that when
                they step onto the field, they are fully prepared to excel in the real
                rondo of the game.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <h3 className="text-2xl text-gray-700 mb-4 font-bold">Vision</h3>
            <p className="text-gray-600 leading-relaxed pb-48">
              Our vision is to become the leading sports agency for Indian footballers,
              guiding them towards their dreams by creating pathways and
              representing them globally.
            </p>
            <Image
              src="/celebrating.jpg"
              alt="Players celebrating"
              className=" object-contain rounded-lg mt-4"
              width={250}
              height={250}
            />
          </div>
        </div>
      </section>
      {/* Our Services Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-gray-700 mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div>
            <Image
              src="/assemble.jpg"
              alt="Football team players"
              className=" rounded-lg shadow-lg"
              width={300}
              height={400}
            />
          </div>

          {/* Services List Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-gray-700 font-medium mb-2">
                ACADEMY IDENTIFICATION
              </h3>
              <p className="text-gray-600">
                We help you find the right academy and program, whether it&apos;s a summer camp, trial, or full-time program.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-gray-700 font-medium mb-2">
                APPLICATION PROCESS
              </h3>
              <p className="text-gray-600">
                We support you through every step of the application process, ensuring you have everything you need to apply successfully.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-gray-700 font-medium mb-2">
                SELECTION & PREPARATION
              </h3>
              <p className="text-gray-600">
                Once selected, we provide guidance and assistance to ensure you&apos;re fully prepared before your departure.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-gray-700 font-medium mb-2">
                POST-PROGRAM SUPPORT
              </h3>
              <p className="text-gray-600">
                Our support doesn&apos;t end after selection. We offer post-program guidance, helping you plan your next steps and progress in your football journey
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Founder Section */}
      <section className="bg-black text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-16 text-center">
            Founder
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Image Column */}
            <div className="space-y-4">
              <Image
                src="/founder.jpg"
                alt="Anirudh Jain"
                className=" rounded-lg shadow-lg justify-self-center"
                width={300}
                height={400}
              />
              <p className="text-center text-sm text-gray-300">
                Captaining Kaptiva Sports Academy<br />
                against Barcelona FC<br />
                in 2016
              </p>
            </div>

            {/* Biography Column */}
            <div className="space-y-6 text-gray-200 font-medium">
              <p>
                Our founder, Anirudh Jain, began his football journey at the Bengaluru FC, which served as a stepping stone for him to represent the Karnataka State Football Team as well. His talent and dedication earned him a place in the Indian U-17 National Football Team, where he traveled globally to countries like Germany and Russia for international tournaments.
              </p>

              <p>
                Seeking European exposure, Anirudh was recruited by Kaptiva Sports Academy in Barcelona, Spain, where he captained the U-16 side. During his time in Spain, he competed against elite teams such as Barcelona and Villarreal in the Mediterranean International Cup. He then moved to England, attending the prestigious Millfield School, known for producing top athletes, including Aston Villa&apos;s Tyrone Mings and F1 Driver Lando Norris.
              </p>

              <p>
                After completing high school, Anirudh pursued higher education in the United States, earning a degree in Business with a focus on Sports and Entertainment. Drawing from his diverse footballing experiences and vast network across India, Spain, the UK, and the US, he founded Rondo Sports with the vision of guiding young footballers on their journey to the highest levels of the game.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-gray-700 text-center mb-16">
            Why Choose us?
          </h2>

          <div className="grid grid-cols-2 gap-12">
            {/* Top row with two items */}
            <div className="text-center space-y-4">
              <h3 className="text-xl text-gray-700 font-bold uppercase tracking-wide">
                Partnerships
              </h3>
              <p className="text-gray-600 text-wrap">
                We have established strong partnerships and close relationships with leading sports academies in Europe, such as Kaptiva Sports Academy.
              </p>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-xl text-gray-700 font-bold uppercase tracking-wide">
                Personalized
              </h3>
              <p className="text-gray-600 text-wrap">
                We provide personalized guidance to our clients, helping them identify and choose the right path for their career.
              </p>
            </div>

            {/* Bottom row with single centered item */}
            <div className="text-center space-y-4 col-span-2">
              <h3 className="text-xl text-gray-700 font-bold uppercase tracking-wide">
                Professional
              </h3>
              <p className="text-gray-600 text-wrap">
                We offer end-to-end solutions, providing everything from visa support to seamless logistical assistance—on time and anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/stadium.jpg"
            alt="Football stadium"
            className="w-full h-full object-cover brightness-50"
            layout="fill"
          />
        </div>

        {/* Contact Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto text-white">
            <h2 className="text-5xl md:text-6xl font-light mb-8">
              Contact us
            </h2>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl">
                Phone/Whatsapp:
                <a
                  href="tel:+918296920912"
                  className="hover:text-gray-300 transition-colors"
                >
                  +91 8296920912
                </a>
              </p>

              <p className="text-xl md:text-2xl">
                Location:
                <span className="ml-2">Bangalore, India</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}