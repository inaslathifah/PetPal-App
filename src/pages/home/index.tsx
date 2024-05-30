import Layout from "@/components/layout";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IProductListData {
  id: number;
  product_picture: string;
  product_name: string;
  price: number;
}

const Home = () => {
  const [data, setData] = useState<IProductListData[]>([]);
  const getAllProducts = async () => {
    const response = await axios.get("https://zyannstore.my.id/products");
    setData(response.data.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  console.log(data);
  return (
    <Layout>
      <div className="w-full h-[440px] bg-gradient-to-r from-[#036DA1] via-[#3487AC] to-[#C6D6CE]">
        <section className="container mx-auto h-full grid grid-cols-2 place-items-center">
          <main className="flex flex-col items-start justify-start gap-4">
            <h1 className="text-4xl font-semibold text-white">
              Kesehatan dan Kebahagiaan untuk Sahabat Setia Anda
            </h1>
            <Link to={"/"} className={buttonVariants({ variant: "outline" })}>
              Get Your Treat
            </Link>
          </main>
          <main>
            <img src="/public/assets/happy-dog-banner.png" alt="" />
          </main>
        </section>
      </div>
      <section className="container mx-auto h-full flex items-start justify-center flex-col gap-y-8 py-6">
        <header className="w-full flex items-start justify-between">
          <div className="grid grid-cols-2 grid-rows-auto max-w-[200px] shadow-2xl rounded-md py-2 px-4 gap-x-4 gap-y-2">
            <h1 className="col-span-2 row-start-1 text-lg font-semibold">
              Category
            </h1>
            <Button
              variant="ghost"
              className="col-start-1 row-start-2 w-max h-max flex items-center justify-center flex-col gap-y-2"
            >
              <img
                src="/public/assets/petshop-icon.png"
                alt=""
                className="w-[50px] ring-2 ring-border rounded-full"
              />
              <h3 className="font-regular">Pet Shop</h3>
            </Button>
            <Button
              variant="ghost"
              className="col-start-2 row-start-2 flex items-center justify-center flex-col gap-y-2 w-max h-max"
            >
              <img
                src="/public/assets/check-up-icon.png"
                alt=""
                className="w-[50px] ring-2 ring-border rounded-full"
              />
              <h3 className="font-regular">Clinic</h3>
            </Button>
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="range">Range</SelectItem>
            </SelectContent>
          </Select>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((items) => {
            return (
              <Link to={"/"} key={items.id}>
                <Card>
                  <CardHeader>
                    <img
                      src={items.product_picture}
                      alt=""
                      className="rounded-sm h-[300px] object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <h1 className="text-base font-semibold">
                      {items.product_name}
                    </h1>
                  </CardContent>
                  <CardFooter>
                    <h3>Rp. {items.price}</h3>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </main>
      </section>
    </Layout>
  );
};

export default Home;
