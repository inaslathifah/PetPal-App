import { 
    useEffect, 
    useState 
} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
    Card, 
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import Layout from "@/components/layout";
import { getDetailProduct } from "@/apis/detail-product/api";
import { DetailProductType } from "@/apis/detail-product/types";
import NumberFormatter from "@/components/number-formatter";

// const initialDetailProduct: DetailProductType = {
//     product_name: "",
//     product_picture: "",
//     description: "",
//     price: 0,
//     stock: 0,
//   };

const DetailProducts: React.FC = () => {
    const [detailProduct, setDetailProduct] = useState<DetailProductType | null>(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchDetailProduct = async () => {
            try {
                const detailProduct = await getDetailProduct(5);
                setDetailProduct(detailProduct);
            } catch (error) {
                console.error("Failed to fetch product details:", error);
            }
        };
        fetchDetailProduct();
    }, []);

    console.log(detailProduct);

    const handleIncrement = () => {
        setQuantity((quantity) => quantity + 1);
    };

    const handleDecrement = () => {
        setQuantity((quantity) => Math.max(quantity - 1, 1));
    };

    return (
        <Layout>
            <Card className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row items-center mt-20">
                <img 
                    src={`${detailProduct?.product_picture}`} 
                    alt={`${detailProduct?.product_name}`} 
                    className="w-full md:w-80 h-auto object-cover rounded-lg"
                />
                <CardContent className="w-full md:w-1/2 md:ml-8">
                    <CardTitle className="text-2xl font-bold mb-2">
                        {`${detailProduct?.product_name}`}
                    </CardTitle>
                    <span className="text-xl font-semibold text-gray-700 mb-4">
                        <NumberFormatter value={`${detailProduct?.price}`}/>
                    </span>
                    <span className="text-gray-600 mb-4 mr-2">
                        {`${detailProduct?.description}`}</span>
                    <div className="flex items-center mb-4">
                        <span className="mr-2">Stock:</span>
                        <span className="font-bold">{`${detailProduct?.stock}`}</span>
                    </div>
                    <div className="flex items-center mb-4 space-x-2">
                        <Button variant="outline" onClick={handleDecrement}>-</Button>                      
                        <Input 
                            type="number" 
                            className="text-center w-14 border-t border-b border-gray-300 focus:outline-none"
                            value={quantity}
                            readOnly
                        />
                        <Button variant="outline" onClick={handleIncrement}>+</Button>
                    </div>
                    <Button className="w-full bg-blue-500 text-white py-2 rounded">Pay Now</Button>
                </CardContent>
            </Card>
        </Layout>
    );
};

export default DetailProducts;
