import { HomeClient } from "@/app/_components/HomeClient";
import { getCompanyProfile } from "@/lib/companyProfile";

export default async function HomePage() {
  const profile = await getCompanyProfile();
  return <HomeClient profile={profile} />;
}
