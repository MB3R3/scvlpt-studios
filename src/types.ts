/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ProjectType = "REAL" | "CONCEPT";

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  category: string;
  description: string;
  image: string | null;
  technologies: string[];
  year: string | null;
  status: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
  overview?: string;
  role?: string;
  screenshots?: string[];
  challenge?: string;
  approach?: string;
  outcome?: string;
  designDirection?: string;
  development?: string;
  recommendation?: string;
  nextSlug?: string;
}
