import { DiagramCards } from "../components/DiagramCards";
import { UploadButton } from "../components/UploadButton";

export const Homepage = () => {
  return (
    <div className="text-center mt-12">
      <UploadButton />
      <DiagramCards />
    </div>
  );
};
