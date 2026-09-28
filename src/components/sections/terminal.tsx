"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal, SectionHeading } from "@/components/brand/chrome";
import { education, skillLevels, timeline } from "@/lib/content";
import { projects } from "@/lib/projects";
import { githubProfileUrl, hasValue, siteConfig } from "@/lib/site";

type Line = { type: "input" | "output"; text: string };

const helpText = [
  "Available commands:",
  "  help        List commands",
  "  about       Professional summary",
  "  skills      Skill groups",
  "  projects    Project titles",
  "  experience  Timeline",
  "  education   Degree details",
  "  github      GitHub profile",
  "  contact     Contact placeholders",
  "  clear       Clear the screen",
].join("\n");

function runCommand(input: string) {
  const command = input.trim().toLowerCase();
  switch (command) {
    case "":
      return "";
    case "help":
      return helpText;
    case "about":
      return `${siteConfig.name}\n${siteConfig.headline}\n${siteConfig.introduction}`;
    case "skills":
      return [
        `Strong: ${skillLevels.strong.join(", ")}`,
        `Proficient: ${skillLevels.proficient.join(", ")}`,
        `Working knowledge: ${skillLevels.working.join(", ")}`,
      ].join("\n");
    case "projects":
      return projects.map((project) => `- ${project.title}`).join("\n");
    case "experience":
      return timeline.map((item) => `${item.year} — ${item.title}`).join("\n");
    case "education":
      return `${education.institution}\n${education.degree}\n${education.period} · ${education.status}`;
    case "github": {
      const url = githubProfileUrl();
      return hasValue(url)
        ? url
        : "GitHub username is not configured. Set NEXT_PUBLIC_GITHUB_USERNAME.";
    }
    case "contact":
      return [
        siteConfig.location,
        hasValue(siteConfig.contact.email)
          ? siteConfig.contact.email
          : "Email placeholder: NEXT_PUBLIC_CONTACT_EMAIL",
        hasValue(siteConfig.contact.phone)
          ? siteConfig.contact.phone
          : "Phone placeholder: NEXT_PUBLIC_CONTACT_PHONE",
      ].join("\n");
    case "clear":
      return "__CLEAR__";
    default:
      return `Command not found: ${input}. Type "help" to see available commands.`;
  }
}

export function TerminalSection() {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: `Welcome to ${siteConfig.name}'s portfolio terminal.` },
    { type: "output", text: 'Type "help" to get started.' },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const log = logRef.current;
    if (!log) return;
    log.scrollTop = log.scrollHeight;
  }, [lines]);

  function submit(command: string) {
    const output = runCommand(command);
    if (output === "__CLEAR__") {
      setLines([]);
      return;
    }
    setLines((current) => [
      ...current,
      { type: "input", text: command },
      ...(output ? [{ type: "output" as const, text: output }] : []),
    ]);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      const command = value;
      if (command.trim()) {
        setHistory((current) => [...current, command]);
      }
      setHistoryIndex(-1);
      submit(command);
      setValue("");
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!history.length) return;
      const nextIndex = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setValue(history[nextIndex] ?? "");
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex < 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setValue("");
        return;
      }
      setHistoryIndex(nextIndex);
      setValue(history[nextIndex] ?? "");
    }
  }

  return (
    <section id="terminal" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Interactive terminal"
          title="Explore the portfolio from the command line"
        />
        <Reveal className="mt-10">
          <div
            className="overflow-hidden rounded-xl border border-navy/30 bg-navy font-mono text-sm text-[#F8F5EE] shadow-[var(--card-shadow)]"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="border-b border-white/10 px-4 py-2 text-xs tracking-wide text-gold">
              danny@portfolio:~
            </div>
            <div ref={logRef} className="max-h-[28rem] overflow-y-auto px-4 py-4">
              {lines.map((line, index) => (
                <pre key={`${line.type}-${index}`} className="mb-2 whitespace-pre-wrap">
                  {line.type === "input" ? (
                    <span>
                      <span className="text-gold">$</span> {line.text}
                    </span>
                  ) : (
                    line.text
                  )}
                </pre>
              ))}
              <div className="flex items-center gap-2">
                <label htmlFor="terminal-input" className="text-gold">
                  $
                </label>
                <input
                  id="terminal-input"
                  ref={inputRef}
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  onKeyDown={onKeyDown}
                  className="w-full bg-transparent outline-none"
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Terminal command"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
