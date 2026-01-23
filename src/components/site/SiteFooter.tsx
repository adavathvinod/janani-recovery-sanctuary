import { JANANI, links } from "@/lib/janani";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-surface">
      <div className="container grid gap-8 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="text-lg">{JANANI.name}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Professional, trustworthy care in a calm, clean environment.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-sm font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              Phone: <a className="text-foreground underline-offset-4 hover:underline" href={links.tel}>{JANANI.phone}</a>
            </li>
            <li>
              Email: <a className="text-foreground underline-offset-4 hover:underline" href={`mailto:${JANANI.email}`}>{JANANI.email}</a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-sm font-semibold">Address</div>
          <p className="mt-3 text-sm text-muted-foreground">{JANANI.addressLine}</p>
          <a className="mt-3 inline-block text-sm text-foreground underline-offset-4 hover:underline" href={links.maps} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Janani Alcohol & Drug Rehabilitation Centre.
        </div>
      </div>
    </footer>
  );
}
