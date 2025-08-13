import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import WhatsAppChat from '@/components/Whatsapp';
import FacebookChat from '@/components/Facebook';


export const metadata = {
  title: "STUDYSURE",
  description: "STUDYSURE - Your comprehensive study companion for academic success",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <SmoothScroll>
          <div className="min-h-screen">
            <Navbar />
            {children}
            <Footer />
            <WhatsAppChat />
            <FacebookChat />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
