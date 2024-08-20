import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="relative h-20 bg-white">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200">
          <div className="flex h-20 flex-col items-center justify-center md:flex-row md:justify-between">
            <div className="pb-2 text-center md:pb-0 md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} All rights reserved
              </p>
            </div>
            <div className="flex items-center space-x-8">
              <Link href={"#"} className="text-sm text-muted-foreground">
                Terms
              </Link>
              <Link href={"#"} className="text-sm text-muted-foreground">
                Privacy Policy
              </Link>
              <Link href={"#"} className="text-sm text-muted-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
