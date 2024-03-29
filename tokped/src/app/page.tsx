import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Situs Jual Beli Online Terlengkap, Mudah & Aman | Tokped",
  description: "Generated by create next app",
};
import { cookies } from "next/headers";
import { baseUrl } from "@/db/c";
import { Product, Response } from "@/db/types";
import Footer from "@/components/footer";
const fetchProducts = async (): Promise<Response<Product[]>> => {
  const response = await fetch(`${baseUrl}/api/products`);
  const data = await response.json();
  return data;
};
export default async function Page() {
  const response = await fetchProducts();
  const products = response.data as Product[];

  const first10Products = products.slice(0, 10);

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="link-icon-con mra">
            <Image
              className="header-top-icon"
              src="/phone.svg"
              width={32}
              height={32}
              alt="Picture of the author"
            />
            <Link className="header-top-item" href={"/"}>
              Download Tokopedia App
            </Link>
          </div>
          <div className="header-top-menu-con">
            <Link className="header-top-item" href={"/"}>
              Tentang Tokopedia
            </Link>
            <Link className="header-top-item" href={"/"}>
              Mitra Tokopedia
            </Link>
            <Link className="header-top-item" href={"/"}>
              Mulai Berjualan
            </Link>
            <Link className="header-top-item" href={"/"}>
              Promo
            </Link>
            <Link className="header-top-item" href={"/"}>
              Tokopedia Care
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <Image
            className="header-top-icon"
            src="/logo.svg"
            width={150}
            height={40}
            alt="Picture of the author"
          />
          <button className="header-bot-category">Kategori</button>
          <div className="header-bot-category-dropdown">
            <div className="header-dropdown-top">
              <Link className="header-dropdown-top-item" href={"/"}>
                Belanja
              </Link>
              <Link className="header-dropdown-top-item" href={"/"}>
                Featured
              </Link>
              <Link className="header-dropdown-top-item" href={"/"}>
                Kebutuhan Harian
              </Link>
              <Link className="header-dropdown-top-item" href={"/"}>
                Tagihan
              </Link>
              <Link className="header-dropdown-top-item" href={"/"}>
                Top-Up
              </Link>
              <Link className="header-dropdown-top-item" href={"/"}>
                Tokopedia Keuangan
              </Link>
              <Link className="header-dropdown-top-item" href={"/"}>
                Pajak & Pedidikan
              </Link>
              <Link className="header-dropdown-top-item" href={"/"}>
                Travel & Entertainment
              </Link>
              <Link className="header-dropdown-top-item" href={"/"}>
                Halal Corner
              </Link>
              <Link className="header-dropdown-top-item" href={"/"}>
                Lain-Lain
              </Link>
            </div>
            <div className="header-dropdown-bottom-con">
              <div className="header-dropdown-bottom-left">
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Rumah Tangga
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Audio, Kamera & Elektronik Lainnya
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Buku
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Dapur
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Elektronik
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Fashion Anak & Bayi
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Fashion Muslim
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Fashion Pria
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Fashion Wanita
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Film & Music
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Gaming
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Headphone & Tablet
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Ibu & Bayi
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Kecantikan
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Kesehatan
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Komputer & Laptop
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Logam Mulia
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Mainan & Hobi
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Makanan & Minuman
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Office & Stationery
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Olahraga
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Otomotif
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Perawatan Hewan
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Perawatan Tubuh
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Perlengkapan Pesta
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Pertukangan
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Produk Lainnya
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Properti
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Ticket, Travel, Voucher
                </Link>
                <Link className="header-dropdown-bottom-left-item" href={"/"}>
                  Wedding
                </Link>
              </div>
              <div className="header-dropdown-bottom-right">
                <div className="link-icon-con">
                  <Image
                    className="header-top-icon"
                    src="/cart.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                  <h2>Rummah Tangga</h2>
                </div>
                <div className="header-dropdown-bottom-right-mansory">
                  <div className="header-mansory-item">
                    <Link className="mansory-link-top" href={"/"}>
                      Dekorasi
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                  </div>
                  <div className="header-mansory-item">
                    <Link className="mansory-link-top" href={"/"}>
                      Dekorasi
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                  </div>
                  <div className="header-mansory-item">
                    <Link className="mansory-link-top" href={"/"}>
                      Dekorasi
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                  </div>
                  <div className="header-mansory-item">
                    <Link className="mansory-link-top" href={"/"}>
                      Dekorasi
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                  </div>
                  <div className="header-mansory-item">
                    <Link className="mansory-link-top" href={"/"}>
                      Dekorasi
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                    <Link className="mansory-link" href={"/"}>
                      Cover Kipas Angin
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom-text-input-menu-con">
            <div className="icon-text-input-con">
              <Image
                className="header-top-icon"
                src="/search.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <input
                className="header-dropdown-top-text-input"
                type="text"
                placeholder="Cari di Tokopedia"
              />
            </div>
            <div className="header-bottom-menu-con">
              <Link className="header-bottom-menu-item" href={"/"}>
                Kemeja
              </Link>
              <Link className="header-bottom-menu-item" href={"/"}>
                Sepeda
              </Link>
              <Link className="header-bottom-menu-item" href={"/"}>
                Macbook
              </Link>
            </div>
          </div>
          <Image
            className="header-top-icon"
            src="/cart.svg"
            width={24}
            height={24}
            alt="Picture of the author"
          />
          <div className="vertical-line"></div>
          <div className="header-bottom-auth-button-con">
            <div className="header-auth-button-con">
              <Link className="button" href={"/product"}>
                Produk
              </Link>
              {!cookies().get("token") ? (
                <Link className="secondary-button" href={"/login"}>
                  Masuk
                </Link>
              ) : null}
              {!cookies().get("token") ? (
                <Link className="button" href={"/register"}>
                  Daftar
                </Link>
              ) : null}
              {cookies().get("token") ? (
                <Link className="button" href={"/wishlist"}>
                  Wishlist
                </Link>
              ) : null}
            </div>
            <div className="link-icon-con">
              <Image
                className="header-top-icon"
                src="/pin.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <p>
                Dikirim ke <b>Jakarta Pusat</b>
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="top-fixed-header-push">
        <section>
          <div className="container">
            <div className="carousel">
              <Image
                className="slide"
                src="/avoskin.webp"
                width={1208}
                height={302}
                alt="Picture of the author"
              />
              <Image
                className="slide-2"
                src="/dreame.webp"
                width={1208}
                height={302}
                alt="Picture of the author"
              />
            </div>
          </div>
        </section>
        <hr className="container" />
        <section>
          <div className="container">
            <h2 className="section-title">
              Berdasarkan pencarianmu{" "}
              <Link className="title-green-link" href={"/product"}>
                Lihat Semua
              </Link>
            </h2>
            <div className="grid">
              {first10Products.map((product: Product) => (
                <div key={product._id.toString()} className="card">
                  <Image
                    className="card-image"
                    src={product.thumbnail}
                    width={188}
                    height={188}
                    alt="Product Thumbnail"
                  />
                  <div className="card-body">
                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-price">Rp{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr className="container" />
        <section>
          <div className="container">
            <article>
              <h2 className="home-article-title">
                Nikmati Mudahnya Jualan Online di Tokopedia
              </h2>
              <p className="home-article-p">
                Tokopedia merupakan salah satu situs jual beli online di
                Indonesia yang perkembangannya terhitung cepat dan memiliki
                tujuan untuk memudahkan setiap masyarakat di Indonesia, agar
                dapat melakukan aneka transaksi jual beli secara online. Selain
                kamu dapat menikmati proses pembelian aneka produk lebih mudah
                dan efisien, kamu para seller juga dapat melakukan jualan online
                di Tokopedia. Kamu bisa bergabung dengan komunitas khusus
                Tokopedia Seller bagi kamu yang ingin memulai bisnis dan jualan
                online atau ingin memperluas bisnis yang sedang kamu jalankan.
                Proses pendaftaran untuk menjadi Tokopedia Seller juga sangat
                mudah cukup dengan memasukkan data diri, nama toko, alamat toko
                setelah itu kamu akan langsung terdaftar sebagai Tokopedia
                Seller. Kamu juga dapat melakukan upgrade akun toko kamu menjadi
                Power Merchant untuk menjangkau pelanggan Tokopedia yang lebih
                luas lagi, sehingga bisnis online kamu semakin laris. Keuntungan
                Power Merchant adalah kamu dapat memberikan fitur Bebas Ongkir
                sehingga dapat menarik lebih banyak lagi pelanggan, lalu kamu
                dapat menikmati fitur TopAds yang dapat menjangkau masyarakat
                pengguna Tokopedia lebih banyak lagi dengan modal yang sangat
                minim mulai dari Rp 25 ribuan, hingga toko kamu akan tampil
                lebih menarik lagi serta dapat meningkatkan kepercayaan pembeli.
                Ayo mulai jualan online di Tokopedia dan mulai kembangkan
                usahamu secara online bersama Tokopedia.
              </p>
              <p className="home-article-p">
                Tokopedia merupakan salah satu e-commerce di Indonesia yang
                menawarkan berbagai macam produk dan menjadikannya sebagai
                marketplace pilihan bagi banyak masyarakat Indonesia. Tidak
                hanya itu, kehadiran Tokopedia membuat pengalaman belanja online
                para penggunanya menjadi lebih mudah, aman, dan efisien.
                Tersedia berbagai fitur dan metode pembayaran yang dapat Anda
                pilih, untuk memastikan kegiatan belanja Anda dapat dilakukan
                senyaman mungkin. Baik itu melalui transfer bank yang bisa
                dilakukan menggunakan rekening dari berbagai bank yang tersedia,
                uang elektronik seperti OVO, hingga cicilan. Sistem berbelanja
                di Tokopedia terintegrasi pula dengan sistem beberapa jasa
                ekspedisi. Kerjasama yang dijalin ini memungkinkan Tokopedia
                untuk memberikan penawaran pengiriman gratis, dan memungkinkan
                pengguna yang berbelanja untuk terus melacak status pengiriman
                produk yang mereka beli. Jadi, produk apapun yang dibeli di
                Tokopedia baik itu pakaian bayi, aksesoris mobil, aksesoris
                kamera, celana, jam, hingga peralatan elektronik seperti kabel
                dan peralatan gaming, atau makanan sekali pun dapat terus Anda
                lacak keberadaannya untuk memastikan akan sampai dengan aman.
                Data pribadi dan seluruh transaksi yang sudah maupun yang akan
                Anda lakukan di Tokopedia dilindungi oleh kebijakan privasi
                Tokopedia, sehingga tak perlu khawatir data Anda akan jatuh ke
                pihak yang tidak bertanggungjawab dan/atau disalahgunakan.
                Karena faktor-faktor tersebut lah, Tokopedia menjadi solusi
                untuk belanja online dengan mudah dan aman.
              </p>
            </article>
            <article>
              <h2 className="home-article-title">
                Nikmati Mudahnya Jualan Online di Tokopedia
              </h2>
              <p className="home-article-p">
                Tokopedia merupakan salah satu situs jual beli online di
                Indonesia yang perkembangannya terhitung cepat dan memiliki
                tujuan untuk memudahkan setiap masyarakat di Indonesia, agar
                dapat melakukan aneka transaksi jual beli secara online. Selain
                kamu dapat menikmati proses pembelian aneka produk lebih mudah
                dan efisien, kamu para seller juga dapat melakukan jualan online
                di Tokopedia. Kamu bisa bergabung dengan komunitas khusus
                Tokopedia Seller bagi kamu yang ingin memulai bisnis dan jualan
                online atau ingin memperluas bisnis yang sedang kamu jalankan.
                Proses pendaftaran untuk menjadi Tokopedia Seller juga sangat
                mudah cukup dengan memasukkan data diri, nama toko, alamat toko
                setelah itu kamu akan langsung terdaftar sebagai Tokopedia
                Seller. Kamu juga dapat melakukan upgrade akun toko kamu menjadi
                Power Merchant untuk menjangkau pelanggan Tokopedia yang lebih
                luas lagi, sehingga bisnis online kamu semakin laris. Keuntungan
                Power Merchant adalah kamu dapat memberikan fitur Bebas Ongkir
                sehingga dapat menarik lebih banyak lagi pelanggan, lalu kamu
                dapat menikmati fitur TopAds yang dapat menjangkau masyarakat
                pengguna Tokopedia lebih banyak lagi dengan modal yang sangat
                minim mulai dari Rp 25 ribuan, hingga toko kamu akan tampil
                lebih menarik lagi serta dapat meningkatkan kepercayaan pembeli.
                Ayo mulai jualan online di Tokopedia dan mulai kembangkan
                usahamu secara online bersama Tokopedia.
              </p>
              <p className="home-article-p">
                Tokopedia merupakan salah satu e-commerce di Indonesia yang
                menawarkan berbagai macam produk dan menjadikannya sebagai
                marketplace pilihan bagi banyak masyarakat Indonesia. Tidak
                hanya itu, kehadiran Tokopedia membuat pengalaman belanja online
                para penggunanya menjadi lebih mudah, aman, dan efisien.
                Tersedia berbagai fitur dan metode pembayaran yang dapat Anda
                pilih, untuk memastikan kegiatan belanja Anda dapat dilakukan
                senyaman mungkin. Baik itu melalui transfer bank yang bisa
                dilakukan menggunakan rekening dari berbagai bank yang tersedia,
                uang elektronik seperti OVO, hingga cicilan. Sistem berbelanja
                di Tokopedia terintegrasi pula dengan sistem beberapa jasa
                ekspedisi. Kerjasama yang dijalin ini memungkinkan Tokopedia
                untuk memberikan penawaran pengiriman gratis, dan memungkinkan
                pengguna yang berbelanja untuk terus melacak status pengiriman
                produk yang mereka beli. Jadi, produk apapun yang dibeli di
                Tokopedia baik itu pakaian bayi, aksesoris mobil, aksesoris
                kamera, celana, jam, hingga peralatan elektronik seperti kabel
                dan peralatan gaming, atau makanan sekali pun dapat terus Anda
                lacak keberadaannya untuk memastikan akan sampai dengan aman.
                Data pribadi dan seluruh transaksi yang sudah maupun yang akan
                Anda lakukan di Tokopedia dilindungi oleh kebijakan privasi
                Tokopedia, sehingga tak perlu khawatir data Anda akan jatuh ke
                pihak yang tidak bertanggungjawab dan/atau disalahgunakan.
                Karena faktor-faktor tersebut lah, Tokopedia menjadi solusi
                untuk belanja online dengan mudah dan aman.
              </p>
            </article>
            <div className="grid-3">
              <div className="home-feature-card">
                <Image
                  src="/home-feat.jpg"
                  width={110}
                  height={111}
                  alt="Picture of the author"
                />
                <div className="home-feature-card-body">
                  <h3 className="home-feature-card-title">Transparan</h3>
                  <p className="home-feature-card-p">
                    Pembayaran Anda baru diteruskan ke penjual setelah barang
                    Anda terima
                  </p>
                </div>
              </div>
              <div className="home-feature-card">
                <Image
                  src="/home-feat.jpg"
                  width={110}
                  height={111}
                  alt="Picture of the author"
                />
                <div className="home-feature-card-body">
                  <h3 className="home-feature-card-title">Transparan</h3>
                  <p className="home-feature-card-p">
                    Pembayaran Anda baru diteruskan ke penjual setelah barang
                    Anda terima
                  </p>
                </div>
              </div>
              <div className="home-feature-card">
                <Image
                  src="/home-feat.jpg"
                  width={110}
                  height={111}
                  alt="Picture of the author"
                />
                <div className="home-feature-card-body">
                  <h3 className="home-feature-card-title">Transparan</h3>
                  <p className="home-feature-card-p">
                    Pembayaran Anda baru diteruskan ke penjual setelah barang
                    Anda terima
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
