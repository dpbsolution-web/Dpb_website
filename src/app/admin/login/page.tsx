"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Lock, Mail, Shield, Zap, Server, Database, Network, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/admin/dashboard");
        router.refresh();
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated Matrix-style Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-brrom-cyan-950 via-blue-950 to-purple-950 opacity-70"></div>
        
        {/* Animated Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,255,255,0.2)" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3">
                <animate attributeName="stopColor" values="#00ffff;#0080ff;#00ffff" dur="4s" repeatCount="indefinite"/>
              </stop>
              <stop offset="100%" stopColor="#0080ff" stopOpacity="0.3">
                <animate attributeName="stopColor" values="#0080ff;#8000ff;#0080ff" dur="4s" repeatCount="indefinite"/>
              </stop>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
          
          {/* Animated Circuit Lines */}
          <g className="circuit-lines">
            <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,10">
              <animate attributeName="x1" values="10%;90%;10%" dur="8s" repeatCount="indefinite"/>
            </line>
            <line x1="20%" y1="40%" x2="80%" y2="60%" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,10">
              <animate attributeName="y2" values="60%;20%;60%" dur="6s" repeatCount="indefinite"/>
            </line>
            <line x1="80%" y1="30%" x2="20%" y2="70%" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,10">
              <animate attributeName="x2" values="20%;80%;20%" dur="7s" repeatCount="indefinite"/>
            </line>
          </g>
          
          {/* Glowing Nodes */}
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={`${(i * 8 + 10)}%`}
              cy={`${(i % 3) * 30 + 15}%`}
              r="3"
              fill="#00ffff"
              className="animate-pulse-glow"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" begin={`${i * 0.2}s`}/>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin={`${i * 0.2}s`}/>
            </circle>
          ))}
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {mounted && [...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl flex items-center gap-12">
          
          {/* Left Side - Info Panel */}
          <div className="hidden lg:flex flex-1 flex-col space-y-8 animate-slide-in-left">
            {/* Logo Section */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-2xl shadow-cyan-500/50 overflow-hidden">
                    <Image 
                      src="/images/logo.jpeg" 
                      alt="DPB Solution Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-cyan-400 to-blue-600 opacity-20 blur-xl animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white tracking-tight">DPB Solution</h1>
                  <p className="text-cyan-400 text-sm font-medium">Telecommunications Excellence</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Secure access to the most advanced telecommunications management platform
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {[
                { icon: Server, label: "Enterprise Grade", desc: "99.99% Uptime SLA" },
                { icon: Database, label: "Real-time Analytics", desc: "Live dashboard monitoring" },
                { icon: Network, label: "Global Network", desc: "10+ cities coverage" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-cyan-500/20 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-linear-to-brrom-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">{feature.label}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-cyan-500/20">
              {[
                { value: "9+", label: "Clients" },
                { value: "200+", label: "Projects" },
                { value: "6+", label: "Years" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex-1 max-w-md w-full animate-slide-in-right">
            <Card className="relative backdrop-blur-2xl bg-linear-to-br from-white/10 to-white/5 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden">
              {/* Animated Glowing Border */}
              <div className="absolute inset-0 rounded-lg">
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 animate-border-flow"></div>
              </div>
              
              {/* Header */}
              <div className="p-8 pb-6 relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-linear-to-brrom-cyan-400 to-blue-600 flex items-center justify-center">
                      <Lock className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-linear-to-br from-cyan-400 to-blue-600 opacity-50 blur-lg animate-pulse"></div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-center text-white mb-2">
                  Admin Access
                </h2>
                <p className="text-center text-cyan-300 text-sm">
                  Enter your credentials to continue
                </p>
              </div>

              {/* Form */}
              <div className="px-8 pb-8 relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Input */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-medium flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="info@dpbsolution.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={loading}
                      className="h-12 bg-black/30 border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:bg-black/40 transition-colors duration-200 pl-4"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white font-medium flex items-center gap-2 text-sm">
                      <Lock className="w-4 h-4 text-cyan-400" />
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={loading}
                      className="h-12 bg-black/30 border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:bg-black/40 transition-colors duration-200 pl-4"
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="relative overflow-hidden rounded-lg bg-red-500/10 border border-red-500/30 p-4 backdrop-blur-sm animate-shake">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                          <span className="text-red-400 text-lg">✕</span>
                        </div>
                        <p className="text-red-300 text-sm font-medium">{error}</p>
                      </div>
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-rrom-transparent via-red-500 to-transparent animate-slide"></div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="relative w-full h-13 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-base shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-300 overflow-hidden group border-0" 
                    disabled={loading}
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    {loading ? (
                      <div className="flex items-center justify-center gap-3 relative z-10">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Authenticating...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2 relative z-10">
                        <Shield className="w-5 h-5" />
                        <span>Sign In Securely</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>

                  {/* Forgot Password */}
                  <div className="text-center">
                    <Link href="/admin/forgot-password">
                      <button 
                        type="button" 
                        className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:underline font-medium inline-flex items-center gap-1"
                      >
                        <Zap className="w-3 h-3" />
                        Forgot your password?
                      </button>
                    </Link>
                  </div>
                </form>
              </div>

              {/* Footer */}
              <div className="px-8 pb-8 pt-4 border-t border-cyan-500/20 relative">
                <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-cyan-400" />
                    256-bit SSL
                  </span>
                  <span className="w-1 h-1 rounded-full bg-cyan-500/50"></span>
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    Encrypted
                  </span>
                  <span className="w-1 h-1 rounded-full bg-cyan-500/50"></span>
                  <span className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-cyan-400" />
                    Secure
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes border-flow {
          0% { transform: translateX(-100%) translateY(0); }
          50% { transform: translateX(100%) translateY(0); }
          100% { transform: translateX(-100%) translateY(0); }
        }
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(0,255,255,0.5)); }
          50% { filter: drop-shadow(0 0 8px rgba(0,255,255,1)); }
        }
        .animate-shake { animation: shake 0.5s; }
        .animate-slide { animation: slide 2s ease-in-out; }
        .animate-border-flow { animation: border-flow 3s linear infinite; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.6s ease-out; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .particle {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
