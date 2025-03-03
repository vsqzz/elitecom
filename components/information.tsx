import { Code, Gamepad2, Cpu, BotIcon as Robot, Cog } from "lucide-react"

export default function Information() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="section-title mx-auto">What We Do</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We specialize in creating custom digital solutions that help businesses grow and succeed in the digital
          landscape.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="white-stroke p-6 rounded-lg card-hover">
          <div className="bg-white/10 p-3 rounded-full w-fit mb-4">
            <Code className="text-white h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Web Development</h3>
          <p className="text-gray-400">
            We build responsive, high-performance websites and web applications using the latest technologies.
          </p>
        </div>

        <div className="white-stroke p-6 rounded-lg card-hover">
          <div className="bg-white/10 p-3 rounded-full w-fit mb-4">
            <Gamepad2 className="text-white h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Game Development</h3>
          <p className="text-gray-400">
            Specializing in Lua and Luau, we create engaging and interactive game experiences.
          </p>
        </div>

        <div className="white-stroke p-6 rounded-lg card-hover">
          <div className="bg-white/10 p-3 rounded-full w-fit mb-4">
            <Cpu className="text-white h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Custom IT Solutions</h3>
          <p className="text-gray-400">
            We provide tailored IT solutions to meet your specific business needs and challenges.
          </p>
        </div>

        <div className="white-stroke p-6 rounded-lg card-hover">
          <div className="bg-white/10 p-3 rounded-full w-fit mb-4">
            <Cog className="text-white h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Commissioned Software</h3>
          <p className="text-gray-400">
            We develop bespoke software solutions designed to address your unique requirements.
          </p>
        </div>

        <div className="white-stroke p-6 rounded-lg card-hover">
          <div className="bg-white/10 p-3 rounded-full w-fit mb-4">
            <Robot className="text-white h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
          <p className="text-gray-400">
            We implement cutting-edge AI and machine learning solutions to drive innovation and efficiency.
          </p>
        </div>
      </div>
    </section>
  )
}

