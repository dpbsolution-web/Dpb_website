"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { 
  BarChart3, 
  Users, 
  MessageSquare, 
  Home, 
  Info, 
  LogOut,
  Shield
} from "lucide-react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const menuItems = [
    {
      title: "Manage Statistics",
      description: "Edit homepage and about page statistics",
      icon: BarChart3,
      href: "/admin/stats",
      color: "bg-blue-500"
    },
    {
      title: "Manage Team Members",
      description: "Add, edit, or remove team members",
      icon: Users,
      href: "/admin/team",
      color: "bg-green-500"
    },
    {
      title: "Manage Testimonials",
      description: "Edit client testimonials and reviews",
      icon: MessageSquare,
      href: "/admin/testimonials",
      color: "bg-purple-500"
    },
    {
      title: "Manage Career Openings",
      description: "Add, edit job openings and positions",
      icon: Shield,
      href: "/admin/careers",
      color: "bg-indigo-500"
    },
    {
      title: "Edit Home Content",
      description: "Update homepage content and sections",
      icon: Home,
      href: "/admin/home",
      color: "bg-orange-500"
    },
    {
      title: "Edit About Content",
      description: "Update about page content",
      icon: Info,
      href: "/admin/about",
      color: "bg-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">DPB Solution CMS</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{session.user.name || session.user.email}</p>
                <p className="text-xs text-gray-600">{session.user.role}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => signOut({ callbackUrl: "/admin/login" })}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Welcome back, {session.user.name || "Admin"}!
          </h2>
          <p className="text-gray-600">
            Manage your website content from this dashboard
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className={`${item.color} p-3 rounded-lg text-white`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/">
              <Button variant="outline" size="sm">
                View Website
              </Button>
            </Link>
            <Link href="/admin/stats">
              <Button variant="outline" size="sm">
                Update Stats
              </Button>
            </Link>
            <Link href="/admin/team">
              <Button variant="outline" size="sm">
                Add Team Member
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
