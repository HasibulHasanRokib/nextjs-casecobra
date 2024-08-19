import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const user = true;
  const isAdmin = false;

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-16 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-b border-zinc-200">
          <Link className="z-40 flex text-xl font-semibold" href={"/"}>
            case <span className="text-green-600">cobra</span>
          </Link>
          <div className="flex space-x-2">
            {user ? (
              <>
                <Link
                  className={buttonVariants({
                    variant: "outline",
                  })}
                  href={"#"}
                >
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link
                    className={buttonVariants({
                      variant: "ghost",
                    })}
                    href={"#"}
                  >
                    Dashboard
                  </Link>
                ) : null}
              </>
            ) : (
              <>
                <Link
                  className={buttonVariants({
                    variant: "ghost",
                  })}
                  href={"/auth/register"}
                >
                  Sign up
                </Link>
                <Link
                  className={buttonVariants({
                    variant: "ghost",
                  })}
                  href={"/auth/login"}
                >
                  Login
                </Link>
              </>
            )}

            <div className="hidden h-8 w-px bg-zinc-200 sm:block" />
            <Link
              className={buttonVariants({
                variant: "default",
                className: "hidden items-center sm:flex",
              })}
              href={"/configure/upload"}
            >
              Create case
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
