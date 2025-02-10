import { Volleyball, Gamepad2, Landmark, Film, Coffee } from "lucide-react";

export const categories = [
  {
    name: "Gaming",
    icon: Gamepad2,
    gradient: "from-violet-500 to-purple-600",
    hoverEffect: "hover:from-violet-600 hover:to-purple-700",
  },
  {
    name: "Sports",
    icon: Volleyball,
    gradient: "from-blue-500 to-cyan-600",
    hoverEffect: "hover:from-blue-600 hover:to-cyan-700",
  },
  {
    name: "Politics",
    icon: Landmark,
    gradient: "from-red-500 to-orange-600",
    hoverEffect: "hover:from-red-600 hover:to-orange-700",
  },
  {
    name: "Movies",
    icon: Film,
    gradient: "from-pink-500 to-rose-600",
    hoverEffect: "hover:from-pink-600 hover:to-rose-700",
  },
  {
    name: "Casual",
    icon: Coffee,
    gradient: "from-emerald-500 to-teal-600",
    hoverEffect: "hover:from-emerald-600 hover:to-teal-700",
  },
];
