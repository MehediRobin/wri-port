import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import unbImg from "@/public/UNB.png";
import avroImg from "@/public/avro.png";
import forexImg from "@/public/trading.png";
import tecnoImg from "@/public/tecno.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },

] as const;

export const experiencesData = [
  {
    title: "Content Writer",
    name: "Coders Passion",
    location: "Khulna, Bangladesh",
    description:
      "Started as an aspiring content writer and got the basic understanding of the world of content writing, SEO, and digital marketing.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Freelance Feature Article Writer",
    name: "United News of Bangladesh",
    location: "Dhaka, Bangladesh",
    description:
      "Got onboard with the growing national online newsportal, and been writing feature articles on tech, gadget and gaming topics ever since.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - on going",
  },
  {
    title: "Content Writer",
    name: "WoodHead Creative",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Joined a team of energetic creatives working with an effort to make a global impact with their digital marketing expertise. I wrote blog and social media posts for several projects relating to mechanical parts and medical topics",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Content Writer",
    name: "Marketing Doorway",
    location: "Dhaka, Bangladesh",
    description:
      "Join this tream of professionals providing digital marketing services worldwide, while rearing their own unique projects. I wrote on Golf instruments and strategies.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Detailed Comaparative Review Article",
    description:
      "It's a detailed review article that doesn't only describe different features of a phone in details but also compares it to other market dominators by key funtionalities.",
    tags: ["Feature Article", "Gadget Review", "Tech", "Review Article"],
    imageUrl: tecnoImg,
    link: "https://unb.com.bd/category/Tech/tecno-phantom-v-fold-2-review-pros-cons-and-price-in-bangladesh/154984"
  },
  {
    title: "Featured Article on Tech Industry",
    description:
      "I write fetured articles covering Tech and Gaming topics for the prominent national daily the United News of Bangladesh (UNB).",
    tags: ["Feature Article", "Listing Article", "Tech", "Gaming"],
    imageUrl: avroImg,
    link: "https://unb.com.bd/category/Tech/avro-keyboard-groundbreaking-journey-of-a-bangla-typing-software-by-mehdi-hasans-team/153553"
  },
  {
    title: "Featured Article on Gaming",
    description:
      "Writing articles on games demands writers to understand hypes and have abilities to engage gamers and enthusiasts.",
    tags: ["Feature Article", "Listing Article", "Tech", "Gaming"],
    imageUrl: unbImg,
    link: "https://unb.com.bd/category/Tech/february-2025-video-game-releases-top-titles-you-cant-miss/151328"
  },
  {
    title: "Forex & Crypto",
    description:
      "I have written a vast collection of Forex articles describing key features and explaining intiricacies associated with the Forex and Crypto trading market.",
    tags: ["Website Copy", "Blog Articles", "Long-form Articles", "SEO", "Forex"],
    imageUrl: forexImg,
    link: "https://fxguidepro.com/what-is-margin-trading-how-to-use/"
  },

] as const;

export const skillsData = [
"Evocative Writing",
"SEO",
"Blog Article",
"Website Copy",
"Social Media Posts",
"Technical Writing",
"Newsletter Writing",
"Wordpress and SEO Plugins",
"HTML",
"CSS",
"JavaScript",
"React"
] as const;
