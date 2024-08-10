import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Link } from "react-router-dom";
  

function Signup() {
  return (
    <>
      <main className="flex justify-center items-center">
        <div className="bg-[#FFFFFF] sm:mt-10 sm:mb-10 w-full sm:w-[526px] h-full sm:h-[780px] rounded-none sm:rounded-3xl drop-shadow-lg flex flex-col items-center p-4 sm:p-2 border border-[#D7D7D7]">
          <img
            src="/assets/images/img/image.png"
            className="w-[171px] h-[112px] mb-2"
            alt="Ezy Mart Logo"
          />
          <h2 className="text-[24px] sm:text-[36px] h-[36px]  font-bold text-center font-sfpro">
            Create an Account
          </h2>
          <Label className="text-[#999999] font-sfpro h-[12px] text-[14px]  font-bold mb-4 mt-1 text-center">
            Fill your all details and continue.
          </Label>
          <div className="flex flex-col gap-[10px] w-full max-w-md">
          <Label htmlFor="name" className="text-[#0F172A] text-[14px]">Shop Name</Label>
          <Input
            type="text"
            placeholder="Enter Shop Name"
            className="w-full h-[35px] focus:border-[#7ED957]"
          />
          <Label htmlFor="business" className="text-[#0F172A] text-[14px]">Category</Label>
          <Select className="">
            <SelectTrigger className="w-full h-[40px] border border-[#D7D7D7] bg-white text-[#6b7280]">
              <SelectValue placeholder="Select Shop Category" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-[#D7D7D7]  text-[#0F172A] text-[14px]">
              <SelectItem
                value="apple"
                className="rounded-md hover:bg-[#7ED957] hover:text-white"
              >
                Clothing
              </SelectItem>
              <SelectItem
                value="orange"
                className="rounded-md hover:bg-[#7ED957] hover:text-white"
              >
                Electronics
              </SelectItem>
              <SelectItem
                value="mango"
                className="rounded-md hover:bg-[#7ED957] hover:text-white"
              >
                Foods and Beverage
              </SelectItem>
            </SelectContent>
          </Select>
            <Label
              htmlFor="email"
              className="  text-[#0F172A] text-[14px]"
            >
              Email
            </Label>
            <Input
              type="email"
              placeholder="Email"
              className="w-full h-[35px]  text-[16px] border border-[#D7D7D7]"
            />
            <Label
              htmlFor="mobile"
              className=" text-[#0F172A] text-[14px]"
            >
              Mobile
            </Label>
            <Input
              type="text"
              placeholder="Mobile"
              className="w-full h-[35px]  text-[16px] border border-[#D7D7D7]"
            />
            <Label htmlFor="password" className=" text-[#0F172A]">
              Password
            </Label>
            <Input
              type="password"
              placeholder="*******"
              className="w-full h-[35px] text-[16px] border border-[#D7D7D7]"
            />
            <Label htmlFor="confirmpassword" className=" text-[#0F172A]">
              Confirm Password
            </Label>
            <Input
              type="password"
              placeholder="*******"
              className="w-full h-[35px] text-[16px] border border-[#D7D7D7]"
            />

            <div className="flex justify-start space-x-2 mt-1 w-full max-w-md">
              <Checkbox id="terms" className=" border border-[#E5E7EB]" />
              <Label
                htmlFor="terms"
                className=" text-[14px] text-[#000000]"
              >
                Accept terms and condition
              </Label>
            </div>
            <div className="flex flex-row gap-2 rounded-[6px] w-full max-w-md mt-2">
              <Button
                variant="outline"
                size="lg"
                className="w-[228px] text-[#FFFFFF] bg-[#A7A7A7] h-[40px]"
              >
                Back To Home
              </Button>
              <Button
                variant="default"
                size="lg"
                className="w-[228px] bg-[#6A994E] text-[#FFFFFF] h-[40px]"
              >
                Create Account
              </Button>
            </div>
          </div>
          <Label className="text-[#000000] text-[16px]  mt-4 text-center">
          Already have an Account?{" "}
            <Link to={"/signin"} className="text-[#A7C957] text-[16px] ">
              Sign in
            </Link>
          </Label>
        </div>
      </main>
    </>
  );
}

export default Signup;
