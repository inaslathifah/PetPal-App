import Layout from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { editUserSchema } from "@/utils/apis/user/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { CameraIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

type coordinateType = {
  lat: number;
  lng: number;
};

const EditProfileAdmin = () => {
  const [map, setMap] = useState<any>(null);
  const [coords, setCoords] = useState<coordinateType>({ lat: 0, lng: 0 });

  useEffect(() => {
    if (!map) return;

    map.addEventListener("click", (e: any) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
  }, [map]);

  const { lat, lng } = coords;

  const customIcon = new Icon({
    iconUrl: "../../../public/assets/placeholder.png",
    iconSize: [38, 38],
  });

  const form = useForm<z.infer<typeof editUserSchema>>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      fullname: "",
      email: "",
      alamat: "",
      koordinat: "",
      phone: "",
    },
  });

  useEffect(() => {
    form.setValue("koordinat", `${lat?.toFixed(3)}, ${lng?.toFixed(3)}` as string);
  }, [lat, lng]);

  const inputElementWatch = form.watch(["profile_picture"]);

  const [previewUrl, setPreviewUrl] = useState<string | null | any>(null);

  useEffect(() => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };

    if (inputElementWatch && inputElementWatch[0]) reader.readAsDataURL(inputElementWatch[0][0]);
  }, [inputElementWatch]);

  function onSubmit(values: z.infer<typeof editUserSchema>) {
    console.log(values);
  }

  return (
    <Layout>
      <div className="flex items-center justify-center sm:justify-start flex-wrap gap-5 sm:gap-10 w-4/5 mx-auto my-10">
        <div className="relative">
          <Avatar className="w-40 h-40 sm:w-60 sm:h-60">
            <AvatarImage src={`${previewUrl && previewUrl}`} className="w-full h-full object-cover" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <label htmlFor="upload">
            <CameraIcon className="absolute right-0 bottom-0 hover:text-blue-300 cursor-pointer" size={40} />
          </label>
          <p className="text-sm text-red-500 absolute">{Boolean(form.formState.errors["profile_picture"]?.message) && form.formState.errors.profile_picture?.message?.toString()}</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">John Doe</h1>
          <h1 className="font-semibold">johndoe@mail.com</h1>
        </div>
      </div>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-wrap w-4/5 sm:justify-between mx-auto">
              <div className="w-full sm:w-[48%]">
                <input type="file" id="upload" hidden {...form.register("profile_picture")} />
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="youremail@mail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="******" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full sm:w-[48%]">
                <FormField
                  control={form.control}
                  name="alamat"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="koordinat"
                  render={({ field }) => (
                    <FormItem className="mb-7">
                      <FormLabel>Koordinat </FormLabel>
                      <Dialog>
                        <DialogTrigger className="hover:text-slate-400 text-xs">Select Coordinate</DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Select your coordinate</DialogTitle>
                            <DialogDescription>cari alamat anda di kolom pencarian lalu pilih koordinat dengan cara klik tepat pada alamat anda di peta</DialogDescription>
                          </DialogHeader>
                          <div>
                            <MapContainer center={[-6.2, 106.816]} zoom={13} style={{ height: "50vh" }} ref={setMap}>
                              <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                              <Marker position={[lat, lng]} icon={customIcon} />
                            </MapContainer>
                            {lat && (
                              <div>
                                <b>latitude</b>: {lat?.toFixed(3)} <br />
                                <b>longitude</b>: {lng?.toFixed(3)}
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                      <div className="flex gap-3">
                        <h1>
                          <b>latitude</b>: {lat?.toFixed(3)}
                        </h1>
                        <h1>
                          <b>longitude</b>: {lng?.toFixed(3)}
                        </h1>
                      </div>
                      <FormControl>
                        <Input type="hidden" placeholder="Your Address Koordinat" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="0898369234" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-3 justify-end">
                  <Button type="button" className="rounded-md bg-[#3487AC] hover:bg-[#3487AC]/80">
                    Add New Doctor
                  </Button>
                  <Button type="submit" className="rounded-md bg-[#3487AC] hover:bg-[#3487AC]/80">
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>

      <div className="w-4/5 mx-auto my-5 shadow-md rounded-lg p-5 sm:p-10 flex sm:justify-center md:gap-4 lg:gap-10 flex-wrap">
        <div className="md:w-[30%] lg:w-1/5 h-64">
          <img src="https://source.unsplash.com/random?doctor" alt="doctor" className="w-full h-full object-cover rounded-md" />
        </div>
        <div className="md:w-[65%] lg:w-[75%]">
          <h1 className="text-2xl font-semibold mb-3">Drh. John Doe</h1>
          <div className="grid grid-cols-2 gap-x-3 w-full sm:w-1/2">
            <div className="border-r border-r-slate-400">
              <h1 className="text-[#777676]">Price</h1>
              <h1 className="text-[#777676]">Rp. 100.000</h1>
            </div>
            <div>
              <h1 className="text-[#777676]">Location</h1>
              <h1 className="text-[#777676]">Bandung, West Java</h1>
            </div>
          </div>
          <div className="my-10">
            <h1 className="text-2xl font-semibold">About</h1>
            <p className="text-[#777676] lg:w-4/5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora facilis necessitatibus neque, nostrum sequi aliquid iste harum accusamus itaque perferendis autem ea optio dignissimos tenetur? Officiis aliquid dolorum
              molestias.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold my-5">Available days</h1>
            <h1>Senin, Selasa, Rabu, Kamis, Jum'at, Sabtu, Minggu</h1>
          </div>
          <div>
            <h1 className="text-xl font-semibold my-5">Service</h1>
            <ul>
              <li>Medical Checkup</li>
              <li>Konsultasi Online</li>
            </ul>
          </div>
          <div className="flex gap-3 justify-end">
            <Button type="submit" className="rounded-md bg-[#3487AC] hover:bg-[#3487AC]/80">
              Edit Doctor
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfileAdmin;
