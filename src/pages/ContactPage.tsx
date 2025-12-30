import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import iconCall from "@/assets/icon-call.png";
import iconEmail from "@/assets/icon-email.png";
import iconLocation from "@/assets/icon-location.png";

const contactInfo = [
  { icon: iconCall, text: "+1 (333) 444-5566" },
  { icon: iconEmail, text: "example@mail.com" },
  { icon: iconLocation, text: "Surakarta, Indonesia" },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    businessType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      fullName: "",
      email: "",
      company: "",
      businessType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-12">
        <section className="w-full py-24 px-4 md:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column - Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-foreground/60 text-sm mb-4 block">Contact us</span>
                <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-6">
                  Let's Talk
                </h1>
                <p className="text-muted-foreground max-w-md mb-12">
                  Lorem ipsum dolor sit amet consectetur vitae arcu augue sapien amet vel consectetur sit placerat mi id purus et varius id sed amet.
                </p>

                {/* Contact Info */}
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                        <img src={item.icon} alt="" className="w-6 h-6" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl border border-white/10 bg-card-fill p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-foreground text-sm font-medium">Full name</label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-muted/20 border-border text-foreground placeholder:text-muted-foreground h-12"
                      required
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-2">
                    <label className="text-foreground text-sm font-medium">Work Email</label>
                    <Input
                      type="email"
                      placeholder="Enter your work email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-muted/20 border-border text-foreground placeholder:text-muted-foreground h-12"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-foreground text-sm font-medium">Company</label>
                    <Input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-muted/20 border-border text-foreground placeholder:text-muted-foreground h-12"
                    />
                  </div>

                  {/* Business Type */}
                  <div className="space-y-2">
                    <label className="text-foreground text-sm font-medium">Business type</label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                    >
                      <SelectTrigger className="bg-muted/20 border-border text-foreground h-12">
                        <SelectValue placeholder="Select Business Type" />
                      </SelectTrigger>
                      <SelectContent className="bg-card-fill border-white/10">
                        <SelectItem value="startup">Startup</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                        <SelectItem value="agency">Agency</SelectItem>
                        <SelectItem value="freelancer">Freelancer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-foreground text-sm font-medium">Write message</label>
                    <Textarea
                      placeholder="What do you have on your mind?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-muted/20 border-border text-foreground placeholder:text-muted-foreground min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-medium rounded-lg"
                  >
                    Send
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
