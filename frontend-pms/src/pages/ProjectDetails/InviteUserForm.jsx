import { Form } from "@/components/ui/form";
import { FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { FormItem } from "@/components/ui/form";
import { FormControl } from "@/components/ui/form";
import { FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

const InviteUserForm = () => {
      const form = useForm({
        defaultValues: {
          email: "",
        },
      });

      const onSubmit = (data) => {
        console.log("create project data: ", data);
      };

  return (
    <div>
       <Form {...form}>
              <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          className="border w-full border-gray-700 py-5 px-5"
                          placeholder="User Email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            
      
                <DialogClose>
                  
                    <Button type="submit" className="w-full mt-5">
                      Invite User
                    </Button>
                  
                </DialogClose>
              </form>
            </Form>
    </div>
  )
}

export default InviteUserForm
