import { differenceInSeconds } from "date-fns";

//[Todo]: Think of better way than the following
export const CalculatePostTime = (date: Date) =>
  differenceInSeconds(new Date(), date) < 60
    ? `${differenceInSeconds(new Date(), date)}s`
    : differenceInSeconds(new Date(), date) < 3600
      ? `${Math.floor(differenceInSeconds(new Date(), date) / 60)}m`
      : differenceInSeconds(new Date(), date) < 86400
        ? `${Math.floor(differenceInSeconds(new Date(), date) / 3600)}h`
        : `${Math.floor(differenceInSeconds(new Date(), date) / 86400)}d`;