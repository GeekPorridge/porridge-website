"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function LiveClock() {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => setNow(dayjs()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <>{now.format("YYYY-MM-DD HH:mm:ss")}</>;
}
