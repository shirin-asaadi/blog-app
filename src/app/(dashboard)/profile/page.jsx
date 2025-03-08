import CardWrapper from "./ـ/components/CardWrapper";
import { Suspense } from "react";
import LatestPosts from "./ـ/components/LatestPosts";
import Fallback from "@/components/ui/Fallback";

async function Profile() {
  return (
    <div>
      <h1 className="text-xl mb-8 text-secondary-500">داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <CardWrapper />
      </Suspense>
      <div>
        <h1 className="text-xl mb-4 text-secondary-500">آخرین پست ها</h1>
        <Suspense fallback={<Fallback />}>
          <LatestPosts />
        </Suspense>
      </div>
    </div>
  );
}
export default Profile;
