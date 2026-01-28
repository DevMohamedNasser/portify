import { Button, Card, Label, Textarea, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

export function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    emailjs
      .send("service_479mz7u", "template_suq6oir", templateParams, "jVtF2zrPgxLbav-k2")
      .then(
        () => {
          toast.success('Sent successfully!')
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error('Something went wrong! Try again.');
        }
      );
  };

  return (
    <Card className="shadow-md dark:!bg-gray-900">
      <ToastContainer
        position="top-right"
        theme="dark"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="name" className="mb-2 block">
            Your Name
          </Label>
          <TextInput
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("name", { required: true })}
          />
        </div>

        <div>
          <Label htmlFor="email" className="mb-2 block">
            Your Email
          </Label>
          <TextInput
            id="email"
            type="email"
            placeholder="name@email.com"
            {...register("email", { required: true })}
          />
        </div>

        <div>
          <Label htmlFor="subject" className="mb-2 block">
            Subject
          </Label>
          <TextInput
            id="subject"
            type="text"
            placeholder="Subject..."
            {...register("subject", { required: true })}
          />
        </div>

        <div>
          <Label htmlFor="message" className="mb-2 block">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Type your message here..."
            rows={5}
            {...register("message", { required: true })}
          />
        </div>

        <Button
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400 duration-500"
        >
          Send Message
        </Button>
      </form>
    </Card>
  );
}