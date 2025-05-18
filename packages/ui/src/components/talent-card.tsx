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
import { Checkbox } from "@workspace/ui/components/checkbox";
import { SnapchatIcon } from "@workspace/ui/components/icons/snapchat";
import { TikToktIcon } from "@workspace/ui/components/icons/tiktok";
import { TalentDialog } from "./talent-dialog";

type TalentCardPlatform = {
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
  removeSelection?: boolean;
  onSelect?: () => void;
  isSelected?: boolean;
} & React.ComponentProps<"div">;

function TalentCard({
  className,
  talent,
  removeSelection = false,
  onSelect,
  isSelected = false,
  ...props
}: TalentCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);

  function onShowContent() {
    return setShowContent(!showContent);
  }

  return (
    <div className={cn("relative flex items-center gap-2", className)}>
      {!removeSelection && (
        <Checkbox
          id="choose"
          className="absolute -left-10"
          checked={isSelected}
          onCheckedChange={onSelect}
        />
      )}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-slot="talent-card"
        className={cn(
          "cursor-pointer w-full border bg-card text-card-foreground flex flex-col gap-4 rounded-md py-3 transition-all duration-500 dark:hover:bg-card/70",
          isHovered && "shadow-sm",
          isSelected ? "ring-2 ring-offset-2 ring-secondary/30 dark:ring-secondary/50 ring-offset-background" : ""
        )}
        onClick={onSelect}
        {...props}
      >
        {isHovered && (
          <div className="flex items-center absolute top-2 right-2 transition-transform ">
            <TalentDialog talent={talent}>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => e.stopPropagation()}
              >
                <Maximize2 className="size-3.5" />
              </Button>
            </TalentDialog>

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
            "ring-2 ring-accent ring-offset-2 ring-offset-card transition-all duration-300",
            isHovered && "ring-primary/30 dark:ring-primary/60"
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
                {platform.followers}
              </Badge>
            </HoverCardTrigger>
            <HoverCardContent align="start" className="">
              <div className="flex flex-col gap-1 text-lg">
                <p className="inline-flex justify-between items-center font-medium">
                  <span className="text-muted-foreground text-xs">
                    Engagement
                  </span>{" "}
                  {platform.engagement}
                </p>
                <p className="inline-flex justify-between items-center font-medium">
                  <span className="text-muted-foreground text-xs">Growth</span>{" "}
                  {platform.growth}
                </p>
                <p className="inline-flex justify-between items-center font-medium">
                  <span className="text-muted-foreground text-xs whitespace-nowrap">
                    Post frequency
                  </span>{" "}
                  {platform.postFrequency}
                </p>
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

export { TalentCard, SocialMediaIcon };

const getInitials = (name: string) => {
  if (!name) return "";

  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
};
