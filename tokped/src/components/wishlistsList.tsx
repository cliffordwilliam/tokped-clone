"use client";
import Link from "next/link";
import Image from "next/image";
import { baseUrl } from "@/db/c";
import { useEffect, useState } from "react";
import { Wishlist, WishlistOutput } from "@/db/types";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

export default function WishlistList() {
  const fetchWishlist = async () => {
    const response = await fetch(`${baseUrl}/api/wishlists`);
    const responseJson = await response.json();
    console.log(responseJson.data);
    setWishlists(responseJson.data);
  };
  
  const [wishlists, setWishlists] = useState([]);
  
  useEffect(() => {
    fetchWishlist();
  }, []);
  
  const delWishlist = async (productId: ObjectId) => {
    const response = await fetch(`${baseUrl}/api/wishlists`, {
      method: "DELETE",
      body: JSON.stringify({
        productId: productId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();
    console.log(responseJson);
    fetchWishlist();
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
            <div className="grid">
              {wishlists.map((wishlist: WishlistOutput) => (
                <div key={wishlist._id.toString()} className="card">
                  <Image
                    className="card-image"
                    src={wishlist.product.thumbnail}
                    width={188}
                    height={188}
                    alt="Product Thumbnail"
                  />
                  <div className="card-body">
                    <h3 className="card-title">{wishlist.product.name}</h3>
                    <p className="card-price">Rp{wishlist.product.price}</p>
                    <Link href={`/product/${wishlist.product._id}`}>
                      Detail
                    </Link>
                    <button
                      onClick={() => {
                        delWishlist(wishlist.product._id);
                      }}
                    >
                      Del wishlist
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
