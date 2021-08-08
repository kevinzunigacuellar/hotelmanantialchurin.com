import Navbar from 'components/Layout/Navbar'
import Footer from 'components/Layout/Footer'
export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen justify-start'>
      <Navbar />
      <main className='container mx-auto px-2 py-8'>{children}</main>
      <Footer />
    </div>
  )
}
