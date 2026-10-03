import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import type { Project } from "@/types/project";
import ProjectCard from "./project-card";

afterEach(cleanup);

const base: Project = {
  title: "Demo",
  summary: "A demo project.",
  status: "complete",
  stack: ["Laravel", "MySQL"],
  highlights: ["Does a thing"],
};

test("renders title, summary, highlights, and stack", () => {
  render(<ProjectCard project={base} />);

  expect(screen.getByText("Demo")).toBeTruthy();
  expect(screen.getByText("A demo project.")).toBeTruthy();
  expect(screen.getByText("Does a thing")).toBeTruthy();
  expect(screen.getByText("Laravel")).toBeTruthy();
  expect(screen.queryByText("In progress")).toBeNull();
  expect(screen.queryByRole("link")).toBeNull();
});

test("shows status badge and links when provided", () => {
  render(
    <ProjectCard
      project={{ ...base, status: "in-progress", repoUrl: "https://github.com/x/y", liveUrl: "https://y.dev" }}
    />,
  );

  expect(screen.getByText("In progress")).toBeTruthy();
  expect(screen.getByRole("link", { name: /Code/ }).getAttribute("href")).toBe("https://github.com/x/y");
  expect(screen.getByRole("link", { name: /Live demo/ }).getAttribute("href")).toBe("https://y.dev");
});
