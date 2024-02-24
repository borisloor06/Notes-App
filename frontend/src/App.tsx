import Footer from "./src/Components/Footer/Footer";
import Navbar from "./src/Components/Navbar/Navbar";
import Layout from "./src/Pages/Layout/Layout";

function App() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <Layout />
      <Footer />
    </main>
  );
}

export default App;
