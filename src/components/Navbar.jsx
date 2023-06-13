import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../fonts/fonts.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User picture URL:", user.picture);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    console.log("Authentication state changed:", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Disclosure
      as="nav"
      className="fixed z-10 w-full bg-beige shadow"
      open={menuOpen}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-10 w-auto lg:hidden"
                    src="/images/Logos/Dwello-Brown.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="../images/Logos/Dwello-Brown.png"
                    alt="Your Company"
                  />
                </div>
                {
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <NavLink
                      to="/dashboard"
                      onClick={() => window.scrollTo(0, 0)}
                      className={({ isActive }) =>
                        `inline-flex items-center border-b-2 ${
                          isActive
                            ? "!border-amber-700 !text-amber-950"
                            : "border-transparent text-gray-500"
                        } px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-amber-950 hover:duration-200 hover:ease-in-out`
                      }
                    >
                      Dashboard
                    </NavLink>
                    <NavLink
                      to="/dwellings"
                      onClick={() => window.scrollTo(0, 0)}
                      className={({ isActive }) =>
                        `inline-flex items-center border-b-2 ${
                          isActive
                            ? "!border-amber-700 !text-amber-950"
                            : "border-transparent text-gray-500"
                        } px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-amber-950 hover:duration-200 hover:ease-in-out`
                      }
                    >
                      Dwellings
                    </NavLink>
                    <NavLink
                      to="/luxe"
                      onClick={() => window.scrollTo(0, 0)}
                      className={({ isActive }) =>
                        `inline-flex items-center border-b-2 ${
                          isActive
                            ? "!border-amber-700 !text-amber-950"
                            : "border-transparent text-gray-500"
                        } kaushan px-1 pt-1 text-base font-medium hover:border-gray-300 hover:text-amber-950 hover:duration-200 hover:ease-in-out`
                      }
                    >
                      Luxe
                    </NavLink>
                    <NavLink
                      to="/about"
                      onClick={() => window.scrollTo(0, 0)}
                      className={({ isActive }) =>
                        `inline-flex items-center border-b-2 ${
                          isActive
                            ? "!border-amber-700 !text-amber-950"
                            : "border-transparent text-gray-500"
                        } px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-amber-950 hover:duration-200 hover:ease-in-out`
                      }
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/contact-us"
                      onClick={() => window.scrollTo(0, 0)}
                      className={({ isActive }) =>
                        `inline-flex items-center border-b-2 ${
                          isActive
                            ? "!border-amber-700 !text-amber-950"
                            : "border-transparent text-gray-500"
                        } px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-amber-950 hover:duration-200 hover:ease-in-out`
                      }
                    >
                      Contact Us
                    </NavLink>
                  </div>
                }
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      {!isAuthenticated ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#F4F1ED"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="#92400e"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ) : (
                        // <p>{user.name}</p>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.picture}
                          alt=""
                        />
                      )}
                      {/* <img
                        className="h-8 w-8 rounded-full"
                        src={user.picture}
                        alt=""
                      /> */}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {isAuthenticated ? (
                        // Show user menu items if logged in
                        <>
                          {/* <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                onClick={() => window.scrollTo(0, 0)}
                                to="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                onClick={() => window.scrollTo(0, 0)}
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </Link>
                            )}
                          </Menu.Item> */}
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                onClick={() =>
                                  logout({ returnTo: window.location.origin })
                                }
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </Link>
                            )}
                          </Menu.Item>
                        </>
                      ) : (
                        // Show login prompt if not logged in
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                loginWithRedirect();
                              }}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block w-full px-4 py-2 text-left text-sm text-gray-700"
                              )}
                            >
                              Log in
                            </button>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button onClick={() => setMenuOpen(!menuOpen)} as="a">
                <NavLink
                  to="/dashboard"
                  onClick={() => window.scrollTo(0, 0)}
                  className={({ isActive }) =>
                    `block ${
                      isActive
                        ? "border-l-4 border-amber-500 bg-gray-100 text-amber-900"
                        : "border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    } py-2 pl-3 pr-4 text-base font-medium`
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/dwellings"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setMenuOpen(false);
                  }}
                  className={({ isActive }) =>
                    `block ${
                      isActive
                        ? "border-l-4 border-amber-500 bg-gray-100 text-amber-900"
                        : "border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    } py-2 pl-3 pr-4 text-base font-medium`
                  }
                >
                  Dwellings
                </NavLink>
                <NavLink
                  to="/luxe"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setMenuOpen(false);
                  }}
                  className={({ isActive }) =>
                    `block ${
                      isActive
                        ? "border-l-4 border-amber-500 bg-gray-100 text-amber-900"
                        : "border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    } py-2 pl-3 pr-4 text-base font-medium`
                  }
                >
                  Luxe
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setMenuOpen(false);
                  }}
                  className={({ isActive }) =>
                    `block ${
                      isActive
                        ? "border-l-4 border-amber-500 bg-gray-100 text-amber-900"
                        : "border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    } py-2 pl-3 pr-4 text-base font-medium`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact-us"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setMenuOpen(false);
                  }}
                  className={({ isActive }) =>
                    `block ${
                      isActive
                        ? "border-l-4 border-amber-500 bg-gray-100 text-amber-900"
                        : "border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    } py-2 pl-3 pr-4 text-base font-medium`
                  }
                >
                  Contact Us
                </NavLink>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
