import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ServiceRequests = () => {
  return (
    <Layout>
      <div className="container mx-auto h-full py-20 flex items-start justify-start flex-col gap-y-4">
        <figure className="flex items-center justify-center flex-col gap-x-4 mx-auto lg:items-start lg:justify-start lg:flex-row lg:mx-0">
          <div>
            <img
              src="/public/assets/auth-image.png"
              alt=""
              className="w-[100px] h-[100px] ring-2 rounded-full"
            />
          </div>
          <div className="flex items-center justify-center flex-col lg:items-start lg:justify-startj">
            <h1 className="text-lg font-semibold">Drh. H.Naim</h1>
            <p>Bogor,Available on weekdays</p>
            <Button className="mt-1">Edit Profile</Button>
          </div>
        </figure>
        <header className="mt-8">
          <h1 className="text-xl font-semibold">List Service Request</h1>
        </header>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">No</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Service nama</TableHead>
              <TableHead>Jenis</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Persutujuan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Anggi</TableCell>
              <TableCell>Vaccination</TableCell>
              <TableCell>Kunjungan</TableCell>
              <TableCell>25-02-2024</TableCell>
              <TableCell>Not Accepted</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Layout>
  );
};

export default ServiceRequests;
