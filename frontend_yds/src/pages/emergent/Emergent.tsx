import "./Emergent.css";
import Layout from "./layout/layout";
import About from "./components/About";
import Menu from "./components/Menu";
import Delights from "./components/Delight";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Hero from "./components/Hero";


// const Hero = () => {
//   return (
//     <section
//       id="home"
//       // className="h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-midnight-blue via-dark-accent to-dolci-blue block"
//       className="h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-midnight-blue via-dark-accent to-dolci-blue block"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white animate-pulse"></div>
//         <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-white animate-pulse animation-delay-200"></div>
//         <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full bg-white animate-pulse animation-delay-400"></div>
//         <div className="absolute bottom-40 right-10 w-24 h-24 rounded-full bg-white animate-pulse animation-delay-600"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4 pt-45">
//         <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
//           Since 2008,
//           <br />
//           Worth
//           <br />
//           Discovering
//         </h1>

//         <p className="font-montserrat text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
//           Where flavor meets ambience in the heart of Bangalore
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button
//             className="btn btn-primary text-lg px-8 py-4"
//             onClick={() =>
//               document
//                 .getElementById("location")
//                 ?.scrollIntoView({ behavior: "smooth" })
//             }
//           >
//             Visit Our Café
//           </button>
//           <button
//             className="btn btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-midnight-blue"
//             onClick={() =>
//               document
//                 .getElementById("menu")
//                 ?.scrollIntoView({ behavior: "smooth" })
//             }
//           >
//             Explore Menu
//           </button>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
//         <div className="flex flex-col items-center">
//           <span className="font-montserrat text-sm mb-2 opacity-75">
//             Scroll to explore
//           </span>
//           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Emergent = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Menu />
        <Delights />
        <Testimonials />
        <Location />
      </Layout>
    </>
  );
};

export default Emergent;
