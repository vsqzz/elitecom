export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  twitterLink: string
}

export interface PricingPlan {
  id: number
  name: string
  price: string
  description: string
  features: string[]
  popular: boolean
}

export interface Contact {
  id: number
  name: string
  email: string
  message: string
  createdAt: Date
}

export interface NewsletterSubscriber {
  id: number
  email: string
  createdAt: Date
}

export interface ProjectInquiry {
  id: number
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  description: string
  createdAt: Date
}

class Database {
  private teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Kai (@.noxdev)",
      role: "Programmer",
      bio: "Specializes in LuaU, JavaScript, C#, Python, TypeScript and html",
      image: "https://share.creavite.co/67c3ddd489908441e5523851.gif",
      twitterLink: "https://x.com/vsq_zz1",
    },
    {
      id: 2,
      name: "ELITEsuley (@fwcm00n)",
      role: "Founder & CEO",
      bio: "Contact person for companies/Big projects. For commissions please contact suley ask for suley.",
      image: "https://share.creavite.co/67c3dde189908441e5523852.gif",
      twitterLink: "https://twitter.com/Lolx88_",
    },
    {
      id: 3,
      name: "LordYamoshi ✪ (@lordyamoshi)",
      role: "Team Leader",
      bio: "Specializes in C#, unity, php, css, js ,sql, python, BBC basic, and c++.",
      image: "https://share.creavite.co/67c3ddf689908441e5523853.gif",
      twitterLink: "https://x.com/LordYamoshiDev",
    },
    {
      id: 4,
      name: "Leeシ (@cloud_46)",
      role: "Programmer",
      bio: "Specializes C++,Luau,JS,HTML,CSS,C# And more.",
      image: "https://share.creavite.co/67c4b60989908441e5523a35.gif",
      twitterLink: "https://x.com/pmi_co56494",
    },
  ]

  private pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "Starter",
      price: "$250",
      description: "For small tasks and quick solutions.",
      features: [
        "Bug fixes & optimizations",
        "Small scripts & utilities",
        "Code review & consultation",
        "Basic automation (e.g., web scraping, data processing)",
        "Up to 1 week of support",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Advanced",
      price: "$750",
      description: "For medium-sized projects and feature development.",
      features: [
        "Everything in Starter",
        "Custom-built scripts & applications",
        "API integration & automation",
        "Database setup & management",
        "1 month of support",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "$1000+",
      description: "For full-scale software solutions and complex projects.",
      features: [
        "Everything in Advanced",
        "Full-stack system development (web, desktop, cloud)",
        "AI & machine learning solutions",
        "Performance & security optimization",
        "Ongoing support & maintenance (custom duration)",
      ],
      popular: false,
    },
  ]

  private contacts: Contact[] = []
  private newsletterSubscribers: NewsletterSubscriber[] = []
  private projectInquiries: ProjectInquiry[] = []

  getTeamMembers(): TeamMember[] {
    return this.teamMembers
  }

  getPricingPlans(): PricingPlan[] {
    return this.pricingPlans
  }

  addContact(contact: Omit<Contact, "id" | "createdAt">): Contact {
    const newContact: Contact = {
      id: this.contacts.length + 1,
      ...contact,
      createdAt: new Date(),
    }
    this.contacts.push(newContact)
    return newContact
  }

  addNewsletterSubscriber(email: string): NewsletterSubscriber {
    const newSubscriber: NewsletterSubscriber = {
      id: this.newsletterSubscribers.length + 1,
      email,
      createdAt: new Date(),
    }
    this.newsletterSubscribers.push(newSubscriber)
    return newSubscriber
  }

  addProjectInquiry(inquiry: Omit<ProjectInquiry, "id" | "createdAt">): ProjectInquiry {
    const newInquiry: ProjectInquiry = {
      id: this.projectInquiries.length + 1,
      ...inquiry,
      createdAt: new Date(),
    }
    this.projectInquiries.push(newInquiry)
    return newInquiry
  }
}

export const db = new Database()

