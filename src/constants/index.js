import {
  send,
  paperPlane,
  communication,
  janeDoe,
  johnDoe,
  violet,
} from "../assets";

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

const testimonials = [
  {
    name: "Jane Doe",
    review:
      "I've been using this app for a few months now and it's a game-changer! No more switching between different social media apps to check my messages. With this app, I can see all my messages in one place, which saves me so much time and hassle. Highly recommend!",
    icon: janeDoe,
  },
  {
    name: "John Doe",
    review:
      "As someone who manages multiple social media accounts, this app has been a lifesaver. I used to spend hours each day checking different apps to respond to messages, but now I can see all my messages in one place. It's made my work so much more efficient and has helped me to provide better customer service.",
    icon: johnDoe,
  },
  {
    name: "Violet",
    review:
      "I was hesitant to try this app at first, but I'm so glad I did. It's so convenient to have all my social media messages in one place, and I love that I can respond to messages from multiple platforms without having to switch between apps. Plus, the interface is really user-friendly, which makes using the app a breeze.",
    icon: violet,
  },
];

export { features, testimonials };

/* <a href="https://www.flaticon.com/free-icons/sms" title="sms icons">Sms icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/paper-plane" title="paper plane icons">Paper plane icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dm" title="dm icons">Dm icons created by Freepik - Flaticon</a> */
