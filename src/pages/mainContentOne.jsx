import React from "react";
import ThreadPost from "../components/threadPost.jsx";

const MainContent = () => {
  const posts = [
    {
      id: 1,
      user: {
        username: "dani_ismantoko",
        time: "16 jam",
        avatar: "assets/profile.jpg",
      },
      content:
        'Salah satu ciri pemerintahan sekarang adalah, ketika negara semrawut dalam melaksanakan kebijakan selalu bilang, "ada pihak asing yang ingin menghancurkan Indonesia".\n\nOsang, asing mulu dah. Pertanyaannya adalah, itu ulah pihak asing atau pejabat negara yang inkompeten?',
      likes: 86,
      comments: 6,
      reposts: 3,
      views: 1,
    },
    {
      id: 2,
      user: {
        username: "vinchenstaa",
        time: "11 jam",
        avatar: "assets/profile.jpg",
      },
      content:
        'Gengs.\nKemarin gw pulang naik mrt sekitar jam 20.30 an\n\nDan\nGw baru ngeh per bulan juni ini, kalau udah larut di stasiun nya di puterin musik ya?!\n((Puteriinnn!!!)))\nBukan gimana sih,\nMasalahnya kemarin lagu yang diputerin lagu ave maria.\n\nSemoga aja ada yg "ribet" abis ini.',
      likes: 111,
      comments: 67,
      reposts: 2,
      views: 3,
    },
    {
      id: 3,
      user: {
        username: "aniesbaswedan",
        time: "16 jam",
        avatar: "assets/profile.jpg",
      },
      content:
        "[LIVE] Pelaksanaan shalat Iduladha 1446 H di Masjid Agung Al Azhar Jakarta bersama khatib Anies Rasyid Baswedan.",
      image:
        "https://via.placeholder.com/400x200/222222/FFFFFF?text=Post+Image",
      likes: 2500,
      comments: 300,
      reposts: 150,
      views: 5000,
    },
  ];

  return (
    <div className="main-content flex-grow p-5 flex flex-col items-center justify-center mx-auto w-1/2 bg-[#181818] rounded-t-[20px] mt-16">
      <div className="main-content-header items-center w-full rounded-[10px] justify-center flex"></div>
      {posts.map((post) => (
        <ThreadPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default MainContent;
