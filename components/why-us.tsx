import { CheckCircle } from "lucide-react"

export default function WhyUs() {
  const reasons = [
    "Experienced team of developers and designers",
    "Custom solutions tailored to your specific needs",
    "Transparent communication and project management",
    "Ongoing support and maintenance",
    "Competitive pricing with no hidden fees",
    "Fast turnaround times without compromising quality",
  ]

  return (
    <section id="why-us" className="py-20 md:py-32 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="text-xl text-gray-400 mb-8">
            We deliver exceptional results through our commitment to quality, innovation, and client satisfaction.
          </p>

          <div className="grid gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="text-primary-DEFAULT mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2 relative animate-fade-in">
          <div className="white-stroke rounded-lg p-1">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Our work process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div
            className="absolute -bottom-6 -left-6 white-stroke bg-black p-6 rounded-lg max-w-[200px] animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

