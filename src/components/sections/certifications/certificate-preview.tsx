"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Certification, CertificationPreview } from "@/types/certification";

type Props = { cert: Certification & { preview: CertificationPreview } };

/** Thumbnail of a certificate that expands to a full-size view on click. */
export default function CertificatePreview({ cert }: Props) {
  const { name, issuer, date, file, preview } = cert;
  const alt = `${name} certificate${issuer ? ` from ${issuer}` : ""}`;
  const meta = [issuer, date].filter(Boolean).join(" · ");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`View ${name} certificate`}
          className="group flex w-full flex-col gap-3 rounded-lg text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <div className="aspect-4/3 overflow-hidden rounded-lg border border-border bg-card transition-colors group-hover:border-ring">
            <Image
              src={preview.src}
              alt=""
              width={preview.width}
              height={preview.height}
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
              className="size-full object-cover object-top"
            />
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            {meta && <p className="text-sm text-muted-foreground">{meta}</p>}
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          {meta && <DialogDescription>{meta}</DialogDescription>}
        </DialogHeader>
        <Image
          src={preview.src}
          alt={alt}
          width={preview.width}
          height={preview.height}
          sizes="(min-width: 896px) 864px, 95vw"
          className="h-auto w-full rounded-md border border-border"
        />
        {file && (
          <div>
            <Button asChild variant="outline" size="sm">
              <a href={file} target="_blank" rel="noopener noreferrer">
                Open PDF
                <ExternalLink data-icon="inline-end" aria-hidden="true" />
              </a>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
