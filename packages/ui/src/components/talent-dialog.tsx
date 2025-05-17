"use client";
import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
import { Instagram, Youtube } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Badge } from "@workspace/ui/components/badge";
import { Calendar, Dot, MapPin } from "lucide-react";
import { TikToktIcon } from "@workspace/ui/components/icons/tiktok";
import { SnapchatIcon } from "@workspace/ui/components/icons/snapchat.js";
import { Button } from "@workspace/ui/components/button";
import { SocialMediaIcon } from "./talent-card.js";

export type TalentCardPlatform = {
  name: string;
  followers: string;
  engagement: string;
  growth: string;
  postFrequency: string;
  audience?: {
    age: string;
    femalePercentage: string;
    malePercentage: string;
  };
  username?: string;
};

type TalentDialogProps = {
  talent: {
    imageURL?: string;
    name: string;
    age: number;
    gender: string;
    location: string;
    bio: string;
    topContent: string[];
    platforms: TalentCardPlatform[];
  };
  children: React.ReactNode;
};

function TalentDialog({ talent, children }: TalentDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* Basic Info */}
          <div className="flex items-center gap-4">
            <Avatar size="lg">
              {talent.imageURL && <AvatarImage src={talent.imageURL} />}
              <AvatarFallback>{getInitials(talent.name)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold">{talent.name}</span>
                <Badge variant="success">Verified</Badge>
              </div>
              <div className="flex items-center text-muted-foreground/50">
                <span className="text-sm text-muted-foreground inline-flex gap-2 items-center">
                  <Calendar size={16} className="text-muted-foreground/50" />{" "}
                  Age {talent.age}
                </span>
                <Dot />
                <span className="text-sm text-muted-foreground">
                  {talent.gender}
                </span>
                <Dot />
                <span className="text-sm text-muted-foreground inline-flex gap-2 items-center">
                  <MapPin size={16} className="text-muted-foreground/50" />
                  {talent.location}
                </span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex gap-2">
            {talent.topContent.map((item) => (
              <Badge key={item} variant="secondary">{item}</Badge>
            ))}
          </div>

          {/* Bio */}
          <p className="text-sm text-accent-foreground">{talent.bio}</p>

          <div className="py-4 flex flex-col gap-4">
            {talent.platforms.map((platform, index) => (
              <div
                key={index}
                className="border p-3 rounded-md flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="social">
                    <SocialMediaIcon
                      className={cn(
                        platform.name === "instagram" && "bg-[#AF54EC]",
                        platform.name === "tiktok" && "bg-[#000]",
                        platform.name === "youtube" && "bg-[#DC2626]",
                        platform.name === "snapchat" && "bg-[#E5EB00]"
                      )}
                    >
                      {platform.name === "instagram" && <Instagram />}
                      {platform.name === "tiktok" && <TikToktIcon />}
                      {platform.name === "youtube" && <Youtube />}
                      {platform.name === "snapchat" && <SnapchatIcon />}
                    </SocialMediaIcon>
                    <span className="font-medium capitalize">
                      {platform.name}
                      <span className="font-semibold">
                        {" "}
                        {platform.followers}{" "}
                      </span>
                    </span>
                  </Badge>

                  {platform.username && (
                    <Button variant="link" className="text-sm px-0">
                      {platform.username}
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <ContentCard
                    label="Engagement Rate"
                    stat={platform.engagement}
                  />
                  <ContentCard
                    label="Growth Rate"
                    stat={platform.growth}
                    className={cn(
                      "text-lg font-semibold",
                      platform.growth.startsWith("+")
                        ? "text-green-500"
                        : platform.growth.startsWith("-")
                          ? "text-red-500"
                          : ""
                    )}
                  />

                  <ContentCard
                    label="Post Frequency"
                    stat={platform.postFrequency}
                  />
                </div>
                {platform.audience && (
                  <div className="flex flex-col gap-2">
                    <p className="font-medium text-xs">Audience Demographics</p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <ContentCard
                        label="Age Range"
                        stat={platform.audience.age}
                      />
                      <ContentCard
                        label="Gender Split"
                        stat={
                          <>
                            {platform.audience.femalePercentage} F,{" "}
                            {platform.audience.malePercentage} M
                          </>
                        }
                      />
                      <ContentCard
                        label="Top Locations"
                        stat="US, UK, Canada"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const ContentCard = ({
  label,
  stat,
  className,
}: {
  label: string;
  stat: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={"border rounded-md p-2"}>
      <p className="text-muted-foreground text-xs">{label}</p>
      <p className={cn("text-lg font-semibold", className)}>{stat}</p>
    </div>
  );
};

const getInitials = (name: string) => {
  if (!name) return "";

  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
};

export { TalentDialog };
