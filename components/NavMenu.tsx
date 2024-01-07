import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

import MetaCert from "./MetaCert";
import GoogleCert from "./GoogleCert";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "LanguaChat",
    href: "https://langua-chat/",
    description:
      "AI Chat Translator SaaS App Built on NextJS and Firebase Extensions, complete with OAUTH and Stripe Checkout",
  },
  {
    title: "Little Lemon Cafe",
    href: "https://littlelemoncafe.vercel.app/",
    description: "The Meta Front-End Developer Capstone Project",
  },
  {
    title: "ChatGPT Clone",
    href: "https://ghostgpt.vercel.app/",
    description:
      "Fully functional ChatGPT Clone using OpenAI API and Firebase to store chats",
  },
  {
    title: "Netflix Clone",
    href: "https://hyperghost.media/",
    description:
      "Netflix clone built using MongoDB, Prisma, and TMDB API on NextJS",
  },
  {
    title: "HyperGhost NFT Marketplace",
    href: "https://ghostdrop.vercel.app/",
    description:
      "An NFT collection marketplace consturcted with NextJS, TypeScript and Sanity.io/ThirdWeb.",
  },
  {
    title: "Trello Clone",
    href: "https://jrello.vercel.app/",
    description:
      "Trello Clone that includes drag-and-drop feature, AI to summarize to-do list, and Zustand to manage global store",
  },
];

function NavMenu() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Skills</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3 p-3 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-xl">
                  <NavigationMenuLink asChild>
                    <MetaCert />
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3 p-3 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-xl">
                  <NavigationMenuLink asChild>
                    <GoogleCert />
                  </NavigationMenuLink>
                </li>
                <ListItem href="/" title="TailwindCSS">
                  Utility-first CSS framework
                </ListItem>
                <ListItem
                  href="https://coursera.org/share/c38bda64867e6bb68dff49de6fc26fcd"
                  title="ReactJS"
                >
                  Create robust and reusable components with advanced
                  techniques.
                </ListItem>
                <ListItem
                  href="https://coursera.org/share/2d3402b0c576c0cf97d949b232f72ca6"
                  title="UX/UI"
                >
                  Fundamentals of User Experience design and research.
                </ListItem>
                <ListItem
                  href="https://coursera.org/share/70383823dab208e4d52677c929274c99"
                  title="Python"
                >
                  Foundational programming skills with basic Python Syntax.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Demos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
export default NavMenu;
