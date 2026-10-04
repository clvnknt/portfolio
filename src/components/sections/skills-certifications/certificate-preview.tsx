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

/** One certificate as a compact row (small thumbnail, name, issuer and date) that expands to a full-size view. */
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
          className="group -mx-2 flex w-[calc(100%+1rem)] items-center gap-4 rounded-lg p-2 text-left outline-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span className="h-12 w-16 shrink-0 overflow-hidden rounded-md border border-border bg-logo-surface transition-colors group-hover:border-primary">
            <Image
              src={preview.src}
              alt=""
              width={preview.width}
              height={preview.height}
              sizes="64px"
              className="size-full object-cover object-top"
            />
          </span>
          <span className="min-w-0">
            <span className="block text-sm leading-snug font-medium">{name}</span>
            {meta && <span className="mt-0.5 block text-xs text-muted-foreground">{meta}</span>}
          </span>
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
