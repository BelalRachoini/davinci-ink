import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
}

export function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For now, we'll simulate form submission
      // In a real implementation, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Consultation Request Submitted!",
        description: "We'll get back to you within 24 hours to schedule your consultation.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-medium text-white">
            First Name
          </Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="bg-dark-gray border-luxury-gold/30 focus:border-luxury-gold text-white"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-medium text-white">
            Last Name
          </Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="bg-dark-gray border-luxury-gold/30 focus:border-luxury-gold text-white"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-white">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="bg-dark-gray border-luxury-gold/30 focus:border-luxury-gold text-white"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-white">
          Phone
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="bg-dark-gray border-luxury-gold/30 focus:border-luxury-gold text-white"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-medium text-white">
          Tattoo Description
        </Label>
        <Textarea
          id="description"
          rows={4}
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Describe your tattoo idea, size, placement, etc."
          className="bg-dark-gray border-luxury-gold/30 focus:border-luxury-gold text-white resize-none"
          required
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-luxury-gold hover:bg-light-gold text-black py-4 font-semibold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-luxury-gold/30"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            SUBMITTING...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            SUBMIT CONSULTATION REQUEST
          </>
        )}
      </Button>
    </form>
  );
}
