import Nav from "../components/Nav";
import Card from "../components/Card";
import Footer from "../components/Footer";
const daftaranggota = [
  { gambar: "../img/ikan1.jpg", title: "Ikan Yellow Tank", content: "Ukuran Medium" },
  { gambar: "../img/ikan2.webp", title: "Ikan Lattersix", content: "Ukuran Big" },
  { gambar: "../img/ikan3.jpg", title: "Ikan Botana Biru", content: "Ukuran Medium" },
  { gambar: "../img/ikan4.webp", title: "Ikan ClownFish", content: "Ukuran Small" },
  { gambar: "../img/ikan5.jpg", title: "Ikan Botana Naso", content: "Ukuran Big" },
  { gambar: "../img/ikan6.jpg", title: "Ikan Anularis", content: "Ukuran Big" },
  { gambar: "../img/ikan7.jpg", title: "Ikan Botana Zebra", content: "Ukuran Small" },
  { gambar: "../img/ikan8.jpg", title: "Ikan Capungan Slayer", content: "Ukuran Small" },
];

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          {daftaranggota.map((agt, indeks) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-6">
              <Card gambar={agt.gambar} title={agt.title} content={agt.content} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
