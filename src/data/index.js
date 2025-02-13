import {

  fs,
  st,
  my
} from "../assets";


export const navLinks = [
  {
    id: "start",
    title: "Start",
  },
  {
    id: "memories",
    title: "Memories",
  },
  {
    id: "milestones",
    title: "Milestones",
  },
  {
    id: "?",
    title: "?",
  },
];

const experiences = [
  {
    title: "First Date & A Bloody Nose",
    company_name: "Fair's Basement",
    date: "January 1st, 2019",
    details: [
      "You asked me out on New Year's, marking the start of our journey together.",
      "The moment was unforgettable, especially because I got a <span style='color: white;'>bloody nose</span> that night.",
      "A chaotic yet special beginning in the basement of Fair's.",
    ],
  },
  {
    title: "First Friends & Family Vacation",
    company_name: "Pigeon Forge, Tennessee",
    date: "July 2021",
    details: [
      "We went on our first trip with friends and family, creating lasting memories.",
      "Explored the beauty of the <span style='color: white;'>Smoky Mountains</span> through scenic hikes.",
      "Visited <span style='color: white;'>Dollywood</span>, enjoying the rides, food, and lively atmosphere.",
    ],
  },
  {
    title: "Starting College Together",
    company_name: "New Chapter, Same Campus",
    date: "September 2022",
    details: [
      "After a long period of long-distance, we finally got to <span style='color: white;'>spend more time together</span>.",
      "Synced up our schedules, making everyday moments feel special.",
      "Navigated college life side by side, strengthening our bond.",
    ],
  },
  {
    title: "Puerto Rico, Round Two",
    company_name: "An Unburdened Getaway",
    date: "January 2024",
    details: [
      "Returned to <span style='color: white;'>Puerto Rico</span> for an adventure-filled experience.",
      "This time, it was all about <span style='color: white;'>freedom and excitement</span>, no burdens attached.",
      "Spent our days & nights <span style='color: white;'> surfing, snorkeling, visiting cool bars</span>, and making unforgettable memories.",
    ],
  },
];

const memories = [
  {
    name: "Philadelphia, PA",
    description:
      "May 4th, 2019. Took the train from Doylestown to Philadelphia, visiting the Philadelphia Flower Show. One of our first dates, but still remember you resting your head on my shoulder on the way home.",
    image: fs,
  },
  {
    name: "Sugarbush, VT",
    description:
      "December 22, 2019. Only took a few months to invite you to what had been a tradition. Never have I felt so comfortable letting someone embrace myself as well as my friends. PS. You really need new goggles...",
    image: st,
  },
  {
    name: "Georgetown, SC",
    description:
      "March 16, 2023. Certainly not the most conventional vacation. Visiting Myrtle Beach is no longer a priority. However, stumbling into Brookgreen Gardens as a result of our Hotel Vouchers was a welcome surprise. Having that botanical garden to ourselves was something I will cherish forever.",
    image: my,
  },
];

export { experiences, memories };

