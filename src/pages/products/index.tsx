import Layout from "@/components/layout";
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

const AllProducts = () => {
  const [data, setData] = useState<IProductListData[]>([]);
  const fetchData = async () => {
    const response = await axios.get("https://zyannstore.my.id/products");
    setData(response.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto h-full py-8 flex items-end justify-center flex-col gap-y-8">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Default</SelectItem>
            <SelectItem value="dark">Range</SelectItem>
            <SelectItem value="system">Price</SelectItem>
          </SelectContent>
        </Select>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
        </section>
      </div>
    </Layout>
  );
};

export default AllProducts;
