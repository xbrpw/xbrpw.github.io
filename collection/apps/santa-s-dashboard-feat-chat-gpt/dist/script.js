import React, { useState } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

function Header() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "hidden md:block" }, /*#__PURE__*/
    React.createElement("div", {
      className: "h-32",
      style: {
        background: `#FFE6E5 url("https://res.cloudinary.com/ds574fco0/image/upload/v1671535323/live/santa-dashboard/bgx_nztbea.png")` } }), /*#__PURE__*/


    React.createElement("div", {
      className: "h-8",
      style: {
        background:
        "linear-gradient(180deg, #FFE6E5 0%, rgba(255, 230, 229, 0) 100%)" } })));




}

function Main({ children }) {
  return /*#__PURE__*/React.createElement("main", { className: "ml-0 md:ml-80 px-4 pb-20" }, children);
}

const giftList = [
{
  id: 1,
  name: "Jacob",
  naughty: true,
  behaviors: [
  "Threw a tantrum in the grocery store",
  "Refused to eat his vegetables",
  "Broke a family heirloom"],

  presents: ["Coal"],
  note: "Dear Santa, I'm sorry for throwing a tantrum in the grocery store. I will try to be more patient and eat my vegetables. Love, Jacob",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671464566/live/santa-dashboard/339a9bef-436f-495e-829e-cf9f23eba9e4_s0mqvh.jpg" },

{
  id: 2,
  name: "Emily",
  naughty: false,
  behaviors: [
  "Gave a homeless person a warm meal",
  "Donated her allowance to a animal shelter",
  "Helped a neighbor with their yard work"],

  presents: ["Doll", "Puzzle"],
  note: "Dear Santa, Thank you for all of the presents you bring every year. I hope you have a safe and happy journey. Love, Emily",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671464567/live/santa-dashboard/fece0a96-5266-46da-b47f-f0603a9f562b_nrm8qs.jpg" },

{
  id: 3,
  name: "William",
  naughty: true,
  behaviors: [
  "Took a toy from a younger sibling",
  "Lied about eating the last cookie",
  "Pushed a classmate on the playground"],

  presents: ["Coal"],
  note: "Dear Santa, I'm sorry for taking my little brother's toy and lying about eating the last cookie. I will try to be more kind and honest. Love, William",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671464566/live/santa-dashboard/clbuybmg400072a6b56njeui2_ys6aos.jpg" },

{
  id: 4,
  name: "Mia",
  naughty: false,
  behaviors: [
  "Helped a classmate with their reading",
  "Donated clothes to a thrift store",
  "Wrote a thank-you note to a grandparent"],

  presents: ["Play kitchen", "Dress-up clothes"],
  note: "Dear Santa, Thank you for bringing me presents every year. I hope you have a magical Christmas. Love, Mia",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671464567/live/santa-dashboard/v_trfiqv.jpg" },

{
  id: 5,
  name: "Emma",
  naughty: false,
  behaviors: [
  "helping her little brother with his homework",
  "cleaning up after herself"],

  presents: ["a new dress", "a toy horse"],
  note: "I've been really good this year, Santa. I hope you can bring me the presents on my list!, Emma",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671464564/live/santa-dashboard/46ea6c3d-f388-4aaa-8f6c-7a4176cc9c14_diewy1.jpg" },

{
  id: 6,
  name: "Ryan",
  naughty: false,
  behaviors: [
  "following the rules at school",
  "picking up litter in the park"],

  presents: ["a new skateboard", "a basketball"],
  note: "I hope you have a safe trip on Christmas Eve, Santa. I can't wait to see what you bring me!, Ryan",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671464564/live/santa-dashboard/4d637843-cc66-4a35-82c6-7aa47ab39eee_rfxkjt.jpg" },

{
  id: 7,
  name: "Kaitlyn",
  naughty: false,
  behaviors: [
  "sharing her toys with her friends",
  "saying please and thank you"],

  presents: ["a new bike", "a puzzle"],
  note: "Thank you for all the presents you bring every year, Santa. I can't wait to see what you bring me this year!, Kaitlyn",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671605509/live/santa-dashboard/05a6baf3-1818-4240-8874-08d891eecd70_tesp99.jpg" },

{
  id: 8,
  name: "Christopher",
  naughty: true,
  behaviors: ["not listening to his parents", "fighting with his siblings"],
  presents: ["Coal"],
  note: "I'm sorry I haven't been very good this year, Santa. I promise to do better next year, Christopher",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671464564/live/santa-dashboard/3a4888b9-e640-4065-add0-0eba58d0a63e_swgzpf.jpg" }];



function Gifts() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "" }, /*#__PURE__*/
    React.createElement("div", { className: "px-4 font-bold text-2xl mt-4" }, "Gifts"),
    giftList.map((i) => /*#__PURE__*/
    React.createElement("div", { className: "py-2 px-4", key: i.name }, /*#__PURE__*/
    React.createElement("div", { className: "flex flex-wrap xl:flex-nowrap drop-shadow-md bg-white" }, /*#__PURE__*/
    React.createElement("div", { className: "w-32 shrink-0 p-3" }, /*#__PURE__*/
    React.createElement("div", { className: "h-full grid place-items-center" }, /*#__PURE__*/
    React.createElement("div", { className: "" }, /*#__PURE__*/
    React.createElement("div", { className: "h-24 w-24" }, /*#__PURE__*/
    React.createElement("img", { alt: "", src: i.image })), /*#__PURE__*/

    React.createElement("div", { className: "text-center font-semibold mt-1" }, i.name)))), /*#__PURE__*/



    React.createElement("div", { className: "w-32 shrink-0 p-3" }, /*#__PURE__*/
    React.createElement("div", { className: "h-full grid place-items-center" }, /*#__PURE__*/
    React.createElement("div", { className: "h-8 w-8" }, /*#__PURE__*/
    React.createElement("img", {
      alt: "",
      src:
      i.naughty ?
      "https://res.cloudinary.com/ds574fco0/image/upload/v1671536252/live/santa-dashboard/naugthy_leb49u.png" :
      "https://res.cloudinary.com/ds574fco0/image/upload/v1671536252/live/santa-dashboard/nice_gbojhu.jpg" })))), /*#__PURE__*/





    React.createElement("div", { className: "w-72 shrink-0 p-3" }, /*#__PURE__*/
    React.createElement("ul", { className: "list-disc ml-4" },
    i.behaviors.map((j) => /*#__PURE__*/
    React.createElement("li", { key: j, className: "py-1.5" },
    j)))), /*#__PURE__*/




    React.createElement("div", { className: "w-44 shrink-0 p-3" }, /*#__PURE__*/
    React.createElement("ul", null,
    i.presents.map((j) => /*#__PURE__*/
    React.createElement("li", { key: j, className: "py-1.5 flex" }, /*#__PURE__*/
    React.createElement("div", null, i.naughty ? `🖤` : `🎁`), /*#__PURE__*/
    React.createElement("div", { className: "ml-2" }, j))))), /*#__PURE__*/




    React.createElement("div", { className: "w-full 2xl:grow  p-3 italic" }, `"${i.note}"`))))));





}

const toDosList = [
{
  key: 1,
  tasks: [
  {
    key: 1,
    desc: "Review the list of children and their wish lists",
    isDone: false },

  {
    key: 2,
    desc: "Make any necessary updates or changes to the list",
    isDone: false }] },



{
  key: 2,
  tasks: [
  {
    key: 1,
    desc: "Check in with your elves",
    isDone: false },

  {
    key: 2,
    desc: "Make sure they have everything they need to start preparing the gifts",
    isDone: false }] },



{
  key: 3,
  tasks: [
  {
    key: 1,
    desc: "Meet with your lead elf to discuss the gift-making schedule",
    isDone: false },

  {
    key: 2,
    desc: "Assign tasks to the other elves",
    isDone: false },

  {
    key: 3,
    desc: "Start preparing your workshop for the busy season",
    isDone: false }] },



{
  key: 4,
  tasks: [
  {
    key: 1,
    desc: "Make any necessary repairs or upgrades to your sleigh and equipment",
    isDone: false },

  {
    key: 2,
    desc: "Check the condition of your reindeer harnesses",
    isDone: false }] },



{
  key: 5,
  tasks: [
  {
    key: 1,
    desc: "Start packing your supplies for the trip",
    isDone: false },

  {
    key: 2,
    desc: "Include food for the reindeer and any spare parts you might need",
    isDone: false },

  {
    key: 3,
    desc: "Check the weather forecast for Christmas Eve",
    isDone: false }] },



{
  key: 6,
  tasks: [
  {
    key: 1,
    desc: "Confirm with your lead elf that all the gifts are finished and ready to go",
    isDone: false },

  {
    key: 2,
    desc: "Double-check your list of children to make sure you have everything you need to deliver their presents",
    isDone: false }] },



{
  key: 7,
  tasks: [
  {
    key: 1,
    desc: "Have a dry run with your reindeer to make sure they are in good shape for the trip",
    isDone: false },

  {
    key: 2,
    desc: "Check the condition of your sleigh and make any necessary repairs",
    isDone: false }] },



{
  key: 8,
  tasks: [
  {
    key: 1,
    desc: "Have a team meeting with your elves to review the plan for Christmas Eve",
    isDone: false },

  {
    key: 2,
    desc: "Address any last-minute questions or concerns",
    isDone: false },

  {
    key: 3,
    desc: "Pack any remaining supplies",
    isDone: false }] },



{
  key: 9,
  tasks: [
  {
    key: 1,
    desc: "Finalize your packing and load up the sleigh with all the gifts and supplies",
    isDone: false },

  {
    key: 2,
    desc: "Check in with your lead elf to make sure everything is ready for the big trip",
    isDone: false }] },



{
  key: 10,
  tasks: [
  {
    key: 1,
    desc: "Have a quick meal with your elves to fuel up for the big trip",
    isDone: false },

  {
    key: 2,
    desc: "Get a good night's sleep to rest up for the long journey ahead",
    isDone: false }] },



{
  key: 11,
  tasks: [
  {
    key: 1,
    desc: "Make any final adjustments to your route and plan for the night",
    isDone: false },

  {
    key: 2,
    desc: "Double-check that you have everything you need for the journey",
    isDone: false }] },



{
  key: 12,
  tasks: [
  {
    key: 1,
    desc: "Say goodbye to your elves and thank them for their hard work",
    isDone: false },

  {
    key: 2,
    desc: "Climb into your sleigh and get ready for the long journey ahead",
    isDone: false }] },



{
  key: 13,
  tasks: [
  {
    key: 1,
    desc: "Ho ho ho! It's Christmas Eve!",
    isDone: false },

  {
    key: 2,
    desc: "Set off on your journey, delivering presents to all the good boys and girls around the world",
    isDone: false }] }];





function Tick({ ticked }) {
  return /*#__PURE__*/(
    React.createElement("svg", {
      className: "w-full h-full",
      viewBox: "0 0 64 64",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("path", {
      d: "M17 33.5L29 45.5L47 18.5",
      stroke: ticked ? "#20bf55" : "#edebea",
      strokeWidth: "5",
      strokeLinecap: "round",
      strokeLinejoin: "round" })));



}

function Todos() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "" }, /*#__PURE__*/
    React.createElement("div", { className: "px-4 font-bold text-2xl mt-4" }, "Tasks"), /*#__PURE__*/
    React.createElement("div", { className: "flex flex-wrap px-2 mt-2" },
    toDosList.map((i, dayIndex) => /*#__PURE__*/
    React.createElement("div", { className: "p-2 w-full lg:w-1/2", key: i.key }, /*#__PURE__*/
    React.createElement("div", { className: "bg-white drop-shadow-md rounded-md flex h-full" }, /*#__PURE__*/
    React.createElement("div", { className: "w-32" }, /*#__PURE__*/
    React.createElement("div", { className: "w-32 h-32 p-4 relative" }, /*#__PURE__*/
    React.createElement("img", {
      alt: "",
      src: "https://res.cloudinary.com/ds574fco0/image/upload/v1671536525/live/santa-dashboard/cal_fyo4zn.png" }), /*#__PURE__*/

    React.createElement("div", {
      className: "absolute text-3xl font-semibold text-gray-400",
      style: {
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)" } },


    i.key + 11))), /*#__PURE__*/



    React.createElement("div", { className: "grow p-3" }, /*#__PURE__*/
    React.createElement("ul", null,
    i.tasks.map((j, index) => /*#__PURE__*/
    React.createElement("li", { key: j.key, className: "text-sm py-2 relative" }, /*#__PURE__*/
    React.createElement("div", { className: "px-4" }, " ", j.desc, " "), /*#__PURE__*/
    React.createElement("div", {
      className: "absolute rounded-full",
      style: {
        width: "2px",
        left: "-1px",
        top: 0,
        bottom: 0,
        background: "#edebea" } }), /*#__PURE__*/


    React.createElement("div", {
      className: "absolute rounded-full w-5 h-5 bg-white",
      style: {
        left: 0,
        top: "50%",
        transform: "translate(-50%, -50%)" } }, /*#__PURE__*/


    React.createElement(Tick, { ticked: dayIndex < 4 }))))))))))));











}

const elves = [
{
  id: 1,
  name: "Elfie",
  email: "elfie@northpole.com",
  phone: "123-456-7890",
  specialty: "Toy Making",
  service: "5 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671452662/live/santa-dashboard/a3271b4c-d45e-462b-baa2-a5330fe5862b_qr0f9z.jpg" },

{
  id: 2,
  name: "Elmer",
  email: "elmer@northpole.com",
  phone: "098-765-4321",
  specialty: "Gift Wrapping",
  service: "3 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671452650/live/santa-dashboard/8a334fad-2472-499f-9199-e316bbf74c6f_ihyav0.jpg" },

{
  id: 3,
  name: "Eli",
  email: "eli@northpole.com",
  phone: "555-555-5555",
  specialty: "Reindeer Care",
  service: "10 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671452652/live/santa-dashboard/86cf80ca-815c-4261-8201-5aa7cd22fc6d_pggagy.jpg" },

{
  id: 4,
  name: "Evelyn",
  email: "evelyn@northpole.com",
  phone: "222-222-2222",
  specialty: "Cookie Baking",
  service: "8 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671452655/live/santa-dashboard/427e17d6-4335-429b-a20a-78391dc41d51_ieylfq.jpg" },

{
  id: 5,
  name: "Eddie",
  email: "eddie@northpole.com",
  phone: "333-333-3333",
  specialty: "Toy Testing",
  service: "7 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671452647/live/santa-dashboard/28aa241d-01bc-406c-a2ea-fbf213046b65_amqvj0.jpg" },

{
  id: 6,
  name: "Eliot",
  email: "eliot@northpole.com",
  phone: "444-444-4444",
  specialty: "Reindeer Training",
  service: "9 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671452644/live/santa-dashboard/4ffe565f-d019-4458-82a4-a7aa768279df_xsqu4g.jpg" }];



const raindeers = [
{
  id: 1,
  name: "Rudolph",
  email: "rudolph@northpole.com",
  phone: "123-456-7890",
  specialty: "Leading the Sleigh",
  service: "10 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671452671/live/santa-dashboard/c8d9d148-d68f-4d01-9002-2e56c598f732_vgy39w.jpg" },

{
  id: 2,
  name: "Dasher",
  email: "dasher@northpole.com",
  phone: "098-765-4321",
  specialty: "Speed",
  service: "8 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671452665/live/santa-dashboard/a6471b50-8f91-4827-b8ee-831ad9a1690a_cmwbrg.jpg" },

{
  id: 3,
  name: "Dancer",
  email: "dancer@northpole.com",
  phone: "555-555-5555",
  specialty: "Agility",
  service: "9 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671452659/live/santa-dashboard/588235ee-439a-4ed0-a0ee-2b578e59a464_lutxhp.jpg" },

{
  id: 4,
  name: "Prancer",
  email: "prancer@northpole.com",
  phone: "222-222-2222",
  specialty: "Grace",
  service: "7 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671452657/live/santa-dashboard/561fb765-04d0-4157-8adf-13aa4ecac517_mt9dym.jpg" },

{
  id: 5,
  name: "Vixen",
  email: "vixen@northpole.com",
  phone: "333-333-3333",
  specialty: "Beauty",
  service: "6 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671452648/live/santa-dashboard/61a14a28-b150-494f-8578-9762a57d161a_x5pl8k.jpg" },

{
  id: 6,
  name: "Comet",
  email: "comet@northpole.com",
  phone: "444-444-4444",
  specialty: "Power",
  service: "5 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671452646/live/santa-dashboard/9f58cdf5-a66d-4c26-ad43-caaf11c82f5d_jf1ips.jpg" },

{
  id: 7,
  name: "Donner",
  email: "donner@northpole.com",
  phone: "111-111-1111",
  specialty: "Strength",
  service: "4 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671454176/live/santa-dashboard/574c4198-ceb9-4733-9eca-3b71d183bc17_dhyghc.jpg" },

{
  id: 8,
  name: "Blitzen",
  email: "blitzen@northpole.com",
  phone: "999-999-9999",
  specialty: "Endurance",
  service: "3 years",
  image:
  "https://res.cloudinary.com/ds574fco0/image/upload/v1671454176/live/santa-dashboard/f1362eb7-0763-4d73-a51a-ba408ec6be80_ewqmqc.jpg" }];



const tableItems = ["email", "phone", "specialty", "service"];

function StaffItem({ item }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "" }, /*#__PURE__*/
    React.createElement("div", { className: " h-12" }, " "), /*#__PURE__*/
    React.createElement("div", { className: "bg-white drop-shadow-md rounded-lg" }, /*#__PURE__*/
    React.createElement("div", { className: "flex justify-center" }, /*#__PURE__*/
    React.createElement("div", {
      className: "h-24 w-24 bg-white rounded-full p-1.5",
      style: { marginTop: "-48px" } }, /*#__PURE__*/

    React.createElement("img", {
      alt: item.name,
      src: item.image,
      className: "w-full rounded-full" }))), /*#__PURE__*/



    React.createElement("div", { className: "flex justify-center" }, /*#__PURE__*/
    React.createElement("div", { className: "pt-2 text-lg font-semibold" }, " ", item.name, " ")), /*#__PURE__*/

    React.createElement("div", { className: "p-3" }, /*#__PURE__*/
    React.createElement("table", { className: "w-full" }, /*#__PURE__*/
    React.createElement("tbody", null,
    tableItems.map((i) => /*#__PURE__*/
    React.createElement("tr", { key: i }, /*#__PURE__*/
    React.createElement("td", { className: "capitalize font-semibold text-sm" }, i), /*#__PURE__*/

    React.createElement("td", { className: "text-right text-sm" }, item[i])))))))));








}

function Staff() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "" }, /*#__PURE__*/
    React.createElement("div", { className: "px-4 font-bold text-2xl mt-4" }, " Reindeers"), /*#__PURE__*/
    React.createElement("div", { className: "flex flex-wrap mt-2" },
    raindeers.map((i) => /*#__PURE__*/
    React.createElement("div", {
      className: "p-2 w-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4",
      key: i.name }, /*#__PURE__*/

    React.createElement(StaffItem, { item: i })))), /*#__PURE__*/



    React.createElement("div", { className: "px-4 font-bold text-2xl pt-8 pb-6" }, "Elves"), /*#__PURE__*/
    React.createElement("div", { className: "flex flex-wrap" },
    elves.map((i) => /*#__PURE__*/
    React.createElement("div", {
      className: "p-2 w-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4",
      key: i.name }, /*#__PURE__*/

    React.createElement(StaffItem, { item: i }))))));





}

const notificationsList = [
{
  title: "Task Update: Toy Delivery",
  description:
  "Toy delivery is 95% complete. Remaining toys will be delivered by end of day.",
  priority: "Low" },

{
  title: "Latest News: North Pole Temperature Drop",
  description:
  "The temperature at the North Pole has dropped to -20 degrees. Please make sure all elves are dressed warmly.",
  priority: "Medium" },

{
  title: "Child's Request: Puppy for Christmas",
  description:
  "A child has requested a puppy for Christmas. Please assign an elf to research and source a suitable breed.",
  priority: "High" },

{
  title: "Task Update: Reindeer Training",
  description:
  "Reindeer training is 85% complete. Remaining training sessions will be completed by end of week.",
  priority: "Low" },

{
  title: "Child's Request: Bicycle for Christmas",
  description:
  "A child has requested a bicycle for Christmas. Please assign an elf to research and source a suitable model.",
  priority: "Medium" },

{
  title: "Task Update: Gift Wrapping",
  description:
  "Gift wrapping is 60% complete. Additional elves have been assigned to complete the task by the deadline.",
  priority: "High" },

{
  title: "Task Update: Elf Training",
  description:
  "Elf training is 90% complete. Remaining training sessions will be completed by end of day.",
  priority: "Low" },

{
  title: "Child's Request: Video Game Console for Christmas",
  description:
  "A child has requested a video game console for Christmas. Please assign an elf to research and source a suitable model.",
  priority: "Medium" },

{
  title: "Task Update: Gift Sorting",
  description:
  "Gift sorting is 75% complete. Additional elves have been assigned to complete the task by the deadline.",
  priority: "High" }];


const priorityColorMap = {
  High: "#F6A9B7",
  Medium: "#FBF7A9",
  Low: "#96DC9D" };


const RequestTypeMap = {
  "Task Update": "📒",
  "Child's Request": "👶",
  "Latest News": "📻" };


function Notificatios() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "" }, /*#__PURE__*/
    React.createElement("div", { className: "px-4 font-bold text-2xl mt-4" }, "Notifications"), /*#__PURE__*/
    React.createElement("ul", { className: "px-4 mt-4" },
    notificationsList.map((i, index) => /*#__PURE__*/
    React.createElement("li", {
      key: index,
      className: "my-2 drop-shadow-md rounded-md pl-3",
      style: { background: priorityColorMap[i.priority] } }, /*#__PURE__*/

    React.createElement("div", { className: "bg-white rounded-r-md  p-3 " }, /*#__PURE__*/
    React.createElement("div", { className: "flex items-center justify-between" }, /*#__PURE__*/
    React.createElement("div", { className: "text-lg font-semibold" }, " ", i.title, " "), /*#__PURE__*/

    React.createElement("div", { className: "text-lg" },
    RequestTypeMap[i.title.split(":")[0]])), /*#__PURE__*/


    React.createElement("p", { className: "py-2" }, i.description)))))));






}

const menuItems = [
{
  id: 1,
  title: "Gifts",
  icon: "🎁",
  Component: Gifts },

{
  id: 2,
  title: "To Dos",
  icon: "✔️",
  Component: Todos },

{
  id: 3,
  title: "Staff",
  icon: "🦌",
  Component: Staff },

{
  id: 4,
  title: "Notifications",
  icon: "🔔",
  Component: Notificatios }];



function Sidebar({ setSelected, selected }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "static md:fixed top-8 left-8 bottom-8 w-full md:w-72 bg-white drop-shadow-md rounded-md", style: { minHeight: '500px' } }, /*#__PURE__*/
    React.createElement("div", { className: "py-12 flex flex-col items-center" }, /*#__PURE__*/
    React.createElement("img", {
      src: "https://res.cloudinary.com/ds574fco0/image/upload/v1671535506/live/santa-dashboard/avatar_sukgf2.png",
      alt: "avatar",
      className: "w-32 h-32 rounded-full" }), /*#__PURE__*/

    React.createElement("h2", { className: "mt-4 text-xl font-semibold text-gray-800" }, "Santa Claus \uD83C\uDF84"), /*#__PURE__*/


    React.createElement("div", { className: "mt-12" }, /*#__PURE__*/
    React.createElement("ul", null,
    menuItems.map((i) => /*#__PURE__*/
    React.createElement("li", { key: i.id, className: "py-2" }, /*#__PURE__*/
    React.createElement("button", {
      className: "flex items-center py-1 px-3 w-36 rounded-full",
      style: {
        border: "1px solid #b7aeac",
        background: selected === i.id ? "#ffe6e5" : "white" },

      onClick: () => setSelected(i.id) }, /*#__PURE__*/

    React.createElement("span", { className: "w-6" }, i.icon), /*#__PURE__*/
    React.createElement("span", null, i.title)))))))));








}

function App() {
  const [selected, setSelected] = useState(1);

  const C = menuItems.find(i => i.id === selected).Component;
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(Header, null), /*#__PURE__*/
    React.createElement(Sidebar, { setSelected: setSelected, selected: selected }), /*#__PURE__*/
    React.createElement(Main, null, /*#__PURE__*/
    React.createElement(C, null))));



}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null),
document.getElementById("root"));