import * as React from "react";
import { cn } from "@/lib/utils";

// Personal imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Personal imports

const Input = React.forwardRef(({ className, type, icon, ...props }, ref) => {
  return (
    <div className="flex relative">
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      <FontAwesomeIcon
        icon={icon}
        className="absolute top-3.5 right-4 text-lg text-blue-950"
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
