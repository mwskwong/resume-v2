"use client";

import { Analytics as VercelAnalytics, AnalyticsProps } from "@vercel/analytics/react";
import { FC } from "react";

const Analytics: FC<AnalyticsProps> = props => <VercelAnalytics {...props} />;

export default Analytics;