import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

// The Homepage.
export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return <SliceZone slices={page.data.slices} components={components} />;
}

// Generating Meta Data.
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
