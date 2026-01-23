import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WhatsAppBookingForm from "@/components/site/WhatsAppBookingForm";

type Props = {
  triggerVariant?: React.ComponentProps<typeof Button>["variant"];
  triggerLabel?: string;
  className?: string;
};

export default function WhatsAppBookingDialog({
  triggerVariant = "outline",
  triggerLabel = "Book Consultation",
  className,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} size="pill" className={className}>
          {triggerLabel}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[85vh] w-[min(560px,calc(100%-2rem))] overflow-auto rounded-3xl p-6 shadow-elevated">
        <DialogHeader>
          <DialogTitle>Book a Consultation</DialogTitle>
          <DialogDescription>
            This will open WhatsApp with a pre-filled message. We typically respond quickly.
          </DialogDescription>
        </DialogHeader>

        <WhatsAppBookingForm />
      </DialogContent>
    </Dialog>
  );
}
