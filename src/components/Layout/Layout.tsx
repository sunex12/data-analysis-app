import { Outlet } from "react-router-dom";
import { ButtonExport } from "../../ui/ButtonExport";

export const Layout = () => {
  return (
    <>
      <header>
        <div className="flex items-center justify-between mt-8">
          <img src="logo.png" alt="logo" className="w-48" />
          <ButtonExport />
        </div>
      </header>
      <Outlet />
    </>
  );
};
