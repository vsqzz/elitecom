export default function AboutUs() {
  return (
    <section id="about" className="py-20 md:py-32 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-title">About Us</h2>
          <p className="text-xl text-gray-400 mb-6">
            We are a team of passionate programmers and designers dedicated to do commissions and helping the customers out.
          </p>
          <p className="text-gray-500 mb-8">
            Founded in 2025, our agency offers high-end programmers with over 3 years of experience. We transform clients ideas into reality and make them even better than imagined. Our programmers have clean code, fast speed and strategic thinking into solve complex problems.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="white-stroke p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">1</h3>
              <p className="text-gray-500">Projects Completed</p>
            </div>
            <div className="white-stroke p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">4</h3>
              <p className="text-gray-500">Expert Developers</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] white-stroke rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/10 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="https://media.discordapp.net/attachments/1305100435333316648/1345734171183681536/ELITECOMM.png?ex=67c5a01c&is=67c44e9c&hm=c8bbfd36e8f6ee0ed45e4753970a2af4698d2aa88efef46f030329c0418acc4d&="
              alt="Our team at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

