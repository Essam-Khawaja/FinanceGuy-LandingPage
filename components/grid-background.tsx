"use client";

import type React from "react";

export function GridBackground({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`grid-background ${className}`}>{children}</div>;
}
