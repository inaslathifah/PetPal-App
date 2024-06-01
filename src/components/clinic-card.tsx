import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FC } from "react";

interface clinicCardProps {
  image: string;
  title: string;
  description: string;
}

const ClinicCard: FC<clinicCardProps> = ({ image, title, description }) => {
  return (
    <div>
      <Card className="flex p-3">
        <div className="w-full">
          <img src={image} alt="clinic" className="w-full h-full object-cover rounded-md" />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ClinicCard;
