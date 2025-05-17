"use client";

import { TalentCard } from "@workspace/ui/components/talent-card";
import { mockData, TalentItem } from "@/app/mock-data";

export default function CardList() {
  const talentCards = mockData
    .filter((item): item is TalentItem => item.type === "talent")
    .map((item, index) => (
      <div key={index}>
        <TalentCard
          key={item.id}
          talent={item.content}
          removeSelection
          className="w-full"
        />
      </div>
    ));

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 lg:p-8 w-full mx-auto">
      {talentCards}
    </div>
  );
}
