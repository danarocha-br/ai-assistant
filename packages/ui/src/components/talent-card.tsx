import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card";
import {
  Calendar,
  ChevronDown,
  Dot,
  Instagram,
  MapPin,
  Youtube,
  Maximize2,
} from "lucide-react";
import { Checkbox } from "./checkbox.js";
import { SnapchatIcon } from "./icons/snapchat.js";
import { TikToktIcon } from "./icons/tiktok.js";

type TalentCardPlatform = {
  name: string;
  followers: string;
  engagement: string;
  growth: string;
  postFrequency: string;
};

type TalentCardProps = {
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
} & React.ComponentProps<"div">;

function TalentCard({ className, talent, ...props }: TalentCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isCardSelected, setIsCardSelected] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);

  function onShowContent() {
    return setShowContent(!showContent);
  }
  function onCardSelect() {
    return setIsCardSelected(!isCardSelected);
  }

  return (
    <div className={cn("relative flex items-center gap-2", className)}>
      <Checkbox
        id="choose"
        className="absolute -left-10"
        checked={isCardSelected}
      />
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-slot="talent-card"
        className={cn(
          "cursor-pointer w-full border bg-card text-card-foreground flex flex-col gap-4 rounded-md  py-3  transition-all duration-500",
          isHovered && "shadow-sm",
          isCardSelected ? "ring-2 ring-offset-2 ring-secondary/30" : ""
        )}
        onClick={onCardSelect}
        {...props}
      >
        {isHovered && (
          <div className="flex items-center absolute top-2 right-2 transition-transform ">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                onShowContent();
              }}
            >
              <Maximize2 className="size-3.5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                onShowContent();
              }}
            >
              <ChevronDown
                className={cn(
                  "transition-transform duration-300",
                  showContent ? "rotate-180" : "rotate-0"
                )}
              />
            </Button>
          </div>
        )}

        <CardHeader
          userName={talent.name}
          userImage={talent.imageURL}
          age={talent.age}
          location={talent.location}
          gender={talent.gender}
          platforms={talent.platforms}
          isHovered={isHovered}
        />

        {showContent && (
          <CardContent>
            <p>{talent.bio}</p>

            <div className="flex gap-1.5 items-center">
              {talent.topContent.map((item, index) => (
                <Badge key={index} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        )}
      </div>
    </div>
  );
}

type CardHeaderProps = {
  userImage?: string;
  userName: string;
  age: number;
  gender: string;
  location: string;
  isHovered?: boolean;
  platforms: TalentCardPlatform[];
} & React.ComponentProps<"div">;

function CardHeader({
  className,
  userName,
  userImage,
  age,
  location,
  gender,
  platforms,
  isHovered = false,
  ...props
}: CardHeaderProps) {
  return (
    <div
      data-slot="talent-card-header"
      className={cn(
        "@container/talent-card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-3 px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <Avatar
          size="lg"
          className={cn(
            "ring-2 ring-accent ring-offset-2 transition-all duration-300",
            isHovered && "ring-primary/30"
          )}
        >
          {userImage && <AvatarImage src={userImage} />}
          <AvatarFallback>{getInitials(userName)}</AvatarFallback>
        </Avatar>
        <div>
          <span className="font-medium ">{userName}</span>

          <div className="flex items-center text-muted-foreground/50">
            <span className="text-sm text-muted-foreground inline-flex gap-2 items-center">
              <Calendar size={16} className="text-muted-foreground/50" /> Age{" "}
              {age}
            </span>
            <Dot />
            <span className="text-sm text-muted-foreground">{gender}</span>
            <Dot />
            <span className="text-sm text-muted-foreground inline-flex gap-2 items-center">
              <MapPin size={16} className="text-muted-foreground/50" />
              {location}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        {platforms.map((platform, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger>
              <Badge variant="social">
                <SocialMediaIcon className={cn(
                  platform.name === "instagram" && "bg-[#AF54EC]",
                  platform.name === "tiktok" && "bg-[#000]",
                  platform.name === "youtube" && "bg-[#DC2626]",
                  platform.name === "snapchat" && "bg-[#E5EB00]"
                )}>
                  {platform.name === "instagram" && <Instagram />}
                  {platform.name === "youtube" && <Youtube />}
                  {platform.name === "tiktok" && <TikToktIcon />}
                  {platform.name === "snapchat" && <SnapchatIcon />}
                </SocialMediaIcon>
                {platform.followers}
              </Badge>
            </HoverCardTrigger>
            <HoverCardContent className="text-xs">
              <div className="space-y-1">
                <p>Engagement: {platform.engagement}</p>
                <p>Growth: {platform.growth}</p>
                <p>Post Frequency: {platform.postFrequency}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}

function SocialMediaIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="social-media-icon"
      className={cn(
        "size-6 p-1 flex items-center justify-center rounded-full bg-primary text-white text-sm",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-4 border-t border-dashed text-[13px] pt-3 text-accent-foreground space-y-3",
        className
      )}
      {...props}
    />
  );
}

export { TalentCard };

const getInitials = (name: string) => {
  if (!name) return "";

  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
};
