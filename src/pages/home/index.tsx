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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

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
      <div className="w-full h-auto bg-gradient-to-r from-[#036DA1] via-[#3487AC] to-[#C6D6CE]">
        <section className="container mx-auto h-full grid grid-cols-1 lg:grid-cols-2 place-items-center pt-8">
          <main className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4">
            <h1 className="text-2xl lg:text-4xl font-semibold text-center lg:text-start text-white">
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
        <header className="w-full flex flex-col items-start sm:items-end justify-between gap-y-4 sm:flex-row">
          <Tabs
            defaultValue="account"
            className="w-[400px] h-full flex items-start justify-start flex-col gap-y-2"
          >
            <h1 className="text-base font-semibold">Category</h1>
            <TabsList>
              <TabsTrigger
                value="account"
                className="flex items-center justify-center flex-col gap-y-[2px]"
              >
                <Avatar>
                  <AvatarImage src="/public/assets/petshop-icon.png" />
                </Avatar>
                <h1>Pet Shop</h1>
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="flex items-center justify-center flex-col gap-y-[2px]"
              >
                <Avatar>
                  <AvatarImage src="/public/assets/check-up-icon.png" />
                </Avatar>
                <h1>Clinic</h1>
              </TabsTrigger>
            </TabsList>
          </Tabs>
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
