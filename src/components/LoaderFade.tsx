import { FadeLoader } from "react-spinners";

export default function LoaderFade() {
  return (
    <div className="min-h-screen w-full flex justify-center pt-24">
      <FadeLoader color="blue" />
    </div>
  );
}
