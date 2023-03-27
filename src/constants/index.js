import { send, paperPlane, communication } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "services",
    title: "Our Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const features = [
  {
    title: "Direct Connections",
    subtitle: "Read & respond to DM's from your social media accounts",
    icon: send,
  },
  {
    title: "Effortless Engagement",
    subtitle:
      "Set up auto-responders, which allow you to create custom auto-respond messages based on keywords identified from incoming DM's.",
    icon: communication,
  },
  {
    title: "Bulk Messaging",
    subtitle: "Mass DM selected recipients.",
    icon: paperPlane,
  },
];

export { features };

/* <a href="https://www.flaticon.com/free-icons/sms" title="sms icons">Sms icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/paper-plane" title="paper plane icons">Paper plane icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dm" title="dm icons">Dm icons created by Freepik - Flaticon</a> */
