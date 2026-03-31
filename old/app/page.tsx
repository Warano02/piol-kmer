import Footer from "@/components/Footer"

import HomeClient from "./HomeClient"

function Home() {

   return (
    <div className="flex flex-col gap-1">
      <HomeClient />
      <Footer />
    </div>
  )
}



export default Home