import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IProductListData } from "../../utils/apis/products";

interface ProductListProps {
  data: IProductListData[];
}

const ProductList = ({ data }: ProductListProps) => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((item) => (
        <Link to={"/"} key={item.id}>
          <Card>
            <CardHeader>
              <img
                src={item.product_picture}
                alt=""
                className="rounded-sm h-[300px] object-cover"
              />
            </CardHeader>
            <CardContent>
              <h1 className="text-base font-semibold">{item.product_name}</h1>
            </CardContent>
            <CardFooter>
              <h3>Rp. {item.price}</h3>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </main>
  );
};

export default ProductList;
