interface Testimonial {
    id: number;
    rating: number;
    title: string;
    text: string;
    name: string;
    verified: boolean;
  }
  
export const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      title: "תהליך המכירה היה פשוט וקל",
      text: "תהליך המכירה היה פשוט וקל. מקסימיליאן היה ידידותי ולא הרגשתי לחץ בכלל.",
      name: "עלי טופאן",
      verified: true
    },
    {
      id: 2,
      rating: 4,
      title: "עבודה טובה לפרויקט",
      text: "תהליך המכירה היה פשוט וקל. מקסימיליאן היה ידידותי ולא הרגשתי לחץ בכלל.",
      name: "ג'ון דו",
      verified: true
    },
    {
      id: 3,
      rating: 2,
      title: "תהליך המכירה היה פשוט וקל",
      text: "בוונצ׳ר מה שחשוב לנו הוא להפוך את חיפוש הרכב שלך לקל וברור.",
      name: "ברוקלין סימונס",
      verified: true
    },
    {
      id: 4,
      rating: 5,
      title: "עבודה טובה לפרויקט",
      text: "תהליך המכירה היה פשוט וקל. מקסימיליאן היה ידידותי ולא הרגשתי לחץ בכלל.",
      name: "אוגוסטה סילבה",
      verified: true
    },
  ];