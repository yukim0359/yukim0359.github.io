import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import type { SocialLink } from "../types";

const Hero = () => {
  const socialLinks: SocialLink[] = [
    { icon: Github, href: "https://github.com/yukim0359", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yuki-maeda-6a50b0373/",
      label: "Linkedin",
    },
    { icon: Twitter, href: "https://x.com/my_u_03", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/yukim0359/",
      label: "Instagram",
    },
  ];

  return (
    <section
      id="home"
      className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-4xl font-bold text-gray-900 mb-5"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              前田 優希 （Yuki Maeda）
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center space-x-5"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <social.icon size={28} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
