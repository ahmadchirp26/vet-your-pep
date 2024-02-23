"use client";
import BackButton from "@/components/ui/backButton";
import useCustomerByIdDataQuery from "@/api/Customer/useCustomerByIdQuery";
import ProfileTabs, { ProfileTabsSkeleton } from "../_components/ProfileTabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import VerifiedIcon from "@/components/icons/VerifiedIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import FollowButtonManager from "@/features/FollowButtonManager.tsx";

interface Props {
  id: string;
}

const ProfileTemplate = ({ id }: Props) => {
  const { data, status } = useCustomerByIdDataQuery({ customerId: id });
  if (status === "pending") {
    return <ProfileTemplateSkeleton />;
  }
  if (status === "error") {
    return <div>Error</div>;
  }
  return (
    <div className="rounded-2xl container-drop-shadow bg-greendarkest p-6 w-2/3 max-lg:w-full flex-col gap-7">
      <div className="flex justify-between items-center">
        <BackButton />
      </div>
      <div className="flex items-center justify-between flex-wrap gap-5 mt-5 ">
        <div className="flex items-center gap-5">
          <Avatar
            className={"w-40 h-40 border-4 border-greensharp overflow-hidden"}
          >
            <AvatarImage
              src={data.getOtherCustomerData.user.profileImage}
              className={"rounded-full"}
            />
            <AvatarFallback className="text-4xl">
              {data.getOtherCustomerData.user.firstName
                .toLocaleUpperCase()
                .charAt(0) +
                data.getOtherCustomerData.user.lastName
                  .toLocaleUpperCase()
                  .charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-xl">{`${data?.getOtherCustomerData.user.firstName} ${data?.getOtherCustomerData.user.lastName}`}</span>
              <VerifiedIcon className={"h-4 w-4"} />
            </div>
            <div className="flex items-center gap-2">
              <EmailIcon className="w-4 h-4" />
              <span className="text-graylight text-sm">
                {data?.getOtherCustomerData.user.email}
              </span>
            </div>
          </div>
        </div>
        <FollowButtonManager customerId={id} />
      </div>
      <div className=" w-full p-4 max-sm:p-0 max-sm:mt-4">
        <ProfileTabs customerId={id} />
      </div>
    </div>
  );
};

export const ProfileTemplateSkeleton = () => {
  return (
    <div className="rounded-2xl container-drop-shadow bg-greendarkest p-6 w-2/3 max-lg:w-full flex-col gap-7">
      <div className="flex justify-between items-center">
        <div className={"w-4 h-4 rounded-full"} />
      </div>
      <div className="flex items-center justify-between flex-wrap gap-5 mt-5 ">
        <div className="flex items-center gap-5">
          <div
            className={
              "w-40 h-40 border-4 border-greensharp rounded-full bg-greenlight animate-pulse overflow-hidden"
            }
          />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className={"w-24 h-4 bg-greenlight rounded-lg animate-pulse"}
              />
              <div
                className={"w-4 h-4 bg-greenlight rounded-lg animate-pulse"}
              />
            </div>
            <div className="flex items-center gap-2">
              <div
                className={"w-4 h-4 bg-greenlight rounded-lg animate-pulse"}
              />
              <div
                className={"w-20 h-4 bg-greenlight rounded-lg animate-pulse"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 max-sm:p-0 max-sm:mt-4">
        <ProfileTabsSkeleton />
      </div>
    </div>
  );
};

export default ProfileTemplate;
