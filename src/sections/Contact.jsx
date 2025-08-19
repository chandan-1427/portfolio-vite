import { useRef, useState } from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    sending: false,
    success: false,
    error: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ sending: true, success: false, error: false });

    emailjs
      .sendForm(
        "service_wtjbx5v",
        "template_r2tefkh",
        form.current,
        "o0m8uHeQIMttje8HF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ sending: false, success: true, error: false });
          form.current.reset();

          // Automatically hide success message after 5 seconds
          setTimeout(() => {
            setStatus((prev) => ({ ...prev, success: false }));
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setStatus({ sending: false, success: false, error: true });

          // Automatically hide error message after 5 seconds
          setTimeout(() => {
            setStatus((prev) => ({ ...prev, error: false }));
          }, 5000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-16 relative"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Let’s Connect
      </h2>
      <p className="text-center text-lg text-gray-300 max-w-xl mb-12">
        Whether it’s about job opportunities, collaborations, or just tech talk —
        I’d love to hear from you. Feel free to reach out through any of the
        platforms below.
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 mb-12 z-10">
        <a
          href="https://www.linkedin.com/in/chandan-dakka-805068360/"
          target="_blank"
          rel="noreferrer"
          className="group p-4 rounded-full bg-white/10 hover:bg-[#0A66C2] transition-all duration-300"
        >
          <Linkedin className="w-8 h-8 text-white group-hover:text-white" />
        </a>
        <a
          href="https://github.com/chandan-1427"
          target="_blank"
          rel="noreferrer"
          className="group p-4 rounded-full bg-white/10 hover:bg-[#181717] transition-all duration-300"
        >
          <Github className="w-8 h-8 text-white group-hover:text-white" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=chandandakka@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="group p-4 rounded-full bg-white/10 hover:bg-[#D93025] transition-all duration-300"
        >
          <Mail className="w-8 h-8 text-white group-hover:text-white" />
        </a>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg space-y-4 backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-gray-700"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl bg-white/10 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-violet-400"
          disabled={status.sending}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-xl bg-white/10 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-violet-400"
          disabled={status.sending}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full p-4 rounded-xl bg-white/10 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-violet-400"
          disabled={status.sending}
          required
        />
        <button
          type="submit"
          disabled={status.sending}
          className={`w-full py-3 rounded-xl transition font-semibold ${
            status.sending
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-violet-600 hover:bg-violet-700"
          }`}
        >
          {status.sending ? "Sending..." : "Send Message"}
        </button>

        {/* Feedback Messages */}
        {status.success && (
          <p className="text-green-400 mt-2 text-center">
            Thank you! I’ve received your message and will get back to you soon.
          </p>
        )}
        {status.error && (
          <p className="text-red-400 mt-2 text-center">
            Oops! Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
