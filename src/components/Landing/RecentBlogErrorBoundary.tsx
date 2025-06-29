"use client";

import { Component, ReactNode } from "react";
import RecentBlogFallback from "./RecentBlogFallback";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class RecentBlogErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error("RecentBlog Error:", error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("RecentBlog Error Details:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <RecentBlogFallback />;
    }

    return this.props.children;
  }
}
