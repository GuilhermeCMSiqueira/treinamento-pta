"use client";
import Image from "next/image";
import { useState } from "react";
import { CITiLogo, geralCITi } from "@/assets";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-screen">
        <nav className="bg-white h-36 shadow-md sticky w-full z-10 font-montserrat">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Image
              src={CITiLogo}
              alt={"Logo do CITi"}
              className="h-28 w-fit"
            ></Image>
            {/* Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Treinamento
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                PTA
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Tailwind
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                CSS
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="bg-white shadow-md md:hidden">
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Treinamento
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                PTA
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Tailwind
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                CSS
              </a>
            </div>
          )}
        </nav>

        <main className="flex h-[calc(100vh-9em)] font-montserrat">
          <div className="w-full bg-gray-100 bg-center hidden md:flex justify-center">
            <Image
              src={geralCITi}
              alt={"Todo mundo do CITi"}
              className="w-fit"
            ></Image>
          </div>

          <div className="w-full h-full bg-gray-100 flex justify-center items-center p-8 box-border">
            <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border-[#51E678] border-2 flex flex-col flex-shrink">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contate o CITi
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu Nome"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Sua Mensagem"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#51E678] text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
