"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { ArrowLeft, Pencil, Trash2, Briefcase, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  active: boolean;
  order: number;
}

export default function CareersPage() {
  const { status } = useSession();
  const router = useRouter();
  const { toast } = useToast();
  const [openings, setOpenings] = useState<JobOpening[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [openingToDelete, setOpeningToDelete] = useState<JobOpening | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-time",
    description: "",
    requirements: "",
    active: true,
    order: 0,
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  useEffect(() => {
    fetchOpenings();
  }, []);

  const fetchOpenings = async () => {
    try {
      const response = await fetch("/api/admin/careers", {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      const data = await response.json();
      console.log('Fetched openings:', data); // Debug log
      setOpenings(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch openings:", error);
      setOpenings([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = "/api/admin/careers";
      const method = editingId ? "PUT" : "POST";
      const body = editingId ? { id: editingId, ...formData } : formData;

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        fetchOpenings();
        const jobTitle = formData.title;
        setFormData({ 
          title: "", 
          department: "", 
          location: "", 
          type: "Full-time", 
          description: "", 
          requirements: "", 
          active: true, 
          order: 0 
        });
        setEditingId(null);
        toast({
          variant: "success",
          title: "Success",
          description: editingId ? `Job opening "${jobTitle}" updated successfully!` : `Job opening "${jobTitle}" created successfully!`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to save job opening",
        });
      }
    } catch (error) {
      console.error("Failed to save job opening:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error saving job opening",
      });
    }
  };

  const handleEdit = (opening: JobOpening) => {
    setFormData({
      title: opening.title,
      department: opening.department,
      location: opening.location,
      type: opening.type,
      description: opening.description,
      requirements: opening.requirements,
      active: opening.active,
      order: opening.order,
    });
    setEditingId(opening.id);
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    try {
      const openingTitle = openingToDelete?.title;
      const response = await fetch(`/api/admin/careers?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchOpenings();
        setDeleteDialogOpen(false);
        setOpeningToDelete(null);
        toast({
          variant: "destructive",
          title: "Deleted",
          description: `Job opening "${openingTitle}" deleted successfully!`,
        });
      } else {
        toast({
          variant: "destructive",
          title: " Error",
          description: "Failed to delete job opening",
        });
      }
    } catch (error) {
      console.error("Failed to delete job opening:", error);
      toast({
        variant: "destructive",
        title: " Error",
        description: "Error deleting job opening",
      });
    }
  };

  const openDeleteDialog = (opening: JobOpening) => {
    setOpeningToDelete(opening);
    setDeleteDialogOpen(true);
  };

  if (status === "loading" || loading) {
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
          <h1 className="text-3xl font-bold text-gray-900">Manage Career Openings</h1>
          <p className="text-gray-600 mt-2">Add, edit, or remove job openings</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Form */}
          <Card className="h-fit">
            <CardHeader className="border-b">
              <CardTitle>{editingId ? "Edit Job Opening" : "Add New Job Opening"}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Senior Software Engineer"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    placeholder="e.g., Engineering"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g., Remote"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Job Type</Label>
                    <select
                      id="type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe the role and responsibilities..."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements (one per line)</Label>
                  <Textarea
                    id="requirements"
                    rows={4}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="- 5+ years of experience&#10;- Strong in React and Node.js&#10;- Excellent communication skills"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="order">Display Order</Label>
                    <Input
                      id="order"
                      type="number"
                      value={formData.order}
                      onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.active}
                        onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                        className="w-4 h-4"
                      />
                      Active (visible on website)
                    </Label>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button type="submit" className="flex-1 border-2 border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 font-semibold">
                    {editingId ? "Update" : "Add"} Job Opening
                  </Button>
                  {editingId && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setEditingId(null);
                        setFormData({ 
                          title: "", 
                          department: "", 
                          location: "", 
                          type: "Full-time", 
                          description: "", 
                          requirements: "", 
                          active: true, 
                          order: 0 
                        });
                      }}
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* List */}
          <Card className="h-fit lg:max-h-[900px] flex flex-col">
            <CardHeader className="border-b bg-white shrink-0">
              <CardTitle>All Job Openings ({openings.length})</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-1 overflow-hidden">
              <div className="h-full max-h-[780px] overflow-y-auto p-6 space-y-4">
                {loading ? (
                  <p className="text-gray-500 text-center py-8">Loading...</p>
                ) : openings.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No job openings yet. Add one!</p>
                ) : (
                  openings.map((opening, index) => (
                    <div
                      key={opening.id}
                      className={`p-5 rounded-lg border-2 shadow-sm transition-all hover:shadow-md ${
                        opening.active ? "bg-white border-green-300" : "bg-gray-50 border-gray-300"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded">#{index + 1}</span>
                            <h3 className="font-bold text-lg text-gray-900 truncate">{opening.title}</h3>
                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${
                              opening.active ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"
                            }`}>
                              {opening.active ? "✓ Active" : "○ Inactive"}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                            <span className="flex items-center gap-1.5">
                              <Briefcase className="h-4 w-4 text-gray-400" />
                              <span className="font-medium">{opening.department}</span>
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-4 w-4 text-gray-400" />
                              <span className="font-medium">{opening.location}</span>
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span className="font-medium">{opening.type}</span>
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-2">{opening.description}</p>
                          <p className="text-xs text-gray-400 font-medium">Display Order: {opening.order}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(opening)}
                          className="flex items-center gap-1.5 font-medium border-2 flex-1 min-w-[100px]"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => openDeleteDialog(opening)}
                          className="flex items-center text-black gap-1.5 font-medium border-2 border-red-600 flex-1 min-w-[100px]"
                        >
                          <Trash2 className="h-3.5 w-3.5 " />
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="bg-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600 text-xl font-bold">
              <Trash2 className="h-6 w-6" />
              Delete Job Opening
            </DialogTitle>
            <DialogDescription className="pt-4 text-base text-gray-700">
              Are you sure you want to permanently delete{" "}
              <strong className="text-gray-900">{openingToDelete?.title}</strong>?
              <br />
              <br />
              <span className="text-red-600 font-semibold text-base flex items-center gap-2">
                ⚠️ This action cannot be undone!
              </span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => {
                setDeleteDialogOpen(false);
                setOpeningToDelete(null);
              }}
              className="flex-1 sm:flex-initial"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => openingToDelete && handleDelete(openingToDelete.id)}
              className="gap-2 flex-1 sm:flex-initial bg-red-500"
            >
              <Trash2 className="h-4 w-4" />
              Delete Permanently
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
