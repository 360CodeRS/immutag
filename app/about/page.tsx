"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import { FaUserAstronaut, FaUserNinja, FaUserSecret, FaUserTie } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ava Tran",
    role: "CEO & Co-Founder",
    bio: "Former blockchain architect at major tech companies. 10+ years in cybersecurity.",
    icon: FaUserAstronaut,
  },
  {
    name: "Leo Mendes",
    role: "CTO & Co-Founder",
    bio: "Smart contract expert and full-stack developer. Previously led engineering at fintech startups.",
    icon: FaUserNinja,
  },
  {
    name: "Dr. Nora Patel",
    role: "Head of Security",
    bio: "PhD in Cryptography. Former security researcher at government agencies.",
    icon: FaUserSecret,
  },
  {
    name: "Ethan Brooks",
    role: "Head of Product",
    bio: "Product strategist with experience in consumer electronics and IoT devices.",
    icon: FaUserTie,
  },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We empower individuals and businesses with clear, secure, and indisputable proof of ownership.",
  },
  {
    icon: Users,
    title: "Collaboration-Focused",
    description:
      "We partner with manufacturers, insurers, and law enforcement to protect assets effectively.",
  },
  {
    icon: Lightbulb,
    title: "Technologically Advanced",
    description:
      "We combine blockchain innovation with physical tagging to secure ownership.",
  },
  {
    icon: Award,
    title: "Trust & Transparency",
    description:
      "We reduce fraud and disputes by making ownership verifiable and transferable.",
  },
];

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const pageRef = useRef<HTMLDivElement>(null);

  const valuesControls = useAnimation();
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (valuesInView) {
      valuesControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  }, [valuesInView, valuesControls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section") || "";
            setVisibleSections((prev) =>
              prev.includes(sectionId) ? prev : [...prev, sectionId]
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = pageRef.current?.querySelectorAll("[data-section]");
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="pt-16 bg-gray-950 text-white">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/about_us_bg.mp4" type="video/mp4" />
          </video>
          {/* Overlays for enhanced readability */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/30 to-gray-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Our Story, Our Mission, Our Vision
          </h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        data-section="mission"
        className={`relative py-28 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 transition-all duration-1000 ${
          visibleSections.includes("mission")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At Immutag, our mission is to empower individuals and businesses
                by providing clear, secure, and indisputable proof of ownership.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                By combining advanced blockchain technology with physical
                tagging, we’re revolutionizing how ownership is secured and
                verified.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                A world where every valuable asset is protected, verifiable, and
                effortlessly transferable—reducing theft, fraud, and disputes
                over ownership.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our vision is rooted in trust and transparency, where digital
                ownership meets real-world protection, empowering individuals
                and institutions alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section
        data-section="story"
        className={`relative py-28 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 transition-all duration-1000 ${
          visibleSections.includes("story")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
          <div className="w-20 h-1 mx-auto bg-blue-500 rounded-full" />
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Immutag began as LOX Network, evolving into a leading provider of
            blockchain-based verification solutions. We collaborate closely with
            manufacturers, insurance providers, network operators, and law
            enforcement to ensure every device or asset registered on our
            platform is securely protected.
          </p>
        </div>
      </section>

      {/* Our Values (Framer Motion applied) */}
      <motion.section
        ref={valuesRef}
        data-section="values"
        initial={{ opacity: 0, y: 50 }}
        animate={valuesControls}
        className="py-28"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <div className="w-20 h-1 mx-auto bg-blue-500 rounded-full mb-4" />
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Core principles that guide everything we build—security, trust,
              innovation, and collaboration.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="flex sm:hidden overflow-x-auto gap-4 pb-2 -mx-2 px-2 snap-x snap-mandatory">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="min-w-[80%] snap-start bg-gray-800 border border-blue-500/20 shadow-md rounded-2xl"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-4 bg-blue-500/10 rounded-full">
                        <Icon className="h-8 w-8 text-blue-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-gray-800 border border-blue-500/20 shadow-md hover:shadow-xl rounded-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-4 bg-blue-500/10 rounded-full">
                        <Icon className="h-8 w-8 text-blue-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Our Team */}
      <section
        data-section="team"
        className={`relative py-28 bg-gray-900 transition-all duration-1000 ${
          visibleSections.includes("values")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <div className="w-20 h-1 mx-auto bg-blue-500 rounded-full mb-4" />
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Led by blockchain experts, security specialists, and technology
              entrepreneurs, our experienced team is dedicated to creating
              robust, user-friendly solutions that safeguard your assets and
              peace of mind.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="flex sm:hidden overflow-x-auto gap-4 -mx-2 px-2 snap-x snap-mandatory">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="min-w-[80%] snap-start bg-gray-800 border border-blue-500/20 shadow-md rounded-xl"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl">
                    <member.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl text-white font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-snug">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-800 border border-blue-500/20 shadow-md rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-5 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-inner">
                    <member.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs leading-snug">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
