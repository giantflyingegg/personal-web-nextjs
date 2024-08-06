import Banner from '@/components/Banner'
import Header from '@/components/Header'
import About from '@/components/About'
import WW3WS from '@/components/WW3WS'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Banner />
      <Header />
      <About />
      <WW3WS />
      <Footer />
    </main>
  )
}