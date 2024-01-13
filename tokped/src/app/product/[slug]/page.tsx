import Link from "next/link";
import Image from "next/image";
import { baseUrl } from "@/db/c";
import { Product, Response } from "@/db/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Footer from "@/components/footer";
const fetchProductBySlug = async (slug: string): Promise<Response<Product>> => {
  const response = await fetch(`${baseUrl}/api/products/${slug}`, {
    method: "GET",
  });
  const responseJson = await response.json();
  return responseJson;
};
export default async function Page({ params }: { params: { slug: string } }) {
  const response = await fetchProductBySlug(params.slug);
  const product = response.data as Product;

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
              <form
                action={async () => {
                  "use server";
                  cookies().get("token") && cookies().delete("token");
                  redirect("/login");
                }}
              >
                <button className="button">Logout</button>
              </form>
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
            <div className="grid-3">
              <Left key={product._id.toString()} product={product} />
              <div>
                <h1 className="detail-title">{product.name}</h1>
                <p>{product.description}</p>
                <p className="detail-price">Rp{product.price}</p>
                <div className="detail-tag-con">
                  {product.tags.map((tag: string, index: number) => (
                    <p key={index}>{tag}</p>
                  ))}
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

// this is on client??
const Left = ({ product }: { product: Product }) => (
  <div className="detail-left-con">
    <Image
      className="detail-image"
      src={product.thumbnail}
      width={348}
      height={348}
      alt="Picture of the author"
    />
    <div className="thumbnail-left-con">
      {product.images.map((image: string, index: number) => (
        <Image
          key={index}
          className="detail-image"
          src={image}
          width={60}
          height={60}
          alt="Picture of the author"
        />
      ))}
    </div>
  </div>
);
