import { Shield, Truck, Award } from "lucide-react"

export function SupplementsHero() {
  return (
    <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl font-bold mb-4 text-balance">Premium Supplements</h1>
          <p className="text-xl text-orange-50 leading-relaxed">
            Fuel your fitness journey with high-quality supplements backed by science. From protein powders to
            pre-workouts, we have everything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Quality Guaranteed</h3>
              <p className="text-sm text-orange-50">Third-party tested for purity</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Free Shipping</h3>
              <p className="text-sm text-orange-50">On orders over $50</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Expert Approved</h3>
              <p className="text-sm text-orange-50">Recommended by professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
