export interface Attorney {
  slug: string;
  name: string;
  title: string;
  practiceAreas: string[];
  location: string;
  bio: string;
  email: string;
  phone: string;
  education: { degree: string; school: string; year: number }[];
  barAdmissions: string[];
  languages?: string[];
  matters: string[];
  articles?: string[];
  photo: string;
}

export interface PracticeArea {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  whoItIsFor: string[];
  whatWeHandle: string[];
  approach: string;
  relatedAttorneys: string[];
}

export interface CaseResult {
  id: string;
  category: string;
  year: number;
  outcome: string;
  description: string;
  attorneys?: string[];
}

export interface Insight {
  slug: string;
  title: string;
  category: string;
  author: string;
  authorSlug: string;
  date: string;
  readTime: string;
  excerpt: string;
  content?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  matterType: string;
  message: string;
  preferredContact: "email" | "phone" | "either";
}
