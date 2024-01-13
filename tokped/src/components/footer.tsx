import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className="home-footer">
        <div className="container home-footer-container">
          <div className="home-footer-mansory">
            <div className="home-footer-item">
              <h3 className="home-footer-item-title">Tokopedia</h3>
              <ul className="home-footer-item-ul">
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Tentang Tokopedia
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Hak Kekayaan Intelektual
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Karir
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Bridestory
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Tokopedia Parents
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Mitra Blog
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Tokopedia Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Tokopedia B2B Digital
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Tokopedia Marketing Solutions
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Kalkulator Indeks Masa Tubuh
                  </Link>
                </li>
              </ul>
            </div>
            <div className="home-footer-item">
              <h3 className="home-footer-item-title">Beli</h3>
              <ul className="home-footer-item-ul">
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Tagihan & Top Up
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Tukar Tambah Handphone
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Tokopedia COD
                  </Link>
                </li>
              </ul>
            </div>
            <div className="home-footer-item">
              <h3 className="home-footer-item-title">Jual</h3>
              <ul className="home-footer-item-ul">
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Pusat Edukasi Seller
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Mitra Toppers
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Daftar Official Store
                  </Link>
                </li>
              </ul>
            </div>
            <div className="home-footer-item">
              <h3 className="home-footer-item-title">Bantuan dan Panduan</h3>
              <ul className="home-footer-item-ul">
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Tokopedia Care
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Syarat dan Ketentuan
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link className="home-footer-item-link" href={"/"}>
                    Mitra
                  </Link>
                </li>
              </ul>
            </div>
            <div className="home-footer-item">
              <h3 className="home-footer-item-title">Keamanan & Privasi</h3>
              <ul className="home-footer-item-ul-horizontal">
                <li>
                  <Link className="" href={"/"}>
                    <Image
                      src="/license.webp"
                      width={71}
                      height={48}
                      alt="Picture of the author"
                    />
                  </Link>
                </li>
                <li>
                  <Link className="" href={"/"}>
                    <Image
                      src="/license.webp"
                      width={71}
                      height={48}
                      alt="Picture of the author"
                    />
                  </Link>
                </li>
                <li>
                  <Link className="" href={"/"}>
                    <Image
                      src="/license.webp"
                      width={71}
                      height={48}
                      alt="Picture of the author"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="home-footer-item">
              <h3 className="home-footer-item-title">Ikuti Kami</h3>
              <ul className="home-footer-item-ul-horizontal">
                <li>
                  <Link className="" href={"/"}>
                    <Image
                      src="/fb.svg"
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                  </Link>
                </li>
                <li>
                  <Link className="" href={"/"}>
                    <Image
                      src="/fb.svg"
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                  </Link>
                </li>
                <li>
                  <Link className="" href={"/"}>
                    <Image
                      src="/fb.svg"
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                  </Link>
                </li>
                <li>
                  <Link className="" href={"/"}>
                    <Image
                      src="/fb.svg"
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="home-footer-item home-footer-item-flex-1">
              <Image
                src="/footer-img.png"
                width={460}
                height={223}
                alt="Picture of the author"
              />
              <div className="home-footer-app-container">
                <Image
                  src="/icon-download-android.svg"
                  width={135}
                  height={40}
                  alt="Picture of the author"
                />
                <Image
                  src="/icon-download-android.svg"
                  width={135}
                  height={40}
                  alt="Picture of the author"
                />
                <Image
                  src="/icon-download-android.svg"
                  width={135}
                  height={40}
                  alt="Picture of the author"
                />
              </div>
              <div className="home-footer-copyright">
                © 2009 - 2024, PT. Tokopedia.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
