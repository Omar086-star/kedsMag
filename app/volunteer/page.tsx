//app/volunteer/page.tsx

import VolunteerForm from "@/components/VolunteerForm"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12">
        <Header/>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-6">انضم لمتطوعي حملة دير العز</h1>
        <p className="text-center text-muted-foreground mb-10">
          عبّئ النموذج التالي وسنتواصل معك عند توافق الفرص مع مهاراتك وتفرّغك.
        </p>

        <VolunteerForm />
      </div>
      <Footer/>
    </div>
  )
}
