import { Skeleton } from "./CMS_Skeleton_Bone_V1"
import { SkeletonApplication } from "./CMS_Skeleton_Application_V1"
import { SkeletonMessager } from "./CMS_Skeleton_Message_V1"
import { SkeletonPromote } from "./CMS_Skeleton_Promote"
import { SkeletonSetting } from "./CMS_Skeleton_Setting"

export const MasterSkeleton = [
    {
        skeleton : Skeleton.menu
    },
    {
        skeleton : SkeletonApplication.menu
    },
    {
        skeleton : SkeletonPromote.menu
    },
    {
        skeleton : SkeletonMessager.menu
    },
    {
        skeleton : SkeletonSetting.menu
    },
]