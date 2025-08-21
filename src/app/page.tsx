"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Marquee3D } from "@/components/marquee3d"
import { DockBar } from "@/components/dock-bar"
import { CountdownTimer } from "@/components/countdown-timer"
import { Marquee } from "@/components/magicui/marquee"
import EventCard from "@/components/event-card"
import { SponsorsSection } from "@/components/sponsors-section"
import { ScheduleSection } from "@/components/schedule-section"
import { ChatWidget } from "@/components/chat-widget"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const securityEvents = [
    {
      title: "CYBER FORTRESS",
      tagline: "Advanced Threat Detection Workshop",
      coverImage: "/cybersecurity-fortress-shield.png",
    },
    {
      title: "QUANTUM GUARD",
      tagline: "Next-Gen Encryption Protocols",
      coverImage: "/quantum-encryption-security-matrix.png",
    },
    {
      title: "NEURAL SHIELD",
      tagline: "AI-Powered Security Systems",
      coverImage: "/neural-network-cybersecurity-ai.png",
    },
    {
      title: "CRYPTO VAULT",
      tagline: "Blockchain Security Summit",
      coverImage: "/placeholder-e5k5r.png",
    },
    {
      title: "FIREWALL NEXUS",
      tagline: "Network Defense Strategies",
      coverImage: "/firewall-network-security.png",
    },
    {
      title: "BIOMETRIC LOCK",
      tagline: "Identity Verification Systems",
      coverImage: "/biometric-fingerprint-lock.png",
    },
    {
      title: "THREAT HUNTER",
      tagline: "Proactive Security Operations",
      coverImage: "/placeholder-99rbp.png",
    },
    {
      title: "SECURE CLOUD",
      tagline: "Cloud Infrastructure Protection",
      coverImage: "/secure-cloud-infrastructure.png",
    },
    {
      title: "ZERO TRUST",
      tagline: "Modern Security Architecture",
      coverImage: "/zero-trust-architecture.png",
    },
    {
      title: "INCIDENT RESPONSE",
      tagline: "Emergency Security Protocols",
      coverImage: "/incident-response-emergency-cybersecurity.png",
    },
    {
      title: "PENETRATION TEST",
      tagline: "Ethical Hacking Workshop",
      coverImage: "/penetration-testing-ethical-hacking.png",
    },
    {
      title: "SECURITY AUDIT",
      tagline: "Comprehensive Risk Assessment",
      coverImage: "/security-audit-risk-assessment.png",
    },
  ]

  const firstRow = securityEvents.slice(0, 6)
  const secondRow = securityEvents.slice(6, 12)

  return (
    <div className="min-h-screen bg-black relative pb-16 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-black" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl" />
      </div>

      <div className="fixed inset-0 w-full h-screen pointer-events-none z-0">
        <div className="absolute inset-0 opacity-10">
          <Marquee3D />
        </div>
      </div>

      <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 opacity-40">
          <div className="spark absolute top-20 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
          <div className="spark absolute top-32 right-32 w-1 h-1 bg-teal-500 rounded-full animate-ping delay-500" />
          <div className="spark absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping delay-1000" />
          <div className="spark absolute bottom-20 right-20 w-2 h-2 bg-teal-500 rounded-full animate-ping delay-1500" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent mb-6 font-mono tracking-wider">
              UPDATES
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6 font-mono tracking-wider">
              2K25
            </h2>
          </div>

          <CountdownTimer />
        </div>
      </section>

      <SponsorsSection />

      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-8 font-mono">
            Cybersecurity will revolutionize digital protection forever.
          </h3>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 text-lg px-4 py-2 bg-emerald-500/20 text-emerald-400 border-emerald-400 font-mono"
            >
              Security Suite
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6 font-mono">
              Featured Events
            </h2>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s] mb-4">
              {firstRow.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s]">
              {secondRow.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
          </div>
        </div>
      </section>

      <ScheduleSection />

      <footer className="py-20 px-4 border-t border-emerald-400/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4 font-mono">
                Faculty Coordinator
              </h3>
              <p className="text-emerald-300/70 font-mono">Dr. Sarah Johnson</p>
              <p className="text-emerald-300/70 font-mono">Head of Cybersecurity</p>
            </div>

            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4 font-mono">
                Student Coordinator
              </h3>
              <p className="text-emerald-300/70 font-mono">Alex Chen</p>
              <p className="text-emerald-300/70 font-mono">Final Year CSE</p>
            </div>

            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4 font-mono">
                Web Team
              </h3>
              <p className="text-emerald-300/70 font-mono">Dev Squad</p>
              <p className="text-emerald-300/70 font-mono">Technical Team</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-emerald-300/70 font-mono">
              © 2025 Updates 2K25. Secured by quantum encryption protocols.
            </p>
          </div>
        </div>
      </footer>

      <DockBar />
      <ChatWidget />
    </div>
  )
}
