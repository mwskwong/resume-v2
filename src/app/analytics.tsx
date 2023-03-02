"use client";

import {
  AnalyticsProps,
  Analytics as VercelAnalytics,
} from "@vercel/analytics/react";
import { FC } from "react";

const Analytics: FC<AnalyticsProps> = props => <VercelAnalytics {...props} />;

export default Analytics;
