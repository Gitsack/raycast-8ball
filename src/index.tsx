import { Toast, ToastStyle } from "@raycast/api";
import { setTimeout } from "timers/promises";

interface Answer {
  title: string;
}

export default async () => {

  const answers : Answer[] = [
    { title: "Nah, don't do it." },
    { title: "Nope" },
    { title: "Definitely not." },
    { title: "Anything but that." },
    { title: "No." },
    { title: "NO!" },
    { title: "You know what to do." },
    { title: "You have to ask?!" },
    { title: "Ask me another time." },
    { title: "I really don't know.." },
    { title: "Yes." },
    { title: "YES!" },
    { title: "YEAH!!" },
    { title: "Of course!" },
    { title: "Yesss." },
    { title: "I'm sure." },
    { title: "Certainly." },
    { title: "Why not?" },
    { title: "Can't think of any reason why not." },
  ];

  const randomElement = answers[Math.floor(Math.random() * answers.length)];

  const toast = new Toast({ style: ToastStyle.Animated, title: "The Magic 8-Ball says.." });
  await toast.show();

  await setTimeout(300);

  toast.style = ToastStyle.Success;
  toast.title = randomElement.title;

}
