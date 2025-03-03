import CustomCommissionForm from "@/components/custom-commission-form"

export default function CustomCommissionPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Custom Commission</h1>
        <div className="max-w-2xl mx-auto">
          <CustomCommissionForm />
        </div>
      </div>
    </div>
  )
}

