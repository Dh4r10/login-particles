import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Personal imports
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
// Personal imports

const formSchema = z.object({
  username: z.string().min(8, {
    message: "El usuario debe tener un minimo de 8 caracteres.",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener un minimo de 8 caracteres.",
  }),
});

const FormInput = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuario</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Ingrese su usuario"
                  {...field}
                  icon={faUser}
                />
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
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Ingrese su contraseña"
                  {...field}
                  className="pr-10"
                  icon={faLock}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <a className="text-sm text-white text-opacity-40" href="*">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div className="flex justify-center">
          <Button
            className={buttonVariants({
              variant: "default",
              className: "mt-4 text-xs",
            })}
            type="submit"
          >
            INICIAR SESIÓN
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormInput;
