import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { customerSchema } from "./customerSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTransition } from "react";
import axios from "axios";
import { url } from "@/constants";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type CustomerCreateForm = z.infer<typeof customerSchema>;

export default function CustomerCreate() {
  const [pending, startTransition] = useTransition();

  const navigate = useNavigate();

  const form = useForm<CustomerCreateForm>({
    resolver: zodResolver(customerSchema),
    defaultValues: { customerName: "", level: "warga" },
  });

  const onSubmit = (values: CustomerCreateForm) => {
    startTransition(() => {
      axios
        .post(`${url}/customers`, values)
        .then((res) => {
          toast.success(res.data.message);
          navigate("/");
        })
        .catch((err) => {
          toast.error(err.response.data.message || err.message);
        });
    });
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold my-2">Create Customer</h2>
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
          <Button disabled={pending} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
