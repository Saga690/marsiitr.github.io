//import img from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer.tsx";
import "../../styles/Projects.css";

export default function FollowingPointerDemo() {
  return (
    // (<div className="w-80 mx-auto">
    //   <FollowerPointerCard
    //     title={
    //       <TitleComponent title={blogContent.author} avatar={blogContent.authorAvatar} />
    //     }>
    //     <div
    //       className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
    //       <div
    //         className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
    //         <img
    //           src={blogContent.image}
    //           alt="thumbnail"
    //           layout="fill"
    //           objectFit="cover"
    //           className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `} />
    //       </div>
    //       <div className=" p-4">
    //         <h2 className="font-bold my-4 text-lg text-zinc-700">
    //           {blogContent.title}
    //         </h2>
    //         <h2 className="font-normal my-4 text-sm text-zinc-500">
    //           {blogContent.description}
    //         </h2>
    //         <div className="flex flex-row justify-between items-center mt-10">
    //           <span className="text-sm text-gray-500">{blogContent.date}</span>
    //           <div
    //             className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
    //             Read More
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </FollowerPointerCard>
    // </div>)
    <div class="Project-container">
  <div class="follower-pointer-card">
    <div class="Project-relative-card">
      <div class="Project-image-wrapper">
        <img src="/demo/thumbnail.png" alt="thumbnail" class="Project-image-thumbnail" />
      </div>
      <div class="Project-content">
        <h2 class="Project-title">Amazing Tailwindcss Grid Layout Examples</h2>
        <h2 class="Project-description">
          Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcss grid and React.
        </h2>
        <div class="Project-footer">
          <span class="Project-date">28th March, 2023</span>
          <div class="Project-read-more">Read More</div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image:"memberd.jpg",
  //  "/demo/thumbnail.png",
  authorAvatar: "memberd.jpg",
  // "/manu.png",
};

const TitleComponent = ({
  title,
  avatar,
}) => (
  // <div className="flex space-x-2 items-center">
  //   <img
  //     src={avatar}
  //     height="20"
  //     width="20"
  //     alt="thumbnail"
  //     className="rounded-full border-2 border-white" />
  //   <p>{title}</p>
  // </div>
  // /path/to/avatar.png
  <div class="Project-title-component">
  <img src="/path/to/avatar.png" height="20" width="20" alt="thumbnail" class="Project-avatar" />
  <p>Title Text Here</p>
</div>

);
