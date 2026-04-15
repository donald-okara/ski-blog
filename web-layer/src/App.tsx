/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Home } from "@/pages/Home";
import { BlogPost } from "@/pages/BlogPost";
import { About } from "@/pages/About";
import { AuthorProfile } from "@/pages/AuthorProfile";
import { Playlists } from "@/pages/Playlists";
import { PlaylistDetail } from "@/pages/PlaylistDetail";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/author/:username" element={<AuthorProfile />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlist/:slug" element={<PlaylistDetail />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-bg text-fg selection:bg-fg/10 selection:text-fg">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
