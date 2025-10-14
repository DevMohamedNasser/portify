import React from "react";
import { ContactForm } from "../../components/Contact/ContactForm";
import SocialsInfo from "../../components/Contact/SocialsInfo";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-300 py-6"
    >
      <div className="container">
        <h2 className="text-sky-600 dark:text-sky-400">Contact Me</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
          Let's connect! Feel free to reach out for collaboration or any
          requires.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ContactForm />
          <SocialsInfo />
        </div>
      </div>
    </section>
  );
}
