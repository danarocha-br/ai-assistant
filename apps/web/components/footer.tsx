"use client";

import { ExpandableTabs } from "@workspace/ui/components/tabs";
import { Bell, Home, Settings } from "lucide-react";

export const Footer = () => {
  const tabs = [
    { title: "Dashboard", icon: Home },
    { title: "Notifications", icon: Bell },
    { type: "separator" },
    { title: "Settings", icon: Settings },
  ];

  return <ExpandableTabs tabs={tabs} />;
};
