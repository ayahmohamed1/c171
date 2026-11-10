export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText?: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

const defaultThings: string[] = [
  "نتخطب ونبني حياة جميلة سوا 💍",
  "نقعد على البحر في الشتا ونحضن بعض جامد 🌊",
  "نسافر سوا لكل الأماكن اللي بنحلم بيها ✈️",
  "نتمشى تحت المطر وإيدينا في إيد بعض وما نسيبش بعض 🌧️",
  "نكبر سوا وأحبك أكتر كل يوم 🤍",
];

export const defaultLoveLetterParagraphs: string[] = [
  "يا نبيل، حبك أسهل وأجمل حاجة عملتها في حياتي.",
  "أنت أماني ودفاي، والشخص الوحيد اللي بقدر أكون معاه على طبيعتي.",
  "بحبك زي ما أنت، بقلبك الطيب وصوتك اللي بيطمني وابتسامتك الحلوة.",
  "بختارك في الأيام السهلة والصعبة، النهارده وكل السنين اللي جاية.",
  "كل سنة وأنت طيب يا شخصي المفضل للأبد، يا قلبي ويا مستقبلي.",
  "دايمًا وأبدًا، حبيبتك المفضلة 🤍",
];

const ahmedGift: GiftData = {
  senderName: "حور",
  receiverName: "نبيل",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "شوف المفاجآت الحلوة دي، معمولة مخصوص عشانك يا نبيل! ✨",
  birthdayImage: "/images/kid-placeholder.jpg",
  birthdayTitle: "إلى شخصي المفضل",
  birthdayText: "",
  balloonImage: "/images/cat.png",
  birthdayWishesTitle: "Happy 23th Birthday, Nabil! 🎂✨",
  birthdayWishesMessage:
    "كل سنه ونت طيب ينونو 🥹انا عارفه اننا مرينا بحاجات كتير صعبه سوا بس هتعدى يحبيبى الفتره دى زى معدينا كل حاجه سوا ونستاهل نسيب كل حاجه بدال ف الاخر هنبقى مع بعض وعايزه اقولك انك احسن واشطر راجل ف الدنيا وربنا يخليك ليا يحبيبى متحرمش منك ابدا بحبك❤️🫂",
  thingsWeWannaDo: defaultThings,
  loveLetterTitle: "الحاجات الصغيرة اللي بحبها فيك",
  loveLetterSubtitle: "إلى نبيل، بكل حبي ❤️",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "Our Special Track",
};

const giftData: Record<string, GiftData> = {
  ahmed: ahmedGift,
  amir: ahmedGift,
  aya: {
    ...ahmedGift,
    senderName: "Aya",
    cardMessage: "شوف المفاجآت الحلوة دي، معمولة مخصوص عشانك! ✨",
  },
};

export default giftData;