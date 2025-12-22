"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HomeContentPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link href="/admin/dashboard">
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Edit Home Content</h1>
          <p className="text-gray-600 mt-2">Manage homepage content and sections</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Home Page Content Editor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">
                Home content editor coming soon!
              </p>
              <p className="text-sm text-gray-500">
                Currently, you can edit home content in the constants files at:
                <code className="block mt-2 bg-gray-100 p-2 rounded">
                  src/constants/home.ts
                </code>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
