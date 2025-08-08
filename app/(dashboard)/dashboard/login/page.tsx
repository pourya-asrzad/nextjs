"use client";
import {
  Form,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Button,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, TLoginSchema } from "./_schema/login.types";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/configs/Route";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();

  const loginOnSubmit = (data: TLoginSchema) => {
    // alert(JSON.stringify(data));
    router.replace(AppRoutes.DASHBOARD + AppRoutes.PRODUCTS);
  };
  return (
    <Form
      onSubmit={handleSubmit(loginOnSubmit)}
      className="w-full justify-center items-center space-y-4"
    >
      <div className="flex flex-col gap-4 max-w-md">
        <Input
          {...register("name")}
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your name"
        />
        {errors.name && (
          <span className="text-danger text-small">{errors.name.message}</span>
        )}

        <Input
          {...register("email")}
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        {errors.email && (
          <span className="text-danger text-small">{errors.email.message}</span>
        )}

        <Input
          {...register("password")}
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
        />
        {errors.password && (
          <span className="text-danger text-small">
            {errors.password.message}
          </span>
        )}

        <Select
          {...register("country")}
          label="Country"
          labelPlacement="outside"
          name="country"
          placeholder="Select country"
        >
          <SelectItem key="ar">Argentina</SelectItem>
          <SelectItem key="us">United States</SelectItem>
          <SelectItem key="ca">Canada</SelectItem>
          <SelectItem key="uk">United Kingdom</SelectItem>
          <SelectItem key="au">Australia</SelectItem>
        </Select>

        <Checkbox
          classNames={{
            label: "text-small",
          }}
          name="terms"
          value="true"
        >
          I agree to the terms and conditions
        </Checkbox>

        {/* {errors.terms && (
          <span className="text-danger text-small">{errors.terms}</span>
        )} */}

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Submit
          </Button>
          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
      </div>
    </Form>
  );
}
