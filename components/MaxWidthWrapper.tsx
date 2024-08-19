import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("mx-auto h-full w-full max-w-6xl flex-col px-4", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
