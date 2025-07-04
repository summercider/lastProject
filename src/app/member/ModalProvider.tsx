'use client';

import { useState } from 'react';

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
