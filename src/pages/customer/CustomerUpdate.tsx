import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { customerUpdateSchema } from "./customerSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useTransition } from "react";
import axios from "axios";
import { url } from "@/constants";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useCustomers } from "@/hooks/useCustomers";
import LoaderFade from "@/components/LoaderFade";

type CustomerUpdateForm = z.infer<typeof customerUpdateSchema>;

export default function CustomerUpdate() {
  const { id } = useParams();
  const { singleData, getDataById, loadSingleData, errSingleData } = useCustomers();

  const [pending, startTransition] = useTransition();

  const navigate = useNavigate();

  const form = useForm<CustomerUpdateForm>({
    resolver: zodResolver(customerUpdateSchema),
    defaultValues: { customerName: "", level: "warga", favouriteMenu: "", totalTransaction: "" },
  });

  useEffect(() => {
    if (id) {
      getDataById(id);
    }
  }, [getDataById, id]);

  useEffect(() => {
    if (singleData) {
      form.setValue("customerName", singleData?.customerName);
      form.setValue("level", singleData?.level);
      form.setValue("favouriteMenu", singleData?.favouriteMenu || "");
      form.setValue("totalTransaction", Math.floor(Number(singleData?.totalTransaction)).toString() || "");
    }
  }, [singleData, form]);

  const onSubmit = (values: CustomerUpdateForm) => {
    console.log(values);
    startTransition(() => {
      axios
        .patch(`${url}/customers/${id}`, values)
        .then((res) => {
          toast.success(res.data.message);
          navigate("/");
        })
        .catch((err) => {
          toast.error(err.response.data.message || err.message);
        });
    });
  };

  if (loadSingleData) return <LoaderFade />;
  if (errSingleData) return <div>{errSingleData}</div>;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold my-2">Update Customer</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="customerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={pending}
                    {...field}
                    placeholder="Customer name"
                    className="focus:outline-primary-main"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Level</FormLabel>
                <Select disabled={pending} onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="warga">Warga</SelectItem>
                    <SelectItem value="juragan">Juragan</SelectItem>
                    <SelectItem value="sultan">Sultan</SelectItem>
                    <SelectItem value="konglomerat">Konglomerat</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="favouriteMenu"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Favourite Menu</FormLabel>
                <FormControl>
                  <Input
                    disabled={pending}
                    {...field}
                    placeholder="Favourite Menu"
                    className="focus:outline-primary-main"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="totalTransaction"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Transaction</FormLabel>
                <FormControl>
                  <Input
                    disabled={pending}
                    {...field}
                    placeholder="Customer name"
                    className="focus:outline-primary-main"
                    onFocus={(e) => e.target.select()}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={pending} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
