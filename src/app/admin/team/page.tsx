"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { ArrowLeft, Pencil, Trash2, Search, Upload, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  order: number;
}

export default function TeamPage() {
  const { status } = useSession();
  const router = useRouter();
  const { toast } = useToast();
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [filteredTeam, setFilteredTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState<TeamMember | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    description: "",
    image: "/images/team/placeholder.jpg",
    order: 0,
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  useEffect(() => {
    fetchTeam();
  }, []);

  useEffect(() => {
    // Filter team based on search query
    if (searchQuery.trim() === "") {
      setFilteredTeam(team);
    } else {
      const filtered = team.filter(
        (member) =>
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.role.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTeam(filtered);
    }
  }, [searchQuery, team]);

  const fetchTeam = async () => {
    try {
      const response = await fetch("/api/admin/team");
      const data = await response.json();
      setTeam(data);
      setFilteredTeam(data);
    } catch (error) {
      console.error("Failed to fetch team:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = "/api/admin/team";
      const method = editingId ? "PUT" : "POST";
      const body = editingId ? { id: editingId, ...formData } : formData;

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        fetchTeam();
        const memberName = formData.name;
        setFormData({ name: "", role: "", description: "", image: "/images/team/placeholder.jpg", order: 0 });
        setEditingId(null);
        toast({
          variant: "success",
          title: "✅ Success",
          description: editingId ? `Team member "${memberName}" updated successfully!` : `Team member "${memberName}" added successfully!`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "❌ Error",
          description: "Failed to save team member",
        });
      }
    } catch (error) {
      console.error("Failed to save team member:", error);
      toast({
        variant: "destructive",
        title: "❌ Error",
        description: "Error saving team member",
      });
    }
  };

  const handleEdit = (member: TeamMember) => {
    setFormData({
      name: member.name,
      role: member.role,
      description: member.description,
      image: member.image,
      order: member.order,
    });
    setEditingId(member.id);
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    try {
      const memberName = memberToDelete?.name;
      const response = await fetch(`/api/admin/team?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchTeam();
        setDeleteDialogOpen(false);
        setMemberToDelete(null);
        toast({
          variant: "destructive",
          title: "🗑️ Deleted",
          description: `Team member "${memberName}" deleted successfully!`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "❌ Error",
          description: "Failed to delete team member",
        });
      }
    } catch (error) {
      console.error("Failed to delete team member:", error);
      toast({
        variant: "destructive",
        title: "❌ Error",
        description: "Error deleting team member",
      });
    }
  };

  const openDeleteDialog = (member: TeamMember) => {
    setMemberToDelete(member);
    setDeleteDialogOpen(true);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In production, upload to your storage service
      // For now, show file name
      setFormData({ ...formData, image: `/images/team/${file.name}` });
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading team members...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link href="/admin/dashboard">
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Manage Team Members</h1>
          <p className="text-gray-600 mt-2">Add, edit, or remove team members</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>{editingId ? "Edit Team Member" : "Add New Team Member"}</CardTitle>
              <CardDescription>
                {editingId ? "Update team member information" : "Fill in the details to add a new team member"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="role">Role *</Label>
                  <Input
                    id="role"
                    placeholder="e.g., CEO & Founder"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Brief description of the team member's role and expertise..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    required
                  />
                  <p className="text-xs text-gray-500">
                    {formData.description.length} characters
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="image">Image</Label>
                  <div className="flex gap-2">
                    <Input
                      id="image"
                      placeholder="/images/team/photo.jpg"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    Upload an image or enter URL
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="order">Display Order *</Label>
                  <Input
                    id="order"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Lower numbers appear first
                  </p>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button type="submit" className="flex-1">
                    {editingId ? "Update Team Member" : "Add Team Member"}
                  </Button>
                  {editingId && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setEditingId(null);
                        setFormData({ name: "", role: "", description: "", image: "/images/team/placeholder.jpg", order: 0 });
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
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Current Team Members</CardTitle>
                  <CardDescription>
                    {team.length} team member{team.length !== 1 ? 's' : ''} total
                  </CardDescription>
                </div>
                <Link href="/about" target="_blank">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </Link>
              </div>
              
              {/* Search */}
              {team.length > 0 && (
                <div className="relative mt-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name or role..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              )}
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {filteredTeam.length === 0 ? (
                  <div className="text-center py-12">
                    {searchQuery ? (
                      <>
                        <Search className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">No team members found matching &quot;{searchQuery}&quot;</p>
                      </>
                    ) : (
                      <>
                        <p className="text-gray-500 mb-4">No team members yet.</p>
                        <p className="text-sm text-gray-400">Add your first team member using the form!</p>
                      </>
                    )}
                  </div>
                ) : (
                  filteredTeam.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-start justify-between p-4 rounded-lg border-2 bg-white border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex gap-3 flex-1">
                        <div className="shrink-0">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                            {member.name.charAt(0)}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-lg truncate">{member.name}</p>
                          <p className="text-sm text-blue-600">{member.role}</p>
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{member.description}</p>
                          <p className="text-xs text-gray-400 mt-1">Order: {member.order}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-2 shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(member)}
                          className="whitespace-nowrap"
                        >
                          <Pencil className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => openDeleteDialog(member)}
                          className="bg-red-500 whitespace-nowrap"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
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
              Delete Team Member
            </DialogTitle>
            <DialogDescription className="pt-4 text-base text-gray-700">
              Are you sure you want to permanently delete{" "}
              <strong className="text-gray-900">{memberToDelete?.name}</strong>?
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
                setMemberToDelete(null);
              }}
              className="flex-1 sm:flex-initial"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => memberToDelete && handleDelete(memberToDelete.id)}
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