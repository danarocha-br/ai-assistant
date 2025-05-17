export type MessageItem = {
  id: number;
  content: string;
  sender: string;
  type?: never; // Message items don't have a type field, or it's not 'talent'
};

export type TalentItemContent = {
  name: string;
  imageURL?: string;
  age: number;
  gender: string;
  location: string;
  bio: string;
  topContent: string[];
  platforms: {
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
  }[];
};

export type TalentItem = {
  id: number;
  type: "talent";
  content: TalentItemContent;
  sender: string;
};

export const mockData: (MessageItem | TalentItem)[] = [
    {
      id: 1,
      content: "Hi Sarah, how can I help with your campaign planning today?",
      sender: "ai",
    },
    {
      id: 2,
      content:
        "I need to find talent for a new skincare brand launch. They want creators who focus on clean beauty and sustainability.",
      sender: "user",
    },
    {
      id: 3,
      content:
        "I'd be happy to help you find the perfect talent for this clean beauty skincare launch. Based on your requirements for creators who focus on sustainability, I have several recommendations:",
      sender: "ai",
    },
    {
      id: 4,
      type: "talent",
      content: {
        name: "Alex Johnson",
        imageURL:
          "https://plus.unsplash.com/premium_photo-1741902728626-e00aec0bf055?w=150&h=150&q=80&crop=faces&fit=crop",
        age: 24,
        location: "Austin, TX",
        gender: "Non-binary",
        bio: "Clean beauty advocate and sustainability expert. Creates educational content on skincare ingredients, ethical beauty practices, and zero-waste routines. Former cosmetic chemist.",
        topContent: ["Quick Tips", "Challenges", "Behind the Scenes"],
        platforms: [
          {
            name: "instagram",
            followers: "1.2M",
            engagement: "7.8%",
            growth: "+2.7%",
            postFrequency: "3-4x weekly",
            audience: {
              age: "22-34",
              femalePercentage: "80%",
              malePercentage: "20%",
            },
            username: "@alexjohnsoninsta",
          },
          {
            name: "tiktok",
            followers: "1.9M",
            engagement: "12.5%",
            growth: "+4.3%",
            postFrequency: "5-6x weekly",
            audience: {
              age: "18-27",
              femalePercentage: "76%",
              malePercentage: "24%",
            },
            username: "@alexjohnsontiktok",
          },
          {
            name: "youtube",
            followers: "780.0K",
            engagement: "6.9%",
            growth: "+1.8%",
            postFrequency: "Bi-weekly",
            audience: {
              age: "25-38",
              femalePercentage: "83%",
              malePercentage: "17%",
            },
            username: "@alexjohnsonyt",
          },
          {
            name: "snapchat",
            followers: "180.0K",
            engagement: "6.9%",
            growth: "+1.8%",
            postFrequency: "Bi-weekly",
            audience: {
              age: "25-38",
              femalePercentage: "83%",
              malePercentage: "17%",
            },
            username: "@alexjohnsonsnap",
          },
        ],
      },
      sender: "ai",
    },
    {
      id: 5,
      type: "talent",
      content: {
        name: "Emma Chen",
        imageURL:
          "https://plus.unsplash.com/premium_photo-1694618625193-3d056dcd1ca7?w=150&h=150&q=80&crop=faces&fit=crop",
        age: 28,
        location: "Seattle, WA",
        gender: "Female",
        bio: "Clean beauty advocate and sustainability expert. Creates educational content on skincare ingredients, ethical beauty practices, and zero-waste routines. Former cosmetic chemist.",
        topContent: ["Skincare Routines", "Product Reviews", "Sustainability Tips"],
        platforms: [
          {
            name: "instagram",
            followers: "950K",
            engagement: "6.5%",
            growth: "+2.1%",
            postFrequency: "4-5x weekly",
            audience: {
              age: "20-30",
              femalePercentage: "78%",
              malePercentage: "22%",
            },
            username: "@emmacheminsta",
          },
          {
            name: "tiktok",
            followers: "1.5M",
            engagement: "11.0%",
            growth: "+3.8%",
            postFrequency: "Daily",
            audience: {
              age: "16-25",
              femalePercentage: "70%",
              malePercentage: "30%",
            },
            username: "@emmachentiktok",
          },
        ],
      },
      sender: "ai",
    },
    {
      id: 6,
      type: "talent",
      content: {
        name: "Liam Brown",
        imageURL: "https://images.unsplash.com/photo-1742558701206-55aa0c21cc8b?w=150&h=150&q=80&crop=faces&fit=crop",
        age: 29,
        location: "Austin, TX",
        gender: "Male",
        bio: "Tech enthusiast and ethical consumer. Reviews sustainable gadgets, eco-friendly software, and promotes conscious tech consumption.",
        topContent: ["Reviews", "Tips", "Comparisons"],
        platforms: [
          {
            name: "instagram",
            followers: "300K",
            engagement: "6.0%",
            growth: "+1.0%",
            postFrequency: "3x weekly",
            audience: {
              age: "22-30",
              femalePercentage: "35%",
              malePercentage: "65%",
            },
            username: "@liambrown_insta",
          },
          {
            name: "tiktok",
            followers: "400K",
            engagement: "9.0%",
            growth: "+2.5%",
            postFrequency: "Daily",
            audience: {
              age: "20-30",
              femalePercentage: "50%",
              malePercentage: "50%",
            },
            username: "@liambrowntiktoks",
          },
          {
            name: "snapchat",
            followers: "150K",
            engagement: "5.0%",
            growth: "+1.0%",
            postFrequency: "Several times weekly",
            audience: {
              age: "22-32",
              femalePercentage: "45%",
              malePercentage: "55%",
            },
            username: "@liambrownsnap",
          },
        ],
      },
      sender: "ai",
    },
    {
      id: 7,
      type: "talent",
      content: {
        name: "Olivia Wilson",
        imageURL: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&q=80&crop=faces&fit=crop",
        age: 22,
        location: "Miami, FL",
        gender: "Female",
        bio: "Passionate about eco-fashion and vintage finds. Shares tips on sustainable styling, upcycling clothes, and building an ethical wardrobe.",
        topContent: ["Hauls", "DIY", "Lookbooks"],
        platforms: [
          
          {
            name: "instagram",
            followers: "1.0M",
            engagement: "8.0%",
            growth: "+2.5%",
            postFrequency: "4x weekly",
            audience: {
              age: "18-28",
              femalePercentage: "80%",
              malePercentage: "20%",
            },
            username: "@oliviawilson_fashion",
          },
          {
            name: "tiktok",
            followers: "2.5M",
            engagement: "15.0%",
            growth: "+5.0%",
            postFrequency: "Daily",
            audience: {
              age: "16-24",
              femalePercentage: "85%",
              malePercentage: "15%",
            },
            username: "@oliviawilsonstyle",
          },
          {
            name: "youtube",
            followers: "500K",
            engagement: "6.5%",
            growth: "+1.8%",
            postFrequency: "Weekly",
            audience: {
              age: "20-30",
              femalePercentage: "88%",
              malePercentage: "12%",
            },
            username: "@oliviawilsonyt",
          },
          {
            name: "snapchat",
            followers: "800K",
            engagement: "10.0%",
            growth: "+3.0%",
            postFrequency: "Daily",
            audience: {
              age: "17-25",
              femalePercentage: "80%",
              malePercentage: "20%",
            },
            username: "@oliviawilsonsnap",
          },
        ],
      },
      sender: "ai",
    },
    {
      id: 8,
      type: "talent",
      content: {
        name: "Noah Davis",
        imageURL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&q=80&crop=faces&fit=crop",
        age: 26,
        location: "Denver, CO",
        gender: "Male",
        bio: "Outdoors enthusiast and zero-waste advocate. Shares tips on sustainable travel, reducing environmental impact, and enjoying nature responsibly.",
        topContent: ["Guides", "Vlogs", "Challenges"],
        platforms: [
          
          {
            name: "instagram",
            followers: "400K",
            engagement: "6.5%",
            growth: "+1.8%",
            postFrequency: "3x weekly",
            audience: {
              age: "25-35",
              femalePercentage: "45%",
              malePercentage: "55%",
            },
            username: "@noahdavis_travel",
          },
          {
            name: "youtube",
            followers: "600K",
            engagement: "7.0%",
            growth: "+2.0%",
            postFrequency: "Bi-weekly",
            audience: {
              age: "28-40",
              femalePercentage: "50%",
              malePercentage: "50%",
            },
            username: "@noahdavisoutdoors",
          },
          {
            name: "snapchat",
            followers: "200K",
            engagement: "5.8%",
            growth: "+1.2%",
            postFrequency: "Several times weekly",
            audience: {
              age: "22-32",
              femalePercentage: "35%",
              malePercentage: "65%",
            },
            username: "@noahdavissnap",
          },
        ],
      },
      sender: "ai",
    },
    {
      id: 9,
      type: "talent",
      content: {
        name: "Sophia Martinez",
        imageURL: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&q=80&crop=faces&fit=crop",
        age: 31,
        location: "Chicago, IL",
        gender: "Female",
        bio: "Holistic wellness coach and sustainable living expert. Focuses on mindfulness, natural products, and creating a balanced, eco-friendly lifestyle.",
        topContent: ["Tutorials", "Tips", "Routines"],
        platforms: [
          {
            name: "instagram",
            followers: "700K",
            engagement: "7.5%",
            growth: "+2.2%",
            postFrequency: "Daily",
            audience: {
              age: "30-45",
              femalePercentage: "70%",
              malePercentage: "30%",
            },
            username: "@sophiamartinez_wellness",
          },
          
          {
            name: "tiktok",
            followers: "500K",
            engagement: "9.5%",
            growth: "+2.8%",
            postFrequency: "Daily",
            audience: {
              age: "25-40",
              femalePercentage: "75%",
              malePercentage: "25%",
            },
            username: "@sophiamartineztiktoks",
          },
          {
            name: "youtube",
            followers: "350K",
            engagement: "6.0%",
            growth: "+1.5%",
            postFrequency: "Weekly",
            audience: {
              age: "28-40",
              femalePercentage: "65%",
              malePercentage: "35%",
            },
            username: "@sophiamartinezyoga",
          },
          {
            name: "snapchat",
            followers: "120K",
            engagement: "4.5%",
            growth: "+0.8%",
            postFrequency: "Several times weekly",
            audience: {
              age: "28-38",
              femalePercentage: "70%",
              malePercentage: "30%",
            },
            username: "@sophiamartinezsnap",
          },
        ],
      },
      sender: "ai",
    },
    {
      id: 10,
      type: "talent",
      content: {
        name: "Ethan Zhao",
        imageURL: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&q=80&crop=faces&fit=crop",
        age: 25,
        location: "San Francisco, CA",
        gender: "Male",
        bio: "Sustainable food blogger and urban gardener. Shares recipes, gardening tips, and promotes local and seasonal eating.",
        topContent: ["Recipes", "Guides", "Tours"],
        platforms: [
          {
            name: "tiktok",
            followers: "800K",
            engagement: "10.0%",
            growth: "+3.0%",
            postFrequency: "Daily",
            audience: {
              age: "20-28",
              femalePercentage: "50%",
              malePercentage: "50%",
            },
            username: "@ethanzhaotiktoks",
          },
          {
            name: "youtube",
            followers: "300K",
            engagement: "6.0%",
            growth: "+1.5%",
            postFrequency: "Weekly",
            audience: {
              age: "25-35",
              femalePercentage: "52%",
              malePercentage: "48%",
            },
            username: "@ethanzhaoyt",
          },
        ],
      },
      sender: "ai",
    },
    {
      id: 11,
      type: "talent",
      content: {
        name: "Isabella Kim",
        imageURL: "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=150&h=150&q=80&crop=faces&fit=crop",
        age: 27,
        location: "New York, NY",
        gender: "Female",
        bio: "Minimalism and sustainable living enthusiast. Shares tips on decluttering, mindful consumption, and creating an intentional life.",
        topContent: ["Tips", "Challenges", "Vlogs"],
        platforms: [
          {
            name: "instagram",
            followers: "600K",
            engagement: "6.8%",
            growth: "+1.7%",
            postFrequency: "3x weekly",
            audience: {
              age: "25-35",
              femalePercentage: "70%",
              malePercentage: "30%",
            },
            username: "@isabellakim_minimal",
          },
          
          {
            name: "tiktok",
            followers: "400K",
            engagement: "8.0%",
            growth: "+2.0%",
            postFrequency: "Daily",
            audience: {
              age: "20-30",
              femalePercentage: "78%",
              malePercentage: "22%",
            },
            username: "@isabellakim_tiktoks",
          },
          {
            name: "youtube",
            followers: "200K",
            engagement: "5.0%",
            growth: "+1.0%",
            postFrequency: "Bi-weekly",
            audience: {
              age: "28-40",
              femalePercentage: "65%",
              malePercentage: "35%",
            },
            username: "@isabellakim_yt",
          },
          {
            name: "snapchat",
            followers: "180K",
            engagement: "5.5%",
            growth: "+1.1%",
            postFrequency: "Several times weekly",
            audience: {
              age: "23-33",
              femalePercentage: "75%",
              malePercentage: "25%",
            },
            username: "@isabellakimsnap",
          },
        ],
      },
      sender: "ai",
    },
    {
      id: 12,
      type: "talent",
      content: {
        name: "Mason Lee",
        imageURL: "https://images.unsplash.com/photo-1746310712275-c80c0f2dab27?w=150&h=150&q=80&crop=faces&fit=crop",
        age: 30,
        location: "Seattle, WA",
        gender: "Male",
        bio: "Sustainable business consultant and ethical investor. Shares insights on conscious capitalism, green technology, and responsible investing.",
        topContent: ["Analysis", "Interviews", "Insights"],
        platforms: [
          {
            name: "instagram",
            followers: "1M",
            engagement: "8.5%",
            growth: "+3.0%",
            postFrequency: "Daily",
            audience: {
              age: "30-50",
              femalePercentage: "40%",
              malePercentage: "60%",
            },
            username: "/in/masonlee",
          },
          {
            name: "youtube",
            followers: "500K",
            engagement: "7.0%",
            growth: "+2.5%",
            postFrequency: "Several times daily",
            audience: {
              age: "25-45",
              femalePercentage: "35%",
              malePercentage: "65%",
            },
            username: "@masonlee_biz",
          },
        ],
      },
      sender: "ai",
    },
  ]