import { LoadingContext } from "@/contexts/loading";
import { error } from "console";
import { useContext } from "react";

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context)
    throw new Error('"useLoading" must be used within "LoadingPovider"');
  return context;
};
