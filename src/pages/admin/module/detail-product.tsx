import Layout from "@/components/layout";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const DetailProductByAdmin = () => {
  return (
    <Layout>
      <div className="container mx-auto h-full pt-20 px-2">
        <Card className="max-w-[900px] grid sm:grid-cols-2 grid-cols-1 py-2 px-1 mx-auto">
          <figure className="max-w-[540px] h-full flex items-start justify-center mx-auto">
            <img
              src="/public/assets/auth-image.png"
              alt=""
              className="w-[80%]"
            />
          </figure>
          <div className="w-full h-full flex items-start justify-center flex-col">
            <div className="w-full flex items-start justify-center flex-col gap-y-2">
              <h1 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
                Pedigree
              </h1>
              <h3 className="text-base font-medium sm:text-lg lg:text-xl">
                Rp 150.000
              </h3>
              <p className="text-base font-normal lg:text-lg">
                Pedigree baik untuk kesehatan kulit dan membuat bulu bersinar.
                Menjaga kesehatan dan kekuatan tulang. Menjaga kesehatan
                pencernaan anjing. Membuat otot lebih kuat. Mengandung nutrisi
                tepat untuk membangun sistem kekebalan tubuh yang baik
              </p>
              <p className="text-base font-medium lg:text-lg">Stock: 1</p>
            </div>
            <div className="flex items-center justify-start gap-x-4 mt-6 sm:mt-auto">
              <Button variant={"destructive"}>Delete</Button>
              <Link
                to="/"
                className={`${buttonVariants({
                  variant: "default",
                })} bg-[#036DA1] hover:bg-[#036DA1] hover:bg-opacity-90`}
              >
                Edit
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default DetailProductByAdmin;
