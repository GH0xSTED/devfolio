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
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import meta from "@/images/brands/meta.svg";

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

function NavBar() {
  return (
    <div className="flex flex-1 flex-row items-center justify-between p-3  w-screen max-h-14">
      <div className="flex items-center justify-start space-x-10">
        <h1 className="font-bold">
          Jason Levy
          <span className="ml-1 italic font-medium text-blue dark:text-gray-500 text-xs">
            | Portfolio
          </span>
        </h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Skills</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="cursor-pointer flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="https://coursera.org/verify/professional-cert/569HH9XH6ZB5"
                      >
                        <Image
                          src={meta}
                          alt="meta logo"
                          height="100"
                          width="200"
                          className="h-auto w-28"
                        />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Front-End Development
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Course Completed 10/2023 | Certificate issued by{" "}
                          <span className="text-blue-500 font-bold">Meta</span>
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="TypeScript">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="ReactJS">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Python">
                    Styles for headings, paragraphs, lists...etc
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
      <ModeToggle />
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
export default NavBar;
