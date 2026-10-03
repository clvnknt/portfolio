export interface TimelineEntry {
  /** Role or degree, e.g. "Junior Web Developer". */
  title: string;
  /** Company or school. Also drives the monogram shown when there is no `logo`. */
  organization: string;
  date?: string;
  description?: string;
  /** Path to a local image under public/images/logos/. Falls back to a monogram. */
  logo?: string;
}
