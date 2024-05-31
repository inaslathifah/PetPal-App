import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import registerImage from "/assets/auth-image.png";
import logoImage from "/assets/logo.png";
import { Link } from "react-router-dom";
import { registerSchema } from "@/utils/apis/auth";

const Register = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
  }

  return (
    <main className="min-h-screen min-w-screen flex items-center py-10">
      <div className="flex w-full justify-between flex-wrap">
        <div className="w-full sm:w-1/2">
          <img src={logoImage} alt="PetPal" className="w-72 mx-auto" />
          <h1 className="text-2xl font-semibold text-center">Sign Up</h1>
          <div className="w-4/5 mx-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
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
                    <FormItem>
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
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="******"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[#036DA1] via-[#64A1B7] to-[#C6D6CE] hover:from-[#036DA1]/90 hover:to-[#C6D6CE]/90"
                >
                  Sign Up
                </Button>
              </form>
            </Form>
            <h1 className="text-center my-5">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-[#036DA1] hover:text-[#64A1B7]"
              >
                Sign In
              </Link>
            </h1>
          </div>
        </div>
        <div className="w-1/2 relative hidden sm:block">
          <img
            src={registerImage}
            alt="register"
            className="w-[40vw] absolute hidden sm:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </main>
  );
};

export default Register;
