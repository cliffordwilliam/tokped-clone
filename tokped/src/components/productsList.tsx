"use client";
import Link from "next/link";
import Image from "next/image";
import { baseUrl } from "@/db/c";
import { useEffect, useState } from "react";
import { Product } from "@/db/types";
import InfiniteScroll from "react-infinite-scroll-component";
import { ObjectId } from "mongodb";
interface ProductsListProps {
  token: string;
}
const ProductsList: React.FC<ProductsListProps> = ({ token }) => {
  const fetchProducts = async () => {
    const response = await fetch(`${baseUrl}/api/products`);
    const responseJson = await response.json();
    console.log(responseJson);
    setProducts(responseJson.data);
  };
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchProducts();
  }, []);
  const debounce = (func: Function, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `${baseUrl}/api/products?search=${search}&page=${page}`,
        {
          method: "GET",
        }
      );
      const responseJson = await response.json();
      setProducts(responseJson.data);
    };
    const debouncedFetchProducts = debounce(fetchProducts, 300);
    debouncedFetchProducts();
    // fetchProducts();
  }, [search]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `${baseUrl}/api/products?search=${search}&page=${page}`,
        {
          method: "GET",
        }
      );
      const responseJson = await response.json();
      setProducts(responseJson.data);
    };
    fetchProducts();
  }, [page]);
  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };
  const postWishlist = async (productId: ObjectId) => {
    const response = await fetch(`${baseUrl}/api/wishlists`, {
      method: "POST",
      body: JSON.stringify({
        productId: productId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();
    console.log(responseJson);
  };
  return (
    <>
      <main className="top-fixed-header-push">
        <section>
          <div className="container">
            <h2 className="section-title">
              Berdasarkan pencarianmu{" "}
              <Link className="title-green-link" href={"/"}>
                Lihat Semua
              </Link>
            </h2>
            <div className="icon-text-input-con section-title">
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
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <InfiniteScroll
              dataLength={products.length}
              next={loadMore}
              hasMore={true}
              loader={<></>}
            >
              <div className="grid">
                {products.map((product: Product) => (
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
                      <Link href={`/product/${product.slug}`}>Detail</Link>
                      {token ? (
                        <button
                          onClick={() => {
                            
                            postWishlist(product._id);
                          }}
                        >
                          Add wishlist
                        </button>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </section>
      </main>
    </>
  );
};
export default ProductsList;
