"use client";
import Loading from "@/components/Loading";
import { redirect, useParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const params = useParams<{ id: string }>()

  useEffect(() => {
    if (params.id) {
      redirect(`/${params.id}`)
    } else {
      redirect(`/edit`)
    }
  }, [params]);

  return <Loading />;
}
