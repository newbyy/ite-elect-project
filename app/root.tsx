import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalcss from './style/global.css';
import type { LinksFunction } from "@remix-run/node";
import { Navbar } from "./components"; 

export const links: LinksFunction = () => [
  { rel: "stylesheet",   href: globalcss }, 
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="scroll-smooth overflow-x-hidden ">   
        <header className="z-50">
          <Navbar />
        </header>
        <div className="mt-[8vh] z-10">
          <Outlet  /> 
        </div>  
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
