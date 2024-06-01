import ClinicCard from "@/components/clinic-card";
import Layout from "@/components/layout";

const ClinicLists = () => {
  return (
    <Layout>
      <div className="w-4/5 mx-auto my-8">
        <h1 className="text-2xl font-bold my-5">Clinic Lists</h1>
        <div className="w-full grid grid-cols-2 gap-5">
          <ClinicCard
            image="https://source.unsplash.com/random?hospital"
            title="Clinic 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis cupiditate iste tempore quos alias eius aliquam eaque quas sapiente?"
          />
          <ClinicCard
            image="https://source.unsplash.com/random?hospital"
            title="Clinic 2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis cupiditate iste tempore quos alias eius aliquam eaque quas sapiente?"
          />
          <ClinicCard
            image="https://source.unsplash.com/random?hospital"
            title="Clinic 3"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis cupiditate iste tempore quos alias eius aliquam eaque quas sapiente?"
          />
          <ClinicCard
            image="https://source.unsplash.com/random?hospital"
            title="Clinic 4"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis cupiditate iste tempore quos alias eius aliquam eaque quas sapiente?"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ClinicLists;
