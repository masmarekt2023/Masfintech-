import { FaArrowRight, FaBullhorn, FaDatabase, FaLightbulb, FaMicrochip, FaMicrophone, FaRegCheckCircle } from "react-icons/fa";
import { FaGear, FaPerson } from "react-icons/fa6";

const sidebarItems = [
  { href: "#what-we-do", title: "What We Do", icon: FaBullhorn },
  { href: "#innovation", title: "Innovation", icon: FaLightbulb },
  { href: "#our-services", title: "Our Services", icon: FaMicrochip },
  { href: "#services", title: "Services", icon: FaMicrophone },
  { href: "#it-solutions", title: "IT Solutions", icon: FaDatabase },
  { href: "#why-choose-us", title: "Why Choose Us", icon: FaRegCheckCircle },
  { href: "#how-it-works", title: "How It Works", icon: FaGear },
  { href: "#business", title: "Business", icon: FaPerson },
];

export default function SectionsSidebar() {
  return (
    <aside className="fixed top-[123px] left-0 h-fit w-16 bg-[#00000044] rounded-full xl flex flex-col items-center justify-center py-4 z-40 transition-transform transform -translate-x-full hover:translate-x-0">
      <button className="animate-bounce-horizontal absolute right-[-16px] bg-gray-800 p-2 rounded-l hover:bg-gray-700">
        <FaArrowRight />
      </button>
      {sidebarItems.map((item, index) => (
        <a key={index} href={item.href} className="mb-4 p-2 hover:bg-gray-700 rounded" title={item.title}>
          <span className="sr-only">{item.title}</span>
          <item.icon className="text-xl" />
        </a>
      ))}
    </aside>
  );
}