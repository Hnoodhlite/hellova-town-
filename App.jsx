import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const ProfileCard = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl"
    >
      <div className="flex flex-col items-center">
        <img
          src={user.image}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover shadow-md"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d";
          }}
        />
        <h3 className="mt-4 text-xl font-bold text-gray-800">{user.name}</h3>
        <p className="mt-2 text-gray-600 text-center">{user.bio}</p>
        <div className="mt-4 flex space-x-4">
          {user.interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
        <div className="mt-6 flex space-x-4">
          <FaGithub className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer" />
          <FaTwitter className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer" />
          <FaLinkedin className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer" />
        </div>
      </div>
    </motion.div>
  );
};

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-pattern animate-float"></div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [users] = useState([
    {
      name: "Sarah Johnson",
      bio: "UI/UX Designer | Creative Thinker",
      interests: ["Design", "Art", "Technology"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Michael Chen",
      bio: "Full Stack Developer | Open Source Contributor",
      interests: ["Coding", "Music", "Travel"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Emma Williams",
      bio: "Product Manager | Tech Enthusiast",
      interests: ["Strategy", "Innovation", "Reading"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      
      <header className="pt-16 pb-8 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Profile Page
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-gray-600"
        >
          Welcome to our amazing community!
        </motion.p>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <ProfileCard key={index} user={user} />
          ))}
        </div>
      </main>

      <footer className="py-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-2xl font-arabic text-gray-800"
        >
          I love you all - Anoud
        </motion.div>
      </footer>
    </div>
  );
};

export default ProfilePage;
