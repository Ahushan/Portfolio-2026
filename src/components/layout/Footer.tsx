// icons in iconify or lucide-react
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Send } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";
import { SiLeetcode } from "react-icons/si";
import { navLinkData } from "../../data/Constant";

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xkgbkrnr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast.success("Message sent successfully!", { position: "top-center" });
        form.reset();
      } else {
        toast.error("Failed to send message!", { position: "top-center" });
      }
    } catch (err) {
      toast.error("Something went wrong!", { position: "top-center" });
    }
  };
  return (
    <footer className="text-white py-10 overflow-hidden">
      <div className="mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        {/* Contact Info */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <h1 className="font-sedan text-2xl  oswald">Contact Me</h1>
          <p className="text-gray-400 max-w-sm josefin text-sm">
            I'm a passionate developer creating beautiful, performant web
            experiences. Feel free to reach out for collaboration or just a
            chat.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 flex items-center flex-col gap-6">
          <h2 className="text-2xl font-semibold oswald">Quick Links</h2>
          <div className="flex flex-wrap josefin flex-col gap-4">
            {navLinkData.map(({ label, to }) => (
              <ScrollLink
                key={label}
                to={to}
                smooth={true}
                duration={500}
                offset={-60}
                className="cursor-pointer text-gray-400 hover:scale-107 transition-all text-base font-medium font-techmono"
              >
                {label}
              </ScrollLink>
            ))}
          </div>
        </div>

        {/* Follow and Contact Form */}
        <div className="md:w-1/3 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold oswald">Follow Me</h2>
          <div className="flex gap-6 text-3xl">
            <a
              href="https://linkedin.com/in/mohamed-ahushan-498473265"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-700 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Ahushan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-green-700 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/mr.albatross_ahu?igsh=MXNuaHc4OW1sam54Yw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-pink-700 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://leetcode.com/u/Mohamed_Ahushan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-yellow-700 transition-colors"
            >
              <SiLeetcode />
            </a>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-2 oswald text-white">
              Get in touch
            </h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-wrap gap-2 atkinson"
            >
              <textarea
                name="message"
                placeholder="Your Message"
                className="p-3 hide-scrollbar rounded-lg w-75 bg-black/90 text-white placeholder-gray-400 
                spacemono focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={3}
                required
              ></textarea>

              <input
                autoComplete="on"
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="grow p-3 rounded-lg bg-black/90 text-white placeholder-gray-400 focus:outline-none 
                font-robotomono focus:ring-2 focus:ring-white"
                required
              />

              <input
                autoComplete="on"
                type="text"
                name="name"
                placeholder="Your Name"
                className="grow p-3 rounded-lg bg-black/90 text-white placeholder-gray-400 focus:outline-none 
                font-robotomono focus:ring-2 focus:ring-white"
                required
              />

              <button
                type="submit"
                className="bg-linear-to-tr from-slate-400 via-gray-900 to-gray-800 hover:shadow-2xl shadow-slate-300 
                  hover:scale-101 transition-all duration-300 px-6 py-3 rounded-lg
                  flex justify-center items-center text-white font-extrabold russo"
              >
                Send
                <Send className="w-5 h-4 ml-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700 py-3 text-center text-gray-500 text-sm select-none">
        <p className="font-techmono text-sm">
          © 2025 ahushan-porfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
