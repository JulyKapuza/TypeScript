enum Membership {
  Simple,
  Standart,
  Premium,
}

const membership = Membership.Premium;
const membershipReverse = Membership[1];

console.log(membership); // 2 (index)
console.log(membershipReverse); //  Standart

enum SocialMedia {
  instargam = "Instagram",
  facebook = "Facebook",
  tiktok = "Tiktok",
}

const social = SocialMedia.instargam;
console.log(social);
