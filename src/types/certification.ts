export interface CertificationPreview {
  /** Public path to an image of the certificate, e.g. "/certificates/foo.webp". */
  src: string;
  width: number;
  height: number;
}

export interface Certification {
  name: string;
  issuer?: string;
  date?: string;
  /** Public path to the certificate PDF, e.g. "/certificates/foo.pdf". */
  file?: string;
  /** Image of the certificate, shown as a thumbnail and in the expanded view. */
  preview?: CertificationPreview;
}
