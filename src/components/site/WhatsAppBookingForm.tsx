import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { JANANI, whatsappLink } from "@/lib/janani";

type Props = {
  className?: string;
};

export default function WhatsAppBookingForm({ className }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const waMessage = useMemo(() => {
    const lines = [
      "Hello Janani Rehabilitation Centre,",
      "",
      "I would like to book a consultation.",
      name ? `Name: ${name}` : null,
      phone ? `Phone: ${phone}` : null,
      message ? `Message: ${message}` : null,
      "",
      "Please share admission details and the next steps.",
    ].filter(Boolean);

    return lines.join("\n");
  }, [name, phone, message]);

  return (
    <div className={className}>
      <h2 className="text-xl font-semibold text-foreground">Book a Consultation</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill this and it will open WhatsApp with a ready message to {JANANI.phone}.
      </p>

      <form
        className="mt-5 grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          window.open(whatsappLink(waMessage), "_blank", "noopener,noreferrer");
        }}
      >
        <div className="grid gap-2">
          <Label htmlFor="booking-name">Your Name</Label>
          <Input
            id="booking-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            autoComplete="name"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="booking-phone">Your Phone</Label>
          <Input
            id="booking-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            inputMode="tel"
            autoComplete="tel"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="booking-message">Message (optional)</Label>
          <Textarea
            id="booking-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Symptoms, duration, preferred callback time…"
            rows={4}
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Button type="submit" variant="hero" size="pill">
            Send on WhatsApp
          </Button>
          <Button type="button" variant="outline" size="pill" onClick={() => setMessage("")}
          >
            Clear Message
          </Button>
        </div>
      </form>
    </div>
  );
}
