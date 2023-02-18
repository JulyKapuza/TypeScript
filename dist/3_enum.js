"use strict";
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
const membership = Membership.Premium;
const membershipReverse = Membership[1];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["instargam"] = "Instagram";
    SocialMedia["facebook"] = "Facebook";
    SocialMedia["tiktok"] = "Tiktok";
})(SocialMedia || (SocialMedia = {}));
const social = SocialMedia.instargam;
console.log(social);
//# sourceMappingURL=3_enum.js.map