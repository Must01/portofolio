import {
  Mail,
  Linkedin,
  Instagram,
  Github,
  Coffee,
  DollarSign,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const contacts = [
  {
    name: "Email",
    href: "mailto:mustaphabouddahr347@gmail.com",
    icon: Mail,
    bg: "bg-primary",
    text: "text-primary-foreground",
    hoverBg: "hover:bg-primary/90",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/212600123456",
    icon: MessageCircle,
    bg: "bg-green-500",
    text: "text-white",
    hoverBg: "hover:bg-green-600",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mustapha-bouddahr-830787338/",
    icon: Linkedin,
    bg: "bg-secondary",
    text: "text-secondary-foreground",
    hoverBg: "hover:bg-secondary/90",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mustapha_bouddahr",
    icon: Instagram,
    bg: "bg-pink-500",
    text: "text-white",
    hoverBg: "hover:bg-pink-600",
  },
  {
    name: "GitHub",
    href: "https://github.com/Must01",
    icon: Github,
    bg: "bg-foreground",
    text: "text-background",
    hoverBg: "hover:bg-foreground/90",
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/mustaphabouddahr",
    icon: ExternalLink,
    bg: "bg-violet-500",
    text: "text-white",
    hoverBg: "hover:bg-violet-600",
  },
  {
    name: "Ko‑fi",
    href: "https://ko-fi.com/mustaphabouddahr",
    icon: Coffee,
    bg: "bg-rose-500",
    text: "text-white",
    hoverBg: "hover:bg-rose-600",
  },
  {
    name: "PayPal",
    href: "https://www.paypal.me/mustaphabouddahr",
    icon: DollarSign,
    bg: "bg-blue-600",
    text: "text-white",
    hoverBg: "hover:bg-blue-700",
  },
];

export const ContactSection = () => (
  <section id="contact" className="py-24 px-4 bg-secondary/10">
    <div className="container mx-auto max-w-3xl text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Get in <span className="text-primary">Touch</span>
      </h2>
      <p className="text-muted-foreground">
        Reach out or support my work through any of the following:
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {contacts.map(({ name, href, icon: Icon, bg, text, hoverBg }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 px-5 py-3 rounded-full transition ${bg} ${text} ${hoverBg}`}
          >
            <Icon className="h-5 w-5" />
            <span className="font-medium">{name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);
