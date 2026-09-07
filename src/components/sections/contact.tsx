"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand/social-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, SectionHeading } from "@/components/brand/chrome";
import { githubProfileUrl, hasValue, siteConfig } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company_website: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company_website: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [pending, setPending] = useState(false);
  const github = githubProfileUrl();

  function validate(values: FormState) {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.subject.trim()) next.subject = "Subject is required.";
    if (values.message.trim().length < 12) {
      next.message = "Please write a message of at least 12 characters.";
    }
    return next;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !json.ok) {
        toast.error(json.error || "The message could not be sent.");
        return;
      }
      toast.success("Message sent. Thank you.");
      setForm(emptyForm);
    } catch {
      toast.error("Network error. Please try again or use the contact details.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about backend, APIs, and product work"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <address className="h-full rounded-xl bg-navy p-6 text-[#F8F5EE] not-italic shadow-[var(--card-shadow)]">
              <h3 className="font-heading text-2xl">{siteConfig.name}</h3>
              <p className="mt-2 text-sm text-gold">{siteConfig.role}</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 text-gold" />
                  {siteConfig.location}
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 text-gold" />
                  {hasValue(siteConfig.contact.email) ? (
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                      {siteConfig.contact.email}
                    </a>
                  ) : (
                    <span>Email: mdanny892@gmail.com </span>
                  )}
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 text-gold" />
                  {hasValue(siteConfig.contact.phone) ? (
                    <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
                  ) : (
                    <span>Phone:+250 786 280 873</span>
                  )}
                </li>
                <li className="flex items-start gap-3">
                  <GitHubIcon className="mt-0.5 size-4 text-gold" />
                  {hasValue(github) ? (
                    <a href={github} target="_blank" rel="noreferrer" className="hover:underline">
                      GitHub
                    </a>
                  ) : (
                    <span> GitHub: https://github.com/mdanny11 </span>
                  )}
                </li>
                <li className="flex items-start gap-3">
                  <LinkedInIcon className="mt-0.5 size-4 text-gold" />
                  {hasValue(siteConfig.contact.linkedin) ? (
                    <a
                      href={siteConfig.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  ) : (
                    <span>LinkedIn: https://www.linkedin.com/in/mazimpaka-danny-ab71b3369/ </span>
                  )}
                </li>
              </ul>
            </address>
          </Reveal>
          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-xl bg-white p-6 shadow-[var(--card-shadow)] ring-1 ring-navy/10 dark:bg-card dark:ring-gold/15"
              noValidate
            >
              <div className="hidden" aria-hidden="true">
                <Label htmlFor="company_website">Company website</Label>
                <Input
                  id="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company_website}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, company_website: event.target.value }))
                  }
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  value={form.name}
                  error={errors.name}
                  onChange={(value) => setForm((current) => ({ ...current, name: value }))}
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={(value) => setForm((current) => ({ ...current, email: value }))}
                />
              </div>
              <Field
                id="subject"
                label="Subject"
                value={form.subject}
                error={errors.subject}
                onChange={(value) => setForm((current) => ({ ...current, subject: value }))}
              />
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={6}
                  value={form.message}
                  aria-invalid={Boolean(errors.message)}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, message: event.target.value }))
                  }
                />
                {errors.message ? (
                  <p className="text-sm text-destructive">{errors.message}</p>
                ) : null}
              </div>
              <Button type="submit" variant="gold" className="h-11 px-5" disabled={pending}>
                {pending ? "Sending…" : "Send message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        aria-invalid={Boolean(error)}
        className="h-10"
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
